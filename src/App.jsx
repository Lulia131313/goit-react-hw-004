import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "./api/api";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadeMoreBtn/LoadeMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMassage from "./components/ErrorMessage/errorMassage";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const data = await fetchImages(searchQuery);
      if (data.length === 0) {
        setError("No images found for this search query.");
      } else {
        setImages(data);
        setPage(1);
        setSearchQuery(searchQuery);
      }
    } catch (error) {
      setError("Failed to fetch images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      setError(null);
      const nextPage = page + 1;
      const data = await fetchImages(searchQuery, nextPage);
      setImages((prevImages) => [...prevImages, ...data]);
      setPage(nextPage);
    } catch (error) {
      setError("Failed to fetch more images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      {loading && <Loader />}
      {error != null && <ErrorMassage message={error} />}

      {images.length > 0 && (
        <ImageGallery images={images} onSelectImage={openModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}

      <ImageModal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default App;
