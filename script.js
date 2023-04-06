// import { config } from "dotenv";
// config();
import { Configuration , OpenAIApi } from "openai";

// console.log(process.env.API_KEY); 
const openAi = new OpenAIApi(new Configuration({ 
    apiKey: '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',
 })); 
 openAi.createChatCompletion({
    model: 'gpt-3.5-turbo', 
    messages : [{role : 'user' , content: 'Where is your home ?'}]
 }).then(res => {
    console.log(res.data.choices[0].message.content);
 })