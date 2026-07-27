
import React , { useEffect, useState } from 'react';
import axios from "axios";
import Slider from "react-slick";
import "./index1.scss";

export default function MySwiper1() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [solutions, setSolutions] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 0 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  useEffect(() => {
    axios.get("/db.json")
      .then((res) => {
        setSolutions(res.data.cargoTypes);
        setBackgroundImage(res.data.cargoTypes[1].image);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css" 
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="slider-container" style={{ backgroundImage: `url(${backgroundImage})` , backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
        <Slider {...settings} className='slider1'>
          {solutions.map((solution) => (
            <div key={solution.id}>
              <div className="main44" onMouseOver={() => setBackgroundImage(solution.image)}>
                <img className='img33' src={solution.icona} alt={solution.title} />
                <h3 className='title33'>{solution.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
