import s from "./LoaderMore.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={s.button_container}>
      <button onClick={onLoadMore} className={s.button}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
