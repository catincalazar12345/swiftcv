require('dotenv/config');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function sunLaRobotel(prompt) {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    // console.log(result.response.text());
    return result.response.text();
};

const controller = {
    processInformation: async (req, res) => {
      try
      {  const {first_name,last_name, phone_number,email,university,grad_date,major,
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
        const prompt = `Generate a minimalist HTML and CSS inline CV tailored for computer science students based on the following JSON data. The CV should adhere to standard CV conventions for the computer science field, emphasizing skills, projects, and relevant experience that recruiters typically seek. Rephrase the descriptions provided for 'work_experience' and 'projects' to be concise and impactful. Omit entire sections (e.g., Education, Work Experience, Projects, etc.) if the corresponding field in the JSON data is set to 'null_input' or is entirely missing. Do not include placeholders or requests for additional information. Focus solely on presenting the provided data in a professional, easily readable, and minimalist format.  Include a loading indicator while the CV is being generated. Do not add mock data like "youexample@gmail.com".The cv will be ready to be printed out so exclusively use the data given by the user. Completely omit sections or data for which input has not been given. Following are the information and some directions : 
        
                      Header: Name and contact info: ${first_name}, ${last_name}, ${social_links}, ${phone_number}, ${email}

                        Alignment: Center

                        Content: Use an <h1> for the full name. Include placeholders for Email and Phone Number.

                        Section: Education: ${university}

                        Alignment: Left

                        Content: Use an <h2> for the title "Education". Include placeholders for University, Major,${major}, and Graduation Date, ${grad_date}.

                        Section: Languages: ${language}

                        Alignment: Left

                        Content: Use an <h2> for the title "Languages". Add a list for programming or spoken languages.

                        Section: Frameworks: ${frameworks}

                        Alignment: Left

                        Content: Use an <h2> for the title "Frameworks". Add a list for technical frameworks or libraries.

                        Section: Work Experience : ${work_experience}

                        Alignment: Left

                        Content: Use an <h2> for the title "Work Experience". Add a descriptive paragraph for professional experience.

                        Section: Projects ${projects}

                        Alignment: Left

                        Content: Use an <h2> for the title "Projects". Add a descriptive paragraph for projects.`;
        const result = await sunLaRobotel(prompt);
        return res.status(200).send(result);
      }catch(err){
        console.log(err);
        return res.status(404).send("Error");
      }
    },
};

module.exports = controller;