import Link from "next/link";
import { getContactPage } from "@/lib/cms/contact";

export default async function Contact() {
  const contact = await getContactPage();
  // console.log("CONTACT DATA", contact);
    return (
        <section className="max-w-2xl h-screen mx-auto px-4 pt-24 sm:pt-32 pb-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{contact?.title}</h2>

            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              {contact?.text}
            </p>

          <Link
            href={contact?.buttonUrl ?? "/"} // fallback to "/" if undefined
            className="inline-block bg-blue-600 text-white font-medium sm:font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            {contact?.buttonText}
          </Link>
        </section>
    );
}
