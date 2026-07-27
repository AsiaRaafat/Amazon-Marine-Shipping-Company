// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./indexpage.scss";
// import { Helmet } from "react-helmet";

// export default function SingleSevice() {
//   const { id } = useParams();
//   const [item, setItem] = useState({});
//   const [services,setServices]=useState([]);
//   const language = localStorage.getItem("lang");  

//   useEffect(() => {
//     console.log("Test ");
//     axios
//       .get(
//         `https://shipping.somee.com/api/Website/GetServiceById?Id=${id}&lang=${language}`,
//         {
//           params: {
//             populate: "*",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.data.serviceList);
//         setItem(res.data);
//         setServices(res.data.serviceList);
//       });
//   }, [1]);


//   return (
//     <div className="col-12  mains"   dir={language === 'ar' ? 'rtl' : 'ltr'}>
//       <Helmet>
//       <title>services- amazonmarin shipping company</title>
//       <link rel="canonical" href="https://sysar.online/" />
//       </Helmet>
//       <div className="servicemain">
//         <img
//           src={item.photoPath}
//           className="serviceimage"
//         />
//         <div class="serviceoverlay">
//           <h1 className="text-sm-center   hservice" style={{color:"black",fontWeight:"bolder",fontSize:"45px"}}>
//             {item.name}
//           </h1>
//         </div>
//       </div>

//       <div className="container">
//         <div className="col-12 content">
//           <h1 className="h12">{item.title}</h1>
//           <div className="line "></div>
//           <p className="text-center col-8">
//             {item.description}
//           </p>
//         </div>
//       </div>
//    <div className="container servicecon">
//       {
//       services.map((product, index) => (

//     <div key={product.id} className="servicelist row d-flex " style={{ direction: index % 2 === 0 ? 'ltr' : 'rtl' }}>
//        <div className="col-lg-6 col-md-12 col-sm-12">
//         <div className="w-100 h-100  servicetext">
//           <h1 className="h12 text-center"> {product.title}</h1>
//           <div className="line "></div>
//           <p className="text-center">{product.description}</p>
//        </div>
//         </div>
//        <div className="col-lg-6 col-md-12 col-sm-12">
//         <div className="w-100 h-100">
//      <img src={product.photoPath} className="serviceimg"
//      />
//        </div>
//         </div>
//     </div>
//             ))
//      }
//    </div>
//     </div>
//   );
// }



import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./indexpage.scss";
import { Helmet } from "react-helmet";

export default function SingleService() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [services, setServices] = useState([]);
  const language = localStorage.getItem("lang");  

    useEffect(() => {
      axios.get("/db.json")
      .then((res) => {
         const product = res.data.products.find(
         (item) => item.id === Number(id)
        );

        if (product) {
         setItem({
          name: product.title,
          title: product.title,
          description: product.description,
          photoPath: product.image,
        });
      }
    

        setServices([
          {
            id: product.id + "-1",
            title: product.title,
            description: product.description,
            photoPath: product.image
          },
          {
            id: product.id + "-2",
            title: product.title + " Extra",
            description: product.description,
            photoPath: product.image
          }
        ]);
      })
      .catch((err) => console.error("Error fetching product:", err));
        }, [id]);

  return (
    <div className="col-12 mains" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>services - amazonmarin shipping company</title>
        <link rel="canonical" href="https://sysar.online/" />
      </Helmet>
      <div className="servicemain">
        <img src={item.photoPath} className="serviceimage" alt={item.title} />
        <div className="serviceoverlay">
          <h1 className="text-sm-center hservice" style={{color:"black", fontWeight:"bolder", fontSize:"45px"}}>
            {item.name}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="col-12 content">
          <h1 className="h12">{item.title}</h1>
          <div className="line"></div>
          <p className="text-center col-8">
            {item.description}
          </p>
        </div>
      </div>

      <div className="container servicecon">
        {services.map((product, index) => (
          <div key={product.id} className="servicelist row d-flex" style={{ direction: index % 2 === 0 ? 'ltr' : 'rtl' }}>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="w-100 h-100 servicetext">
                <h1 className="h12 text-center">{product.title}</h1>
                <div className="line"></div>
                <p className="text-center">{product.description}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="w-100 h-100">
                <img src={product.photoPath} className="serviceimg" alt={product.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

