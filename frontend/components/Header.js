import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white ">
      <nav className="container flex items-center justify-between">
        <ul className="flex items-center justify-center">
          <li className="flex items-center justify-center cursor-pointer mr-6">
            <div className="flex items-center justify-center text-[16px]">
              <Link href={"/courses"}>Courses</Link>
              <img
                src="./images/arrow-up-1.png"
                alt="arrow-up"
                className="ml-1 h-[16px]"
              />
            </div>
          </li>
          <li className="flex items-center justify-center cursor-pointer mr-6">
            <div className="flex items-center justify-center text-[16px]">
              <Link href={"/tutorials"}>Tutorials </Link>
              <img
                src="./images/arrow-up-1.png"
                alt="arrow-up"
                className="ml-1 h-[16px]"
              />
            </div>
          </li>
          <li className="flex items-center justify-center">
            <div className="flex items-center justify-center text-[16px]">
              <Link href={"/practice"}>Practice</Link>
              <img
                src="./images/arrow-up-1.png"
                alt="arrow-up"
                className="ml-1 h-[16px]"
              />
            </div>
          </li>
        </ul>
        <Link href={"/"}>
          <img
            src="./images/black-logo.png"
            alt="logo"
            className="h-20 cursor-pointer"
          />
        </Link>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center border border-black rounded-full px-4 py-1">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-[14px] bg-none w-[150px] placeholder:text-black"
            />
            <div className="border border-black px-3 py-1 rounded-full cursor-pointer">
              <img src="./images/search-icon.png" alt="search" />
            </div>
          </div>
          <div className="ml-4 cursor-pointer">
            <img src="./images/user.png" alt="user" className="h-[40px]" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
