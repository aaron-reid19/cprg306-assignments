import StudentInfo from "./studentinfo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-xl font-semibold">Shopping List</h1>

      <StudentInfo />
    </main>
  );
}
