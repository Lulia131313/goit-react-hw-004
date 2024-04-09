import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images, onSelectImage }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id} onClick={() => onSelectImage(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
