import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get("/search/photos/", {
      params: {
        query,
        page,
        per_page: 15,
        client_id: "lw5dpAbgQucI_OgMH3Z4v8yJ4hRpUD_7k-asswE8UP0",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Failed to fetch images. Please try again later.");
  }
};
