import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { fetchImages } from "./api/api";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import LoadMoreBtn from "./Components/LoadeMoreBtn/LoadeMoreBtn";
import ImageModal from "./Components/ImageModal/ImageModal";
import ErrorMassage from "./Components/ErrorMessage/errorMassage";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    try {
      setLoading(true);
      // Perform your API call here with searchQuery
      const data = await fetchImages(searchQuery); // Assuming fetchImages is your API function
      setImages(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <div>Loading...</div>}
      {images.length > 0 ? (
        <ImageGallery images={images} />
      ) : (
        !loading && <div>No images found</div>
      )}
    </div>
  );
};

export default App;
