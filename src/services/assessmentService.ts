import { supabase } from '../lib/supabase';
import { sendAssessmentToWebhook } from './webhookService';

interface AssessmentData {
  answers: number[];
  userInfo: {
    email: string;
    companyName: string;
    companySize: string;
    industry?: string;
  };
}

interface RoadmapData {
  scores: number[];
  textAnswers: { [key: number]: string };
  assessmentId?: string;
}

export async function saveAssessment(data: AssessmentData) {
  try {
    // Calculate total score
    const totalScore = data.answers.reduce((sum, score) => sum + score, 0);
    
    // Save to Supabase
    const { data: assessment, error } = await supabase
      .from('assessments')
      .insert({
        answers: data.answers,
        score: totalScore,
        user_info: data.userInfo,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    // Send to Make.com webhook
    const webhookResponse = await sendAssessmentToWebhook(
      data.answers,
      {
        ...data.userInfo,
        type: 'assessment',
        assessmentId: assessment.id
      }
    );

    return {
      success: true,
      assessmentId: assessment.id,
      webhookResponse
    };

  } catch (error) {
    console.error('Error saving assessment:', error);
    throw error;
  }
}

export async function saveRoadmap(data: RoadmapData, userInfo: AssessmentData['userInfo']) {
  try {
    // Save roadmap responses to Supabase
    const { data: roadmap, error } = await supabase
      .from('roadmaps')
      .insert({
        scores: data.scores,
        text_answers: data.textAnswers,
        assessment_id: data.assessmentId,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    // Send to Make.com webhook with combined data
    const webhookResponse = await sendAssessmentToWebhook(
      data.scores,
      {
        ...userInfo,
        type: 'roadmap',
        assessmentId: data.assessmentId,
        roadmapId: roadmap.id
      }
    );

    return {
      success: true,
      roadmapId: roadmap.id,
      webhookResponse
    };

  } catch (error) {
    console.error('Error saving roadmap:', error);
    throw error;
  }
}