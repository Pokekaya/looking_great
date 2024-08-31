// api.js
import axios from 'axios';

export const generateWorkoutPlan = async (config) => {
  try {
    const response = await axios.post('http://localhost:5000/api/generate-workout', {
      prompt: `Generate a workout plan for ${config.goal} with a duration of ${config.duration} minutes for an ${config.experienceLevel} user.`,
      model: "gemini-1.5-flash"
    });
    return response.data;
  } catch (err) {
    throw new Error('Failed to generate workout plan. ' + (err.response?.data?.message || err.message));
  }
};
