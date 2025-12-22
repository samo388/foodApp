import api from "./api";

export const getAllFoods = async () => {
  const response = await api.get("/foods");

  if (Array.isArray(response.data)) {
    return response.data;
  }

  if (Array.isArray(response.data.foods)) {
    return response.data.foods;
  }

  if (Array.isArray(response.data.data)) {
    return response.data.data;
  }

  return [];
};
