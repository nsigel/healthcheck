import Head from "next/head";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex p-8 h-screen w-full justify-center items-center flex-col bg-dark text-white font-medium">
        <div className="sm:percent lg:w-124 bg-light rounded-md p-4 text-lg flex flex-col mt-1">
          Submit survey
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}
