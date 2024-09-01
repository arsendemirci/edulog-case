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
export interface AddPatientFormType {
  firstName: string;
  lastName: string;
  age: string;
  complaint: string;
}
