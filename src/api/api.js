const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

let model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { responseMimeType: "application/json" }
});

let prompt = `
Generate a workout plan using this JSON schema:
{
  "type": "object",
  "properties": {
    "warm_up": { "type": "string" },
    "main_workout": { "type": "array", "items": { "type": "string" } },
    "cool_down": { "type": "string" }
  },
  "required": ["warm_up", "main_workout", "cool_down"]
}

Here are some details:
- Goal: Build muscle
- Duration: 60 minutes
- Experience level: Intermediate
`;

async function generateWorkoutPlan() {
  try {
    let result = await model.generateContent(prompt);

    let workoutPlan = JSON.parse(result.response.text());
    console.log("Generated Workout Plan:", workoutPlan);

    return workoutPlan;
  } catch (error) {
    console.error("Error generating workout plan:", error);
    throw new Error('Failed to generate workout plan. Please try again later.');
  }
}

generateWorkoutPlan().then(plan => {

  console.log(plan);
}).catch(error => {
  console.error("Error:", error);
});
