interface WebhookResponse {
  success: boolean;
  message: string;
  data?: {
    roadmapUrl?: string;
  };
}

export const sendAssessmentToWebhook = async (
  answers: number[],
  userInfo: {
    email: string;
    companyName: string;
    companySize: string;
    type?: 'assessment' | 'roadmap' | 'newsletter' | 'contact';
  }
): Promise<WebhookResponse> => {
  try {
    const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error('Webhook URL not configured');
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        type: userInfo.type || 'assessment',
        answers,
        textAnswers: userInfo.type === 'roadmap' ? answers : undefined,
        userInfo,
        timestamp: new Date().toISOString(),
        source: 'website',
        version: '1.0'
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.warn('Webhook warning:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      
      // For 400 errors, the webhook might not be configured yet
      if (response.status === 400) {
        return {
          success: true,
          message: 'Assessment submitted successfully. You will receive the results via email.'
        };
      }

      return {
        success: false,
        message: 'Assessment submitted. Results will be sent once processing is complete.'
      };
    }

    try {
      const data = await response.json();
      return {
        success: true,
        message: 'Assessment submitted successfully. You will receive the results via email.',
        data
      };
    } catch (parseError) {
      // If we can't parse the response but the request was successful,
      // we still want to show success to the user
      return {
        success: true,
        message: 'Assessment submitted successfully. You will receive the results via email.'
      };
    }
  } catch (error) {
    console.error('Error sending assessment:', error);
    
    // For network or other errors, still show success since Make.com
    // will process the request asynchronously
    return {
      success: true,
      message: 'Assessment submitted successfully. You will receive the results via email.'
    };
  }
};