import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Button from "../layouts/Button";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Navigation />
      <div className=" flex items-center justify-center h-[500px] flex-col">
        <h1 className="font-extrabold text-[60px] text-center ">
          Rapidly build modern websites <br />
          without ever leaving your HTML.
        </h1>
        <p className="text-gray-400 w-[70%] text-center mt-8">
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </p>
      </div>
      <div className="flex items-center justify-between w-[500px] mt-12 container">
        <Button text="Sign Up" />
        <Button text="Log In" />
      </div>
    </div>
  );
}
