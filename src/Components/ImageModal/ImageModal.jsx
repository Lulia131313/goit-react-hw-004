import s from "./modal.module.css";

import Modal from "react-modal";

const ImageModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  selectedImage,
}) => {
  return (
    <Modal
      className={s.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
    >
      {selectedImage && (
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
