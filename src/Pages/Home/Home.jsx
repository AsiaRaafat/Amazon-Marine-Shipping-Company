import "./Home.scss";
import axios from "axios";
import { Children, useEffect, useState } from "react";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import MySwiper from "../../Components/Swiper 3/MySwiper";
import MySwiper from "../../Components/Swiper 3/MySwiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MySwiper4 from "../../Components/Swiper4/MySwiper4";
import MySwiper5 from "../../Components/Swiper5/MySwiper5";
import MySwiper1 from "../../Components/Swiper1/MySwiper1";
import MySwiper2 from "../../Components/Swiper2/MySwiper2";
import ScrollToTopButton from "../../Components/ScrollButton/ScrollButton";
import MyForm from "../../Components/FORM/MyForm";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";



export default function Home() {
  const { t } = useTranslation("global");
  const  userLang = localStorage.getItem("lang");
  const [homeProduct, setHomeProduct] = useState([]);
  const [nameTags, setNameTags] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://shipping.somee.com/api/Website/GetSolutions/?lang=en`, {
  //       params: {
  //         populate: "*",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setHomeProduct(res.data);
  //     });
  // }, []);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => setHomeProduct(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


  // useEffect(() => {
  //   axios
  //     .get(`https://shipping.somee.com/api/Website/GetTags`, {
  //       params: {
  //         populate: "*",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setNameTags(res.data);
  //     });
  // }, []);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => setNameTags(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);



  return (
    <div className="col-12 homepage"  dir={userLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="hero-section" autoFocus>
        
      <Helmet>  
       <meta name="description" content={nameTags.description}/> 
       <title>{nameTags.name}</title>
      </Helmet>
       
        <meta charSet="utf-8" name="description" content="شركة شحن ونقل بحري لافضل واسرع توصيل بري وبحري" />
                <title>amazonmarin shipping company|| trade services</title>
                <link rel="canonical" href="https://sysar.online/" />
        <meta name="robots" content="index , follow " />    
        
        <h1 className="h11 fw-bolder text-center">
          <span style={{ color: "#000000" }}>
            {t("text.LEADER IN")} <br/>
            {t("text.SHIPPING & LOGISTICS")}
          </span>
        </h1>
      </div>
      <div className="container">
        <div className="col-12 content">
          <h1 className="h12">{t("text.Our Solutions")}</h1>
          <div className="line "></div>
          <p className="text-center">
            {t("text.As well as being a global leader in container shipping")} <br/>
            {t("text.our worldwide teams ofindustry specific experts mean")}<br/>
            {t("text.we can offer our customers round-the-clockpersonalised service This ensures we deliver fast and reliable transit")}
            <br />
            <p className="text-center">
              {t("text.that we provide the best solutions for your needs.")}
            </p>
          </p>
        </div>
      </div>
      <div className="firstslider container">
        <MySwiper1 />
      </div>
      <div className="container section2">
        <MySwiper2 />
      </div>
      <div className="container">
        <div className="col-11 content text-center">
          <h1 className="h12">{t("text.Your Shipping Needs Met")}</h1>
          <div className="line "></div>
          <p className="text-center">
            {t("text.At AM we pride ourselves on being a global container shipping company that delivers tailored")} <br/>
            {t("text.solutions designed to meet the specific needs of each of our customers. Regardless of your cargo")} <br/>
            {t("text.or final destination, we offer versatile solutions that cover air, land, and sea.")} <br/>
            <p style={{ marginTop: "2rem" }}>               
            {t("text.Thanks to the extensive capacity of our container fleet, AM is the trusted transportation partner and")}<br/>   
            {t("text.shipping company for numerous companies the world over. Combining this with our global port")}<br/>   
            {t("text.coverage and extensive equipment availability means, we are able to deliver a professional, efficient")}<br/>   
            {t("text.shipping service, tailored to the specific needs of your business.")}   
          </p>
          </p>
        </div>
      </div>
      <div className="container">
        <MySwiper />
      </div>
      <br />
      <div className="section3">
        <div className="col-12 content">
          <h1 className="h12" style={{ color: "white" }}>
            {t("text. Moving the World, Together.")}
          </h1>
          <div className="line "></div>
          <p
            style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
            className="text-white"
          >
            {t("text.Our global shipping network is developed for our customers. By")}
            <br />
            
            {t("text.focusing on delivering best-in-class service to our customers, we are")}
            <br /> 
            {t("text.always available to help you with your particular needs and offer you a")}
            <br />
           {t("text.one-stop-shop solution for your next shipping request.")}
          </p>
        </div>
        <div className="container">
          <div className="col-12 datadiv">
            <div className="col-lg-3 col-md-3  col-sm-6 data1">
              <div>
                <img
                  src="/images/employee (4).png"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <h2 style={{ fontWeight: "900", color: "white" }}>300,000K</h2>
              <p className="text-light">{t("text.AM Group employees")}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-6 data1">
              <div>
                <img
                  src="/images/ship (1).png"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <h2 style={{ fontWeight: "900", color: "white" }}>860</h2>
              <p className="text-light">{t("text.vessels")}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-6 data1">
              <div>
                <img
                  src="/images/shipping.png"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <h2 style={{ fontWeight: "900", color: "white" }}>30</h2>
              <p className="text-light">{t("text.million TEUs carried annually")}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-6 data1">
              <div>
                <img
                  src="/images/office-building.png"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <h2 style={{ fontWeight: "900", color: "white" }}>740</h2>
              <p className="text-light">{t("text.offices")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 content">
        <h1 className="h13  text-center">
        {t("text.Discover the Latest News About AM")}
          <br /> 
        </h1>
        <div className="line "></div>
      </div>
      <div>
        <MySwiper4 />
      </div>
      <div className="lastsection">
        <div className="container">
          <div className="col-12 d-flex justify-content-between">
            <h4 className="text-md-center    h114">{t("text.CUSTOMER ADVISORIES")}</h4>
         
          </div>
          <hr style={{ color: "white", fontSize: "100px" }} />
          <div>
            <MySwiper5 />
          </div>
        </div>
      </div>
      <div>
        <div className="col-12 content">
          <h1 className="h13  text-center">
           {t("text.Ready to Book?")} 
            <br />
            <span style={{ fontWeight: "400",marginTop:"0.5rem" }}>
             {t("text. Get in Touch with our Local Offices")}
            </span>
          </h1>
          <div className="line "></div>
        </div>
        <div className="container">
          <MyForm />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
