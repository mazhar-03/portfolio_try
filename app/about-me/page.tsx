import Link from "next/link";

export default function AboutMe() {
    return (
        <section className="max-w-3xl mx-auto h-screen py-16 px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
                I am a 21-year-old software engineering student currently in my third year at the{" "}
                <Link href="https://www.pja.edu.pl/en/" target="_blank"  className="text-blue-600 hover:underline">
                    Polish-Japanese Academy of Information Technology
                </Link>{" "}
                in Warsaw. Originally from Izmir, Turkey, I’ve been living in Poland for nearly three years.
            </p>
            <p className="text-lg text-gray-700 mt-4">
                My main focus is backend development, especially in Java and C#. I’ve worked on several academic and personal projects that helped me build a strong foundation in object-oriented programming and software design. I also have a deep interest in mathematics and statistics, which led me to choose “Intelligent Data Processing” as my university specialization.
            </p>
            <p className="text-lg text-gray-700 mt-4">
                Since I’m passionate about AI and its applications in real life, I want to grow in that direction in the future. Recently, I started an internship as a web developer, where I work with Next.js, Tailwind CSS, and HTML. Besides my studies and internship, I also work part-time at a restaurant in Warsaw.
            </p>
            <p className="text-lg text-gray-700 mt-4">
                I enjoy learning by doing, solving real-world problems, and constantly improving my skills. I am open to new challenges and always looking for ways to grow both personally and professionally.
            </p>
        </section>
    );
}
