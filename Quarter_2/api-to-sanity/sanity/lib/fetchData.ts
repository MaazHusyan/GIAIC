import axios from "axios";

const API_URL = "https://hackathon-apis.vercel.app/api/products";

export const fetchApiData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    return [];
  }
};
