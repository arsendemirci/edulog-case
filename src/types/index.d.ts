export interface AppContextType {
  currentPath: string;
}
export interface NavLinkType {
  name: string;
  href: string;
}
export interface PatientType {
  firstName: string;
  lastName: string;
  age: number;
  complaint: string;
  diagnose?: string;
}
