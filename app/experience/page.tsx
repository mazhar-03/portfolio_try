import Link from "next/link";

export default function Experience() {
    return (
        <section className="max-w-3xl h-screen mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

            <div className="space-y-10">
                <div>
                    <h3 className="text-xl font-semibold">Web Developer Intern (Remote)</h3>
                    <p className="text-gray-600">
                        <Link
                            href="https://kangurus.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Kangurus
                        </Link>{" "}
                        (Remote) — July 2024 - Present
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                        <li>Working with modern technologies such as Next.js, Tailwind CSS, and HTML.</li>
                        <li>Building responsive components and improving user experience.</li>
                        <li>Gaining hands-on experience in frontend development through real tasks and mentorship.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Pizza Chef (Part-Time)</h3>
                    <p className="text-gray-600">
                        <Link
                            href="https://www.facebook.com/novakarafka/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Bistro Nova Karafka
                        </Link>
                        , Warsaw — April 2024 - Present
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                        <li>Working in a kitchen environment while balancing university studies.</li>
                        <li>Improved teamwork and definitely communication skills since even some chefs do not speak English.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Aspiring Software Engineer</h3>
                    <p className="text-gray-700 text-sm mt-1">
                        While I don’t have previous professional IT experience, I am highly motivated to build a career in software development.
                        I actively work on personal and academic projects, and recently began my first internship to gain real-world experience.
                    </p>
                </div>
            </div>
        </section>
    );
}
