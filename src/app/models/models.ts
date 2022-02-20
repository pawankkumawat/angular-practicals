export interface User {
  id: number;
  age: number;
  name: string;
}

export interface Blog {
  postId: number;
  title: string;
  averageReadingTime: number;
  category: string;
}

export interface Group {
  id: number;
  text: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

export interface Stats {
  name: string;
  number: number;
  weight: string;
  marketRate: string;
  value: string;
}

export interface BranchingData {
  id: number;
  key: string;
  value: string;
}

export interface Category {
  Id: number;
  Text: string;
  DateCreated: string;
  DateModified: string;
  IsActive: boolean;
  IsUsed: boolean;
}

export interface Rights {
  hasReadRights: boolean;
  hasDeleteRights: boolean;
  hasUpdateRights: boolean;
  hasCreateRights: boolean;
}
