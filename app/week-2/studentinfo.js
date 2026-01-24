import Link from "next/link";
export default function StudentInfo(){
    return(
    <section className="flex min-h-screen items-center flex-col justify-center">
        <h2 className="text-xl font-semibold">Aaron</h2>
        <p className="mt-2">
            <Link href="https://github.com/aaron-reid19/cprg306-assignments" className="text-blue-600 hover:underline">
            Github repository
            </Link>
        </p>
    </section>
    )
}