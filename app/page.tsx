import Image from "next/image";
import Link from "next/link";
import { getHomePage } from "@/lib/cms/homepage";


export default async function Home() {
    const homepage = await getHomePage();
    // console.log("HOME-PAGE DATA", homepage);
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-6xl mx-auto gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                    src={homepage?.profilePicture?.url}
                    alt="Mazhar Altınçay"
                    className="object-cover"
                    priority
                    width={640}
                    height={640}
                />
            </div>

            <div className="max-w-xl text-center space-y-4">
                <p className=" font-bold text-gray-600">
                    {homepage?.introText}
                </p>
                <h1 className="text-5xl text-gray-900">{homepage?.nameSurname}</h1>
                <p className="text-lg text-gray-600">
                    {homepage?.jobTitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                        href={homepage?.button1Url}
                        download
                        className="rounded-full border-2 border-black bg-white text-black font-semibold py-3 px-6 transition duration-300 ease-in-out text-center hover:bg-gray-200"
                    >
                        {homepage?.button1Text}
                    </Link>

                    <Link
                      // did not manage to make it dynamic
                        href="/static/docs/transcript_4.pdf"
                        download
                        className="rounded-full bg-black text-white font-semibold py-3 px-6 transition duration-300 ease-in-out text-center hover:bg-gray-800"
                    >
                        {homepage?.button2Text}
                    </Link>
                </div>
            </div>
        </section>
    );
}