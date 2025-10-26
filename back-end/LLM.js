import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function sunLaRobotel(prompt) {
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent("Create a small CV about the following person with 5 years of experience in data science");
  console.log(result.response.text());
}

module.exports = sunLaRobotel;
