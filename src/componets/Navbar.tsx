import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#e3e3ff] px-10 pt-10">
      <div className="flex  justify-between w-full  max-w-7xl px-8 md:px-10 py-4 border rounded-full bg-white">
        <a className="flex text-2xl font-medium items-center" href="/">
          Mahto
        </a>
        <ul className="hidden md:flex flex-row gap-5 md:gap-10 lg:gap-15">
          <li className="menuItem">
            <a href="/about">About</a>
          </li>
          <li className="menuItem">
            <a href="/projects">Projects</a>
          </li>
        </ul>

        <div>
          <ul className="flex flex-row gap-5 md:gap-8">
            <li className="iconBtn">
              <a href="/twitter">
                <img src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6659be11894839cb247ecf64_icon-twitter.svg"></img>
              </a>
            </li>
            <li className="iconBtn">
              <a href="/instagram">
                <img src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6659be3dd8d82b641710d4f1_icon-instagram.svg"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
