import Link from "next/link";
export default function StudentInfo(){
    return(
    <section className="flex min-m-screen items-center flex-col justify-center">
        <h2 className="text-xl font-semibold text-black" >Aaron</h2>
        <p className="mt-2" >
            <Link href="https://github.com/aaron-reid19/cprg306-assignments" className="text-black hover:underline">
            Github repository 
            </Link>
        </p>
    </section>
    )
}