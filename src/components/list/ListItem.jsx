import "./listItem.scss";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useState } from "react";
const ListItem = ({ index }) => {
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && `${index * 225 - 50}px` }}
    >
      <img src="./item.png" alt="" />
      {isHovered && (
        <>
          <video src={videoUrl} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <AddIcon className="icon"/>
              <PlayArrowIcon className="icon"/>
              <ThumbUpOutlinedIcon className="icon"/>
              <ThumbDownOutlinedIcon className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
