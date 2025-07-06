import { useRef, useState } from "react";
import "./list.scss";
import ListItem from "./ListItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const List = () => {
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [arrowNum, setArrowNum] = useState(0);
  const handlerArrow = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50; // 获取当前列表容器的左边距
    console.log(distance);
    setIsMoved(true);
    if (direction === "left" && arrowNum < 5) {
      setArrowNum(arrowNum + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    if (direction === "right" && arrowNum > 0) {
      setArrowNum(arrowNum - 1);
      listRef.current.style.transform = `translateX(${+230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="arrow left"
          onClick={() => handlerArrow("left")}
          style={{ display: !isMoved ? "none" : "block" }}
        />
        <div className="container" ref={listRef}>
          {Array.from({ length: 10 }).map((item, index) => (
            <ListItem key={index} index={index} />
          ))}
        </div>
        <ArrowForwardIosIcon
          className="arrow right"
          onClick={() => handlerArrow("right")}
        />
      </div>
    </div>
  );
};

export default List;
