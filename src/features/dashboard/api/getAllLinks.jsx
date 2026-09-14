import { api } from "../../../config/api";

export const getAllLinks = async () => {
  try {
    const res = await api.get("/api/url/getall");

    return res.data;
  } catch (error) {
    console.log("error in fetching short url -> ", error);

    return;
  }
};