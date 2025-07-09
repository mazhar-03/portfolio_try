"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-6xl mx-auto gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                    src="/static/image/my_photo.jpeg"
                    alt="Mazhar Altınçay"
                    className="object-cover"
                    priority
                    width={640}
                    height={640}
                />
            </div>

            <div className="max-w-xl text-center space-y-4">
                <p className=" font-bold text-gray-600">
                    Hello, I’m
                </p>
                <h1 className="text-5xl text-gray-900">Mazhar Altınçay</h1>
                <p className="text-lg text-gray-600">
                    Software Engineering Student
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                        href="/static/docs/cv_resume2.pdf"
                        download
                        className="rounded-full border-2 border-black bg-white text-black font-semibold py-3 px-6 transition duration-300 ease-in-out text-center hover:bg-gray-200"
                    >
                        Download CV
                    </Link>

                    <Link
                        href="/static/docs/transcript_4.pdf"
                        download
                        className="rounded-full bg-black text-white font-semibold py-3 px-6 transition duration-300 ease-in-out text-center hover:bg-gray-800"
                    >
                        Download Transcript
                    </Link>
                </div>
            </div>
        </section>
    );
}
