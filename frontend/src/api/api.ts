import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getDishes = () => api.get("/dishes");

export const updateDishes = (dishId: string, isPublished: boolean) => {
  return api.patch(`/dishes/${dishId}`, { isPublished });
};

export default api;
