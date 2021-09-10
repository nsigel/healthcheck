import Head from "next/head";

export default function SuccessPage() {
  return (
    <>
      <Head>
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-screen h-screen flex justify-center items-center bg-dark text-white text-lg">
        Successfully completed survey!
      </div>
    </>
  );
}
