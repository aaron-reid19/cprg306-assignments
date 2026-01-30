import StudentInfo from "./studentinfo";

export default function Page() {

  return (
    <section className="flex min-h-screen items-center border flex-col bg-beige-700">
      <h1 className="text-xl font-semibold text-white">Shopping List</h1>
      <StudentInfo />
    </section>
  );
}
