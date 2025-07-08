// import Image from "next/image";
import AboutMe from "@/app/aboutMe/page";
import Projects from "@/app/projects/page"

export default function Home() {
    return (
        <div>
            <section className="h-screen flex items-center justify-center bg-green text-white">
                <AboutMe/>
            </section>

            <section className="h-screen flex items-center justify-center bg-darkblue text-white">
                <Projects/>
            </section>
        </div>
    );
}
