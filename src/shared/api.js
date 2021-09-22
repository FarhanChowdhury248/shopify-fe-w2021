import axios from "axios";
import { API_KEY, API_ROOT } from "./constants";

export const useApi = () => ({
  getPhotosBySol: (page = 1, sol = 1000) =>
    axios
      .get(`${API_ROOT}?sol=${sol}&page=${page}&api_key=${API_KEY}`)
      .then((res) => res.data)
      .catch((err) => console.error(err)),
});
