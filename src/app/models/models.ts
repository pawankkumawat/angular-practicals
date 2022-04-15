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

export interface Master {
  Id: number;
  Text: string;
  ModifiedBy: string;
  DateModified: string;
  IsDeleted: boolean;
  IsUsed: boolean;
}

export interface Rights {
  hasReadRights: boolean;
  hasDeleteRights: boolean;
  hasUpdateRights: boolean;
  hasCreateRights: boolean;
}

export interface State {
  id: number,
  text: string
}

export interface NameValuePair{
  name:string;
  value:string;
}

export interface ReportData{
    reportValue: string,
    reportFormatValue: string,
}