const useMock = import.meta.env.VITE_USE_MOCK === "true";

export async function getAllFoods() {
  if (useMock) {
    return [
      {
        _id: 1,
        name: "Burger",
        price: 120,
        stars: 4.5,
        imageUrl: "https://via.placeholder.com/300",
      },
    ];
  }

  const res = await api.get("/foods");
  return res.data;
}
