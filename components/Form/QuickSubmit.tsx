import axios from "axios";
import Button from "./Button";

const QuickSubmit = () => {
	const data = localStorage.getItem("data");
	return (
		<div className="mt-3 flex flex-col h-full">
			It looks like you've already filled this form. Would you like to submit it
			with the following info?
			<div>Name: {JSON.parse(data).FirstName}</div>
			<Button
				onClick={async () => {
					const response = await axios.post("api/submit", data);
					if (response.data.success) {
						window.location.href = "/success";
					}
				}}
			>
				Yes
			</Button>
			<div>No</div>
		</div>
	);
};

export default QuickSubmit;
