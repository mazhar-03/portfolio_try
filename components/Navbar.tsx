import Link from "next/link"

import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"


export default function Navbar() {
    return (
        <nav className="bg-brown mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center ml-20">
                <h2 className="text-gray-400 text-3xl font-ptserif">Mazhar Altincay</h2>
            </div>
            <div className="flex">
                <ul className="text-white">
                    <li>
                        <Link href={'/projects'}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about-me'}>
                            About Me
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>
            </div>
        </nav>

)
}