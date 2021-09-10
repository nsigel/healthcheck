import Head from "next/head";

export default function SuccessPage() {
  return (
    <>
      <Head>
        <title>Success!</title>
      </Head>
      <div className="w-screen h-screen flex justify-center items-center bg-dark text-white text-lg">
        Successfully completed survey!
      </div>
    </>
  );
}
