import { toast } from "react-toastify";
import { api } from "../../../config/api";

export const createShortUrlApi = async (data) => {
  try {
    const res = await api.post("/api/url/create", data);

    toast.success("Created Short URL");

    return res.data;
  } catch (error) {
    console.log("error in creating short url -> ", error);
    return;
  }
};