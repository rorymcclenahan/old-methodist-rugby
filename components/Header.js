import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="p-7 font-DIN">
      <ul className="flex justify-center list-none text-center align-middle text-2xl pl-10 pr-10">
        <li className="flex-auto">
          <Link href="#" className="border-3 border-white border-solid">
            <h1 className="text-gray-400 hover:text-white">HOME</h1>
          </Link>
        </li>
        <li className="flex-auto">
          <Link href="#about">
            <h1 className="text-gray-400 hover:text-white">ABOUT</h1>
          </Link>
        </li>
        <li className="flex-auto">
          <Link href="#updates">
            <h1 className="text-gray-400 hover:text-white">UPDATES</h1>
          </Link>
        </li>
        <li className="flex-auto">
          <Link href="#" className="flex justify-center">
            <Image
              width="80"
              height="80"
              src="/wesleyan-logo.ico"
              alt="Wesleyan Logo"
            />
          </Link>
        </li>
        <li className="flex-auto">
          <Link href="#officers">
            <h1 className="text-gray-400 hover:text-white">OFFICERS</h1>
          </Link>
        </li>
        <li className="flex-auto">
          <Link href="#photos">
            <h1 className="text-gray-400 hover:text-white">PHOTOS</h1>
          </Link>
        </li>
        <li className="flex-auto">
          <Link href="#contact">
            <h1 className="text-gray-400 hover:text-white ">CONTACT</h1>
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
