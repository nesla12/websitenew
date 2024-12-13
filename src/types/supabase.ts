export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      roadmaps: {
        Row: {
          id: string
          assessment_id: string
          scores: number[]
          text_answers: Json
          created_at: string
        }
        Insert: {
          id?: string
          assessment_id: string
          scores: number[]
          text_answers: Json
          created_at?: string
        }
        Update: {
          id?: string
          assessment_id?: string
          scores?: number[]
          text_answers?: Json
          created_at?: string
        }
      }
      guides: {
        Row: {
          id: string
          title: string
          content: string
          author: string
          category: string
          created_at: string
          description: string
          published: boolean
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          author: string
          category: string
          created_at?: string
          description: string
          published?: boolean
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          author?: string
          category?: string
          created_at?: string
          description?: string
          published?: boolean
          updated_at?: string
        }
      }
      assessments: {
        Row: {
          id: string
          answers: Json
          score: number
          user_info: Json
          created_at: string
        }
        Insert: {
          id?: string
          answers: Json
          score: number
          user_info: Json
          created_at?: string
        }
        Update: {
          id?: string
          answers?: Json
          score?: number
          user_info?: Json
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}