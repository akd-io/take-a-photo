import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Take a Photo</title>
        <meta
          name="description"
          content="A demo of different photo capture methods on the web."
        />
      </Head>
      <div className="container mx-auto my-10 flex flex-col gap-1 px-4">
        <h1 className="text-lg">Take a Photo</h1>
        <p className="text-base">
          This is a demo of different photo capture methods on the web.
        </p>
      </div>
    </>
  );
};

export default Index;
