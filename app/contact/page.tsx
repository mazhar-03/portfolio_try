import Link from "next/link";

export default function Contact() {
    return (
        <section className="max-w-2xl h-screen mx-auto px-4 pt-24 sm:pt-32 pb-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>

            <p className="text-gray-600 mb-6 text-base sm:text-lg">
                Feel free to reach out if you have an opportunity, a question, or just want to say hi. I am always open to connecting with new people.
            </p>

            <Link
                href="mailto:mazharaltincay89@gmail.com"
                className="inline-block bg-blue-600 text-white font-medium sm:font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition"
            >
                mazharaltincay89@gmail.com
            </Link>
        </section>
    );
}
