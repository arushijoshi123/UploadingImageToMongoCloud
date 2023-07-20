import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const response = await axios.post(
      "http://localhost:5000/user/login",
      req.body
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong while logging in!" });
  }
}
