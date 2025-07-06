import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Featured = () => {
  return (
    <div className="featured">
      <img
        width="100%"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg"
        alt=""
      />
      <div className="info">
        <img src="./image.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
          temporibus? Impedit quos tempore quis enim veritatis ea exercitationem
          incidunt officia neque rem voluptatem reiciendis odio cum nesciunt,
          sed sunt doloremque!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon className="icon" />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon className="icon" />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
