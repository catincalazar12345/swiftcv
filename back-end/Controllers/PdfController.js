import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function sunLaRobotel(prompt) {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    // console.log(result.response.text());
    return result.response.text();
};

const controller = {
    processInformation: async (req, res) => {
        const {first_name,last_name,university,
            language,frameworks,work_experience,
            projects,social_links} = req.body;
        
        //  const user = {
        //     first_name: first_name,
        //     last_name: last_name,
        //     university: university,
        //     language: language,
        //     frameworks: frameworks,
        //     work_experience: work_experience,
        //     projects: projects,
        //     social_links: social_links,
        // }
    
        //work in progress
        const prompt = `Header: Name and Contact Info

                        Alignment: Center

                        Content: Use an <h1> for the full name. Include placeholders for Email and Phone Number.

                        Section: Education

                        Alignment: Left

                        Content: Use an <h2> for the title "Education". Include placeholders for University, Major, and Graduation Date.

                        Section: Languages

                        Alignment: Left

                        Content: Use an <h2> for the title "Languages". Add a list for programming or spoken languages.

                        Section: Frameworks

                        Alignment: Left

                        Content: Use an <h2> for the title "Frameworks". Add a list for technical frameworks or libraries.

                        Section: Work Experience

                        Alignment: Left

                        Content: Use an <h2> for the title "Work Experience". Add a descriptive paragraph for professional experience.

                        Section: Projects

                        Alignment: Left

                        Content: Use an <h2> for the title "Projects". Add a descriptive paragraph for projects.

                        Section: Links

                        Alignment: Left

                        Content: Use an <h2> for the title "Links". Add a list of hyperlinks for social media or portfolios."`;
    },
};