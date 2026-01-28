import StudentInfo from "./studentinfo";

export default function Page() {

  return (
    <section className="flex min-h-screen items-center flex-col justify-center">
      <h1 className="text-xl font-semibold text-black">Shopping List</h1>
      <StudentInfo />
    </section>
  );
}
