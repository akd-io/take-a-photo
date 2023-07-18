import clsx from "clsx";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Index: NextPage = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [image, setImage] = React.useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setImage(e.target?.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Head>
        <title>Take a Selfie</title>
        <meta
          name="description"
          content="Demo of a good user experience for apps needing users to
          take and upload a self portrait."
        />
      </Head>
      <div className="flex flex-col items-center gap-5 px-4 py-10">
        <h1 className="text-center text-4xl font-bold">Take a Selfie</h1>
        <p className="max-w-md text-center text-base">
          This demo shows a good user experience for apps needing users to take
          and upload a self portrait.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          capture="user"
        />
        <div>
          <div
            role="button"
            className="relative mx-auto flex w-full max-w-sm cursor-pointer flex-col items-center justify-center"
            onClick={() => inputRef.current?.click()}
          >
            <img
              src={image || "/undraw_female_avatar_efig.svg"}
              className={clsx("w-full rounded-xl object-contain", {
                "blur-0": !image,
              })}
            />
            <button className="absolute bottom-5 flex flex-col rounded-md  bg-white p-1 px-3">
              {image == null ? "Take a selfie" : "Retake selfie"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
