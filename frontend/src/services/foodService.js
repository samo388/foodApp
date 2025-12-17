import axios from "axios";

export const getAllFoods = async () => {
  const response = await axios.get("/api/foods");
  return response.data;
};
