import Button from "../layouts/Button";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Programmer Store</title>
      </Head>
      <div className=" flex items-center justify-center h-[500px] flex-col">
        <h1 className="font-extrabold text-[60px] text-center ">
          Rapidly grow your skill here, <br />
          <div className="text-[50px]">
            <span className="text-blue-500">Machine Learning, </span>
            <span className="text-orange-500">Web Development, </span>
            <span className="text-yellow-500">AI</span>
          </div>
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
