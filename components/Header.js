
export default function Header() {
  return (
    <div className="p-7 font-DIN">
      <ul className="flex justify-center list-none text-center align-middle text-2xl pl-10 pr-10">
        <li className="flex-auto">
          <a href="/" className="border-3 border-white border-solid">
            <h1 className="text-gray-400 hover:text-white">HOME</h1>
          </a>
        </li>
        <li className="flex-auto">
          <a href="#about">
            <h1 className="text-gray-400 hover:text-white">ABOUT</h1>
          </a>
        </li>
        <li className="flex-auto">
          <a href="#updates">
            <h1 className="text-gray-400 hover:text-white">UPDATES</h1>
          </a>
        </li>
        <li className="flex-auto">
          <a href="/" className="flex justify-center">
            <img width="80" height="80" src="/wesleyan-logo.ico" alt="Wesleyan Logo" />
          </a>
        </li>
        <li className="flex-auto">
          <a href="#officers">
            <h1 className="text-gray-400 hover:text-white">OFFICERS</h1>
          </a>
        </li>
        <li className="flex-auto">
          <a href="#photos">
            <h1 className="text-gray-400 hover:text-white">PHOTOS</h1>
          </a>
        </li>
        <li className="flex-auto">
          <a href="#contact">
            <h1 className="text-gray-400 hover:text-white ">CONTACT</h1>
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
