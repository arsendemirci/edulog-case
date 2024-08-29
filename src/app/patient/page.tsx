import { PatientList } from "@/components";

export default async function Home() {
  return (
    <div>
      <h1>This Is The Patients Page</h1>
      <h3>And These are the patients</h3>

      <PatientList />
    </div>
  );
}
