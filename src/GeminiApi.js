import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export const generateWorkoutPlan = async (time, type, equipment) => {
    const prompt = `Generate a work-out plan for user. It should contain a 5-minute warm-up, ${time} workout, and 5-minute cool down. The workout type should be ${type} and the equipment should be ${equipment}. Respond with a JSON object with these keys: warmUp, workout, coolDown. Each value should be a string describing that part of the workout plan.`;
    
    try {
        console.log("Waiting for response...");
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log("Raw response:", text);
        
        let jsonResponse;
        try {
            jsonResponse = JSON.parse(text);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            jsonResponse = extractJsonFromText(text);
        }
        
        if (!jsonResponse || !jsonResponse.warmUp || !jsonResponse.workout || !jsonResponse.coolDown) {
            throw new Error("Invalid response structure");
        }
        
        return jsonResponse;
    } catch (error) {
        console.error("Error generating workout plan:", error);
        throw error;
    }
};

function extractJsonFromText(text) {
    const jsonRegex = /{[\s\S]*?warmUp[\s\S]*?workout[\s\S]*?coolDown[\s\S]*?}/;
    const match = text.match(jsonRegex);
    if (match) {
        try {
            return JSON.parse(match[0]);
        } catch (e) {
            console.error("Error parsing extracted JSON:", e);
        }
    }
    return null;
}