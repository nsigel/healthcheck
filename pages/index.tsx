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
			<div className="flex h-screen w-full justify-center items-center flex-row bg-dark">
				<div className="percent bg-light rounded-md text-white font-medium p-4 text-lg flex flex-col">
					Submit survey
					<Form />
				</div>
			</div>
			<Footer />
		</>
	);
}
