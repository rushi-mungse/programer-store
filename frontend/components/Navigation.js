import Link from "next/link";
const Navigation = () => {
  return (
    <div className="border-y border-black">
      <ul className="container text-[14px] flex items-center justify-between text-gray-600">
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/data-structure"}>Data Structure</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/algorithms"}>Algorithms</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/operating-system"}>Operating System</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/computer-networking"}>Computer Networking</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/dbms"}>DBMS</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/cpp"}>C++</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/java"}>Java</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/pythone"}>Pythone</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/web-developement"}>Web Developement</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/machine-learning"}>Machine Learning</Link>
        </li>
        <li className="cursor-pointer mr-6 hover:text-black transition-all duration-300 ease-in-out">
          <Link href={"/projects"}>Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
