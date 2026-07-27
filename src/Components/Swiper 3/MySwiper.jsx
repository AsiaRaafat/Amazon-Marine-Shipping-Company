// import React, { useContext, useState } from "react";
// import { useRef , useEffect } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import Card from "react-bootstrap/Card";
// import "./Swiper.scss";
// import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { TranslateContext } from "../../utils/TranslateContext";



// export default function MySwiper() {
//         const language = localStorage.getItem("lang");   
//         const[item,setItem] = useState([]);
        
//         const buttonRef = useRef(null);       
//         const handleHover = () => {
//           buttonRef.current.style.transform = 'translateX(10px)';
//           buttonRef.current.style.transition = 'transform 0.3s ease-in-out'; 
//         };
      
//         const handleMouseOut = () => {
//           buttonRef.current.style.transform = 'translateX(0)';
//         };
//         useEffect(() => {
//            axios.get(`https://shipping.somee.com/api/Website/GetServices?lang=${language}`, {
//                 params: {
//                   populate: "*",
//                 },
//               })
//               .then((res) => {
//                 console.log(res.data);
//                 setItem(res.data);
//               });
//           }, []);
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 0,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charset="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       <Slider {...settings}>

//      {
//          item.map((item) => (
//             <div key={item.id}>
//             <Card style={{border:"none",borderRadius:"0",backgroundColor:"rgb(242, 242, 242)"}} className="card3" >
//             <Card.Img
//               className="cardimg"
//               variant="top"
//               src={item.photoPath}
//               style={{ objectFit: "cover",borderRadius:"0"}}
//               />
//             <Card.Body style={{position:"relative"}}>
//               <Card.Title style={{fontWeight:"900"}} > {item.name}</Card.Title>
//               <Card.Text style={{fontWeight:"700"}}>
//                 <p>      
//                 {item.description}
//                 </p> 
//               </Card.Text>
//               <Button    ref={buttonRef} onMouseOver={handleHover} onMouseOut={handleMouseOut} 
//                style={{position:"absolute",bottom:"5px",left:"5px",backgroundColor:"transparent",border:"none",fontSize:"11px" }}>
//               <a style={{textDecorationLine:"none",color:"black"}} 
//               href={`swiper3/${item.id}`}
//               aria-description="shipping company cargos"
//               >READ MORE</a>
//              <FontAwesomeIcon icon={faArrowCircleRight} style={{color:"rgb(238, 212, 132)" ,marginLeft:"7px" ,fontSize:"15px"}}/>
//             </Button>
//             </Card.Body>
//           </Card>
//         </div>
//          ))
//      }
//       </Slider>
//     </div>
//   );
// }





import React, { useContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { TranslateContext } from "../../utils/TranslateContext";
import "./Swiper.scss";

export default function MySwiper() {
  const language = localStorage.getItem("lang");   
  const [items, setItems] = useState([]);
  const buttonRef = useRef(null);

  const handleHover = () => {
    buttonRef.current.style.transform = 'translateX(10px)';
    buttonRef.current.style.transition = 'transform 0.3s ease-in-out'; 
  };

  const handleMouseOut = () => {
    buttonRef.current.style.transform = 'translateX(0)';
  };

  useEffect(() => {
    axios.get("/db.json")
      .then((res) => setItems(res.data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 0 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

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

      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <Card style={{border:"none", borderRadius:"0", backgroundColor:"rgb(242, 242, 242)"}} className="card3">
              <Card.Img
                className="cardimg"
                variant="top"
                src={item.image}
                style={{ objectFit: "contain", borderRadius:"0"}}
              />
              <Card.Body style={{position:"relative"}}>
                <Card.Title style={{fontWeight:"900"}}>{item.title}</Card.Title>
                <Card.Text style={{fontWeight:"700"}}>
                 {item.description}
                </Card.Text>
                <Button
                  ref={buttonRef}
                  onMouseOver={handleHover}
                  onMouseOut={handleMouseOut}
                  style={{position:"absolute", bottom:"5px", left:"5px", backgroundColor:"transparent", border:"none", fontSize:"11px"}}
                >
                  <a
                    className="cardlink"
                    style={{textDecorationLine:"none", color:"black"}}
                    href={`services/${item.id}`}
                    aria-description="product details"
                  >
                    READ MORE
                  </a>
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    style={{color:"rgb(238, 212, 132)", marginLeft:"7px", fontSize:"15px"}}
                  />
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
