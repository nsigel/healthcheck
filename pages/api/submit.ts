import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const values = req.body;

	const response = await axios.post(
		"https://healthscreening.schools.nyc/home/submit",
		{},
		{
			params: values,
		}
	);

	return res.status(200).json(response.data);
}
