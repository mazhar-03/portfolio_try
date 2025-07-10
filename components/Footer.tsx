import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {Common, SocialMedia} from "@/lib/types";

export default function Footer({ common }: { common: Common }) {
  console.log("FOOTER DATA:", common);
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {common.footerCopyRight}
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
          {common.socialMediaCollection.items.map((media: SocialMedia, index: number) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              className="hover:text-gray-400"
              aria-label={media.title}
            >
              {media.title.toLowerCase() === "github" && <FaGithub />}
              {media.title.toLowerCase() === "linkedin" && <FaLinkedin />}
              {media.title.toLowerCase() === "instagram" && <FaInstagram />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
