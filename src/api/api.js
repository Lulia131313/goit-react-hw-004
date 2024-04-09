import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query) => {
  try {
    const response = await axios.get("/search/photos/", {
      params: {
        query,
        page: 1,
        per_page: 5,
        client_id: "ATdYbGY0jwzXq_Ubrv3E67DuMtcFMh9AcqH9fJx4E9E",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
