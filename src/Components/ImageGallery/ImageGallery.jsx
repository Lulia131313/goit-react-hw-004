import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageCard/ImageGallery.module.css";

const ImageGallery = ({ images, onSelectImage }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onSelectImage(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
