
export interface AITool {
  name: string;
  description: string;
  url: string;
  image: string;
  subcategory: string;
  // Added isFeatured and isNew to fix App.tsx errors
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface SubCategory {
  name: string;
  count?: number;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  accentColor: string;
  subcategories: SubCategory[];
  tools: AITool[];
}

// Added ToolNotification interface to fix App.tsx error
export interface ToolNotification {
  id: string;
  toolName: string;
  categoryName: string;
  type: 'featured' | 'new';
  date: string;
}

export type ViewState = 'welcome' | 'categories' | 'tools' | 'search' | 'favorites' | 'profile' | 'notifications' | 'feedback';
