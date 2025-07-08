// import Image from "next/image";
import AboutMe from "@/app/about-me/page";
import Projects from "@/app/projects/page"

export default function Home() {
    return (
        <div>
            <section className="h-screen flex items-center justify-center bg-green text-white">
                Homepage section 1
            </section>

            <section className="h-screen flex items-center justify-center bg-darkblue text-white">
                Homepage section 2
            </section>
        </div>
    );
}
