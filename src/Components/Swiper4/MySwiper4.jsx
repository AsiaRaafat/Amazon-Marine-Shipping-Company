// import React from "react";
// import Slider from "react-slick";
// import Card from "react-bootstrap/Card";
// import "./index4.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { useState,useEffect } from 'react';
// import axios from 'axios';

// export default function MySwiper4() {

//   const [news, setNews] = useState([]);
//   const language = localStorage.getItem("lang");  


//   useEffect(() => {
//     axios
//       .get(`https://shipping.somee.com/api/Website/GetNews?lang=${language}`, {
//         params: {
//           populate: "*",
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setNews(res.data);
//       });
//   }, []);

//   var settings = {
//     dots: false,
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
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 0,
//           dots: true
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true
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
//       <div className="container">
//         <Slider {...settings}>

//           {
//              news.map((element) => (

//               <div key={element.id}>
//               <a  className="cardlink"  href={`swiper4/${element.id}`}    aria-description="shipping company cargos" >
//                 <Card
//                   className="text-white"
//                   style={{
//                     width: "24rem",
//                     height: "25rem",
//                     border: "none",
//                     borderRadius: "0",
//                     position: "relative"
//                   }}
//                 >
//                   <Card.Img
//                     src={element.photoPath}
//                     style={{
//                       height: "25rem",
//                       objectFit: "cover",
//                       borderRadius: "0",
//                     }}
//                     className="img2"
                    
//                   />{" "}
//                   <Card.ImgOverlay>
//                     <Card.Text style={{position:"absolute",bottom:"2rem"}}>
//                       <p1>{element.date}</p1>
//                       <br/>
//                       <p2>
//                        {element.title}
//                       </p2>
//                     </Card.Text>
//                       <p3 style={{fontSize:"13px",fontWeight:"400" , position:"absolute", bottom:"1rem" }}>
//                         <span>READ MORE</span>
//                         <span className="span2"> <FontAwesomeIcon  icon={faArrowCircleRight} style={{color:"rgb(238, 212, 132)" ,marginLeft:"6px"}} />  </span>
//                       </p3>
//                   </Card.ImgOverlay>
//                 </Card>
//               </a>
//             </div>
//              ))
//           }
//         </Slider>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import "./index4.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default function MySwiper4() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // استخدام db.json and getting it from public folder
    axios.get("/db.json")
      .then((res) => {
        // تحويل البيانات لتتناسب مع Slider
        const formattedNews = res.data.shipments.map(product => ({
          id: product.id,
          title: product.title,
          date: "Jan 1, 2026", 
          photoPath: product.image
        }));
        setNews(formattedNews);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 0, dots: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
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
      <div className="container">
        <Slider {...settings}>
          {news.map((element) => (
            <div key={element.id}>
              <a className="cardlink" href={`news/${element.id}`} aria-description="product details">
                <Card
                  className="text-white"
                  style={{
                    width: "24rem",
                    height: "25rem",
                    border: "none",
                    borderRadius: "0",
                    position: "relative"
                  }}
                >
                  <Card.Img
                    src={element.photoPath}
                    style={{
                      height: "25rem",
                      objectFit: "cover",
                      borderRadius: "0",
                    }}
                    className="img2"
                  />
                  <Card.ImgOverlay>
                    <Card.Text style={{ position: "absolute", bottom: "2rem" }}>
                      <p1>{element.date}</p1>
                      <br/>
                      <p2>{element.title}</p2>
                    </Card.Text>
                    <p3 style={{ fontSize: "13px", fontWeight: "400", position: "absolute", bottom: "1rem" }}>
                      <span>READ MORE</span>
                      <span className="span2">
                        <FontAwesomeIcon icon={faArrowCircleRight} style={{ color: "rgb(238, 212, 132)", marginLeft: "6px" }} />
                      </span>
                    </p3>
                  </Card.ImgOverlay>
                </Card>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
