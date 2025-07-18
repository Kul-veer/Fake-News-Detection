export interface AnalysisResult {
  credibilityScore: number;
  classification: 'real' | 'fake';
  confidence: number;
  factors: AnalysisFactor[];
  summary: string;
  timestamp: string;
}

export interface AnalysisFactor {
  name: string;
  score: number;
  impact: 'positive' | 'negative' | 'neutral';
}

export interface NewsArticle {
  title?: string;
  content: string;
  url?: string;
  source?: string;
}