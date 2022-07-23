import { useEffect, useState } from "react";
import "./slider.scss";

const data = [
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Caption Text",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Caption Two",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Caption Three",
  },
  {
    id: 4,
    imgUrl:
      "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Caption Four",
  },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <div className={animate ? "slide fade" : "slide"}>
        <span>
          {data[activeIndex].id} / {data.length}
        </span>
        <div className="slide-image">
          <img src={data[activeIndex].imgUrl} alt={data[activeIndex].title} />
        </div>
        <p>{data[activeIndex].title}</p>
        <button
          onClick={() => {
            setActiveIndex(
              activeIndex === 0 ? data.length - 1 : activeIndex - 1
            );
            setAnimate(true);
            setTimeout(() => setAnimate(false), 1000);
          }}
        >
          &#10094;
        </button>
        <button
          onClick={() => {
            setActiveIndex(
              activeIndex === data.length - 1 ? 0 : activeIndex + 1
            );
            setAnimate(true);
            setTimeout(() => setAnimate(false), 1000);
          }}
        >
          &#10095;
        </button>
      </div>
      <div className="dots">
        {data.map((item, index) => {
          return (
            <div
              className={activeIndex === index ? "activeDot" : "inactiveDot"}
              key={item.id}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
