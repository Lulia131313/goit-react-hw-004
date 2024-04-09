import s from "./Loader.module.css";

import { Blocks } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={s.loader_container}>
      <Blocks
        height="280"
        width="280"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};

export default Loader;
