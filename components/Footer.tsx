import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import {Common} from "@/lib/types";

export default async function Footer({common}: { common: Common }) {
  console.log("FOOTER DATA:", common);
  {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mazhar Altınçay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
            <a
              href="https://github.com/mazhar-03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub/>
            </a>
            <a
              href="https://www.linkedin.com/in/mazhar-alt%C4%B1n%C3%A7ay-4185071b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin/>
            </a>
            <a
              href="https://www.instagram.com/mazhar_altncy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="Instagram"
            >
              <FaInstagram/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}