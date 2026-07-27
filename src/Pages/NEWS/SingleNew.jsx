// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./News.scss";
// import { Helmet } from "react-helmet";

// export default function SingleNew() {
//   const { id } = useParams();
//   const [product, setproduct] = useState({});
//   const language = localStorage.getItem("lang");  
  
//   useEffect(() => {
//     console.log("Test ");
//     axios
//     .get(
//       `https://shipping.somee.com/api/Website/GetNewsById?Id=${id}&lang=${language}`,
//       {
//         params: {
//           populate: "*",
//         },
//       }
//     )
//     .then((res) => {
//       console.log(res.data);
//       setproduct(res.data);
//     });
//   }, []);
  
//   return (
//     <div className="container news"    dir={language === 'ar' ? 'rtl' : 'ltr'}>
//     <p>ده نص ثابت كتبته بإيدي وهيبان دايمًا حتى لو الـ API مش شغال</p>
//       <Helmet>
//       <title>News- amazonmarin shipping company</title>
//       <link rel="canonical" href="https://sysar.online/" />
//       </Helmet>
//       <div className="newspage col-12">
//         <hr />
//         <a className="newslink" href="#">
//           {product.title}
//         </a>
//         <div className="mainnewssection">
        
//           <div className="newscontent col-8">
//             <h1 className="newsh">
//              {product.title}
//             </h1>
//             <div className="newsline"></div>
//             <span className="newspan">{product.date}</span>
//           </div>
//           <div>
//             <img id="newsimg" src={product.photoPath}
//             />
//           </div>
//           <div  className="col-8">
//             <b className="newstexts1">
//             <div className="text-center"  dangerouslySetInnerHTML={{ __html: product.description }} />
//             </b>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./News.scss";
import { Helmet } from "react-helmet";

export default function SingleNew() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const language = localStorage.getItem("lang");

    useEffect(() => {
     axios.get("/db.json")
      .then((res) => {
       const data = res.data.shipments.find(
         (item) => item.id === Number(id)
       );

      if (data) {
        setProduct({
          title: data.title,
          description: data.description,
          photoPath: data.image,
          date: "Jan 1, 2026",
        });
      }
    })
    .catch((err) => console.error(err));
   }, [id]);

  return (
    <div className="container news" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>News - amazonmarin shipping company</title>
        <link rel="canonical" href="https://sysar.online/" />
      </Helmet>
      <div className="newspage col-12">
        <hr />
        <a className="newslink" href="#">
          {product.title}
        </a>
        <div className="mainnewssection">
          <div className="newscontent col-8">
            <h1 className="newsh">{product.title}</h1>
            <div className="newsline"></div>
            <span className="newspan">{product.date}</span>
          </div>
          <div>
            <img id="newsimg" src={product.photoPath} alt={product.title} />
          </div>
          <div className="col-8">
            <b className="newstexts1">
              <div
                className="text-center"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
