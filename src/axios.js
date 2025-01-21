import axios from "axios";
const apikey = import.meta.env.VITE_APIKEY;
const apiEP = `http://www.omdbapi.com/?apikey=${apikey}&`;

export const fetchedData = async (str) => {
  try {
    const url = apiEP + "t=" + str;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
