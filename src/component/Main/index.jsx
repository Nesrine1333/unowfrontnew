import styles from "./styles.module.css";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import courseImg from "../assets/courseImg.svg";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img from "../assets/courseImg.svg";
import loupe from "../assets/loupe.png";
import imgUK from "../assets/UK.svg";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import Typography from "@mui/material/Typography";
import { MdArrowForwardIos } from "react-icons/md";
// import Google from "../assets/Google.png";
// import Oxford from "../assets/Oxford.png";
// import Microsoft from "../assets/Microsoft.png";
// import IBM from "../assets/IBM.png";
// import Cambridge from "../assets/Cambridge.png";
import Scrum from "../assets/partners/scrum.png";
import Peoplecert from "../assets/partners/Peoplecert.svg";
import Axelos from "../assets/partners/axelos.png";
import DevOps from "../assets/partners/devOps Institute.png";
import Exin from "../assets/partners/exin.svg";
import PMI from "../assets/partners/pmi_new_logo.png";
import SAFe from "../assets/partners/SAFe.png";
import bill from "../assets/bill.png";

import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Swipeable } from "react-swipeable";
// import logo from "../assets/logo2.jpg"
import Footer from "../footer";
import ApplyTrainer from "./ApplyTrainer";
import imgLogo from "../assets/logo.jpg";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Nav from "../Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./sliderPoints";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Header } from "./Header/header";
const Main = () => {




  // const user = JSON.parse(localStorage.getItem("user"));
  // useEffect(() => {
  //   console.log(user);
  // });
  // const [CatalogueState, setCatalogueState] = useState(
  //   user?.personalized?.learningType === "trainings" ||
  //     user?.personalized?.learningType === "both" ||
  //     user === null
  //     ? "Trainings"
  //     : "Courses"
  // );

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   nextArrow: <Arrow />,
  //   prevArrow: <Arrow />,
  // };

  // function Arrow(props) {
  //   const { className, style, onClick } = props;
  //   return <div />;
  // }

  // const token = localStorage.getItem("token");

  // const theme = createTheme({
  //   palette: {
  //     ochre: {
  //       main: "#ffc516",
  //     },
  //   },
  // });

  // const TextRating = (value, avis) => {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Box
  //         sx={{
  //           width: 200,
  //           display: "flex",
  //           alignItems: "center",
  //         }}
  //       >
  //         <StarIcon color="ochre" style={{ opacity: 0.55 }} fontSize="small" />

  //         <div className={styles.rating_text}>
  //           <p>({value > 0 ? value : 0})</p>
  //           <p>({avis})</p>
  //         </div>
  //       </Box>
  //     </ThemeProvider>
  //   );
  // };

  // const TextRating2 = (value, avis) => {
  //   return (
  //     <Box
  //       sx={{
  //         width: 80,
  //         display: "flex",
  //         alignItems: "center",
  //         ml: 1,
  //       }}
  //     >
  //       <Rating
  //         name="text-feedback"
  //         value={value}
  //         readOnly
  //         precision={0.5}
  //         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  //       />
  //       <Box>
  //         <p className={styles.MuiBox}>({avis} avis)</p>
  //       </Box>
  //     </Box>
  //   );
  // };

  // var [CoursesList, setCoursesList] = useState([]);
  // var [TrainingsList, setTrainingsList] = useState([]);
  // const [trainers, setTrainers] = useState([]);

  // const getTrainers = async () => {
  //   const url = `${process.env.REACT_APP_API}/api/Trainer/trainers`;
  //   axios.get(url).then((res) => {
  //     setTrainers(res.data.trainers);
  //   });
  // };

  // useEffect(() => {
  //   handleSubmit();
  //   getTrainers();
  // }, []);

  // const handleSubmit = async () => {
  //   try {
  //     const url = `${process.env.REACT_APP_API}/api/trainings`;
  //     axios.post(url).then((res) => {
  //       setTrainingsList(res.data.data);
  //       localStorage.setItem("AllTrainingsList", JSON.stringify(res.data.data));
  //     });
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //     }
  //   }
  //   try {
  //     const url = `${process.env.REACT_APP_API}/api/courses`;
  //     axios.post(url, {}).then((res) => {
  //       setCoursesList(res.data.data);
  //       localStorage.setItem("AllCoursesList", JSON.stringify(res.data.data));
  //     });
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //     }
  //   }
  // };

  // const [categorySelected, setCategorySelected] = useState("All Categories");

  // const ListCourses = CoursesList.map((element) => {
  //   if (element.Category === categorySelected) {
  //     return (
  //       <Link
  //         to={{ pathname: `/Course/${element._id}` }}
  //         onClick={() => {
  //           user &&
  //             user.lastSeen &&
  //             (user.lastSeen = [...user.lastSeen, element._id]);
  //           localStorage.setItem("user", JSON.stringify(user));
  //           window.scrollTo(0, 0);
  //         }}
  //       >
  //         <div key={element._id} className={styles.Courses}>
  //           <div className={styles.display}>
  //             {element.Thumbnail ? (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/${element.Thumbnail.filePath}`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             ) : (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/uploads/courseImg.png`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             )}

  //             <div className={styles.ListCoursesInfoCourse}>
  //               <p className={styles.ListCoursesCardCategory}>
  //                 {element.Category}
  //               </p>
  //               <hr className={styles.ListCoursesCardCategoryHr} />

  //               <Typography className={styles.ListCoursesCardTitle} noWrap>
  //                 {element.Title}
  //               </Typography>
  //               <hr className={styles.ListCoursesCardCenterHr} />
  //               <p className={styles.ListCoursesCardLevel}>
  //                 Level: <span>{element.Level}</span>
  //                 {/* Level: <span>{element.Level}</span> */}
  //               </p>
  //             </div>
  //           </div>
  //           <div className={styles.ListCoursesFooter}>
  //             <div className={styles.ListCoursesCardRating}>
  //               {TextRating2(element.rating, element.evaluate.length)}
  //               {/* {TextRating2(element.note,element.avis)} */}
  //             </div>
  //             <p className={styles.priceFooter}>{element.Price} TTC</p>
  //             {/* <p className={styles.priceFooter}>{element.price} $ HT</p> */}
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   } else if (categorySelected === "All Categories") {
  //     return (
  //       <Link
  //         to={{ pathname: `/Course/${element._id}` }}
  //         onClick={() => {
  //           user &&
  //             user.lastSeen &&
  //             (user.lastSeen = [...user.lastSeen, element._id]);
  //           localStorage.setItem("user", JSON.stringify(user));
  //           window.scrollTo(0, 0);
  //         }}
  //       >
  //         <div key={element._id} className={styles.Courses}>
  //           <div className={styles.display}>
  //             {element.Thumbnail ? (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/${element.Thumbnail.filePath}`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             ) : (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/uploads/courseImg.png`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             )}

  //             <div className={styles.ListCoursesInfoCourse}>
  //               <p className={styles.ListCoursesCardCategory}>
  //                 {element.Category}
  //               </p>
  //               <hr className={styles.ListCoursesCardCategoryHr} />

  //               <Typography className={styles.ListCoursesCardTitle} noWrap>
  //                 {element.Title}
  //               </Typography>
  //               <hr className={styles.ListCoursesCardCenterHr} />
  //               <p className={styles.ListCoursesCardLevel}>
  //                 Level: <span>{element.Level}</span>
  //                 {/* Level: <span>{element.Level}</span> */}
  //               </p>
  //             </div>
  //           </div>
  //           <div className={styles.ListCoursesFooter}>
  //             <div className={styles.ListCoursesCardRating}>
  //               {TextRating2(element.rating, element.evaluate.length)}
  //               {/* {TextRating2(element.note,element.avis)} */}
  //             </div>
  //             <p className={styles.priceFooter}>{element.Price} TTC</p>
  //             {/* <p className={styles.priceFooter}>{element.price} $ HT</p> */}
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   }
  // });

  // const ListTrainings = TrainingsList.map((element) => {
  //   if (element.Category === categorySelected) {
  //     return (
  //       <Link
  //         to={{ pathname: `/Training/${element._id}` }}
  //         onClick={() => {
  //           user &&
  //             user.lastSeen &&
  //             (user.lastSeen = [...user.lastSeen, element._id]);
  //           localStorage.setItem("user", JSON.stringify(user));
  //           window.scrollTo(0, 0);
  //         }}
  //       >
  //         <div key={element._id} className={styles.Courses}>
  //           <div className={styles.display}>
  //             {element.Thumbnail ? (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/${element.Thumbnail.filePath}`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             ) : (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/uploads/courseImg.png`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             )}
  //             <div className={styles.ListCoursesInfoCourse}>
  //               <p className={styles.ListCoursesCardCategory}>
  //                 {element.Category}
  //               </p>
  //               <hr className={styles.ListCoursesCardCategoryHr} />

  //               <Typography className={styles.ListCoursesCardTitle} noWrap>
  //                 {element.Title}
  //               </Typography>
  //               <hr className={styles.ListCoursesCardCenterHr} />
  //               <p className={styles.ListCoursesCardLevel}>
  //                 Level: <span>{element.Level}</span>
  //                 {/* Level: <span>{element.Level}</span> */}
  //               </p>
  //             </div>
  //           </div>
  //           <div className={styles.ListCoursesFooter}>
  //             <div className={styles.ListCoursesCardRating}>
  //               {TextRating2(element.rating, element.evaluate.length)}

  //               {/* {TextRating2(element.note,element.avis)} */}
  //             </div>
  //             <p className={styles.priceFooter}>{element.Price} TTC</p>
  //             {/* <p className={styles.priceFooter}>{element.price} $ HT</p> */}
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   } else if (categorySelected === "All Categories") {
  //     return (
  //       <Link
  //         to={{ pathname: `/Training/${element._id}` }}
  //         onClick={() => {
  //           user &&
  //             user.lastSeen &&
  //             (user.lastSeen = [...user.lastSeen, element._id]);
  //           localStorage.setItem("user", JSON.stringify(user));
  //           window.scrollTo(0, 0);
  //         }}
  //       >
  //         <div key={element._id} className={styles.Courses}>
  //           <div className={styles.display}>
  //             {element.Thumbnail ? (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/${element.Thumbnail.filePath}`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             ) : (
  //               <img
  //                 src={`${process.env.REACT_APP_API}/uploads/courseImg.png`}
  //                 alt=""
  //                 className={styles.imgCourse}
  //               />
  //             )}
  //             <div className={styles.ListCoursesInfoCourse}>
  //               <p className={styles.ListCoursesCardCategory}>
  //                 {element.Category}
  //               </p>
  //               <hr className={styles.ListCoursesCardCategoryHr} />

  //               <Typography className={styles.ListCoursesCardTitle} noWrap>
  //                 {element.Title}
  //               </Typography>
  //               <hr className={styles.ListCoursesCardCenterHr} />
  //               <p className={styles.ListCoursesCardLevel}>
  //                 Level: <span>{element.Level}</span>
  //                 {/* Level: <span>{element.Level}</span> */}
  //               </p>
  //             </div>
  //           </div>
  //           <div className={styles.ListCoursesFooter}>
  //             <div className={styles.ListCoursesCardRating}>
  //               {TextRating2(element.rating, element.evaluate.length)}

  //               {/* {TextRating2(element.note,element.avis)} */}
  //             </div>
  //             <p className={styles.priceFooter}>{element.Price} TTC</p>
  //             {/* <p className={styles.priceFooter}>{element.price} $ HT</p> */}
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   }
  // });

  // /*/////////////////////////////////////////////////////////////////////////////*/
  // /*/////////////////////////////////////////////////////////////////////////////*/
  // /*/////////////////////////////////////////////////////////////////////////////*/
  // /*/////////////////////////////////////////////////////////////////////////////*/

  // const [categoriesFromBd, setCategoriesFromBd] = useState([]);

  // const HandleCategories = async () => {
  //   const config = {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   };
  //   await axios
  //     .get(`${process.env.REACT_APP_API}/api/Category/getCategories`, config)
  //     .then(async (res) => {
  //       setCategoriesFromBd(res.data.data);
  //     });
  // };
  // useEffect(async () => {
  //   await HandleCategories();
  // }, []);

  // /*/////////////////////////////////////////////////////////////////////////////*/
  // /*/////////////////////////////////////////////////////////////////////////////*/
  // /*/////////////////////////////////////////////////////////////////////////////*/
  // /*/////////////////////////////////////////////////////////////////////////////*/

  // const [openApply, setOpenApply] = useState(false);

  // const [width, setWidth] = useState(0);

  // const carousel = useRef();
  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  // const [WindowWidth, setWindowWidth] = useState(0);
  // const handleWidthChange = () => {
  //   const currentWidth = window.innerWidth;
  //   setWindowWidth(currentWidth);
  // };

  // useEffect(() => {
  //   if (WindowWidth <= 756) {
  //     setMobileView(true);
  //   } else {
  //     setMobileView(false);
  //   }

  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

  //   handleWidthChange();
  //   window.addEventListener("resize", handleWidthChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWidthChange);
  //   };
  // }, [, WindowWidth]);
  // const [mobileView, setMobileView] = useState(false);

  // useEffect(() => { }, [WindowWidth]);

  // const topTrainingElements = TrainingsList.sort((a, b) =>
  //   a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
  // )
  //   .reverse()
  //   .sort((a, b) => (a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0))
  //   .map((element, index) => {
  //     return (
  //       <Link
  //         // to={
  //         //   productType == "trainings"
  //         //     ? { pathname: `/Training/${element._id}` }
  //         //     : { pathname: `/Course/${element._id}` }
  //         // }

  //         to={{ pathname: `/Training/${element._id}` }}
  //         onClick={() => {
  //           user &&
  //             user.lastSeen &&
  //             (user.lastSeen = [...user.lastSeen, element._id]);
  //           localStorage.setItem("user", JSON.stringify(user));
  //           window.scrollTo(0, 0);
  //         }}
  //       >
  //         <motion.div className={styles.topTrainingElement}>
  //           <div className={styles.card_footer_type}>Training</div>
  //           {element.Thumbnail ? (
  //             <CardMedia
  //               component="img"
  //               src={`${process.env.REACT_APP_API}/${element.Thumbnail.filePath}`}
  //               alt=""
  //               className={styles.imgTop}
  //             />
  //           ) : (
  //             <CardMedia
  //               component="img"
  //               src={`${process.env.REACT_APP_API}/uploads/courseImg.png`}
  //               alt=""
  //               className={styles.imgTop}
  //             />
  //           )}

  //           <div className={styles.infoCourse}>
  //             <div className={styles.card_header}>
  //               <div
  //                 style={{
  //                   backgroundColor: categoriesFromBd?.filter(
  //                     (cat) => cat?.Title == element?.Category
  //                   )[0]?.color,

  //                   // category.color,
  //                 }}
  //                 className={styles.category_tag}
  //               >
  //                 <p className={styles.category}>{element.Category}</p>
  //               </div>
  //               <Typography className={styles.card_price}>
  //                 {element.Price} $
  //               </Typography>
  //             </div>
  //             <Typography
  //               sx={{
  //                 fontWeight: "bold",
  //               }}
  //               className={styles.cardLevel}
  //             >
  //               {element.Level}
  //             </Typography>
  //             <Typography
  //               sx={{
  //                 fontWeight: "bold",
  //               }}
  //               onClick={() => {
  //                 window.location = `/Course/${element._id}`;
  //               }}
  //               className={styles.cardTitle}
  //               noWrap
  //             >
  //               {element.Title}
  //             </Typography>

  //             <div className={styles.card_footer}>
  //               {TextRating(element.rating, element.evaluate.length)}

  //               <div className={styles.card_footer_subscribers}>
  //                 {/*<div className={styles.subscribers_container}>
  //                 <div className={styles.user_avatar_subscribers}>
  //                   <img src={avatar1} alt="" />
  //                 </div>
  //                 <div
  //                   className={`${styles.user_avatar_subscribers} ${styles.z_effect}`}
  //                 >
  //                   <img  alt="" />
  //                 </div>
  //                 <div
  //                   className={`${styles.user_avatar_subscribers} ${styles.z_effect2}`}
  //                 >
  //                   <img src={avatar3} alt="" />
  //                 </div>
  //               </div>*/}
  //                 <AvatarGroup>
  //                   <Avatar
  //                     alt="user1"
  //                     src={avatar1}
  //                     sx={{ width: 10, height: 10 }}
  //                   />
  //                   <Avatar
  //                     alt="user2"
  //                     src={avatar2}
  //                     sx={{ width: 10, height: 10 }}
  //                   />
  //                   <Avatar
  //                     alt="user3"
  //                     src={avatar3}
  //                     sx={{ width: 10, height: 10 }}
  //                   />
  //                 </AvatarGroup>
  //                 <p className={styles.subscribers_text}>3k+</p>
  //               </div>
  //             </div>
  //           </div>
  //         </motion.div>
  //       </Link>
  //     );
  //   });




  const refHome = useRef(null);

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 100, behavior: 'smooth' });
  };
  return (
    <React.Fragment className={styles.body}>
      <div><img src="./images/home/background.png" alt=""   className={styles.imagebackground}  /></div>
      <div className={styles.background} style={{ backgroundColor: 'background: #f9f9f9;' }}>
        <Nav ref={refHome} />
        <div className={styles.motivationImg}>
          <div>
            <div className={styles.textsearchtitle}>
              Let's build the future together
            </div>
            <div className={styles.textsearch}>
              “Coming together is a beginning, keeping together is progress,
              working together is success.” Henry Ford
            </div>
          </div>
          {/* <div className={styles.sectionTwo}> */}
          <div className={styles.explore_container}>
            <button
              className={styles.explore_btn}
              type="button"
              onClick={() => { }}
            >
              Explore
            </button>
            <div className={styles.explore_line} />
            <input
              type="text"
              placeholder="Type here..."
              className={styles.explore_input}
            />
            <div className={styles.explore_line} />
            <button
              className={styles.search_btn}
              type="button"
              onClick={() => { }}
            >
              <img src={loupe} alt="" />
            </button>
          </div>
          {/* </div> */}

          {/* <section className={styles.sectionOne}>
          <div className={styles.motivationDiv}>
            <div className={styles.motivationQuotes}>
              <h1>
                Let’s build the <br />
                future together
              </h1>
              <h5>
                “Coming together is a beginning; keeping together is progress;
                working together is success.”<span> ~ Henry Ford</span>
              </h5>
            </div>
          </div>
        </section>*/}
        </div>
        <Header />

        <section className={styles.sectionThree}>
          <div className={styles.features}>
            FEATURED PRODUCTS
            <p className={styles.underline}></p>
          </div>
          <div className={styles.topTrainingElements}>
            <button
              className={`${styles.arrowButton} ${styles.left}`}
              onClick={scrollLeft}
            >
            <img src="./images/home/left.png" alt="Description of the image" className={styles.imagefeatures} />
            </button>
            <div className={styles.carousel} ref={carouselRef}>
              <div className={styles.inner_carousel}>
                <img src="featuredproducts1.png" alt="Description of the image" className={styles.imagefeatures} />
                <div className={styles.categorie}>
                  <div className={styles.categorietype}>Web Development</div>
                  <div className={styles.categoriprice}>1680 $</div>
                </div>
                <div className={styles.categoriniveau}>Intermediate</div>
                <div className={styles.categoridomain}>React: Developing a Web Application</div>
                <div className={styles.categorirating}> <div>

                  <img src="star 4.png" alt="Description of the image" className={styles.arrow} />
                  4.7 (750)
                </div>

                  <div>
                    likes
                  </div>
                </div>
              </div>
              <div className={styles.inner_carousel}>
                <img src="featuredproducts1.png" alt="Description of the image" className={styles.imagefeatures} />
                <div className={styles.categorie}>
                  <div className={styles.categorietype}>Web Development</div>
                  <div className={styles.categoriprice}>1680 $</div>
                </div>
                <div className={styles.categoriniveau}>Intermediate</div>
                <div className={styles.categoridomain}>React: Developing a Web Application</div>
                <div className={styles.categorirating}> <div>

                  <img src="star 4.png" alt="Description of the image" className={styles.arrow} />
                  4.7 (750)
                </div>

                  <div>
                    likes
                  </div>
                </div>
              </div>
              <div className={styles.inner_carousel}>
                <img src="featuredproducts1.png" alt="Description of the image" className={styles.imagefeatures} />
                <div className={styles.categorie}>
                  <div className={styles.categorietype}>Web Development</div>
                  <div className={styles.categoriprice}>1680 $</div>
                </div>
                <div className={styles.categoriniveau}>Intermediate</div>
                <div className={styles.categoridomain}>React: Developing a Web Application</div>
                <div className={styles.categorirating}> <div>

                  <img src="star 4.png" alt="Description of the image" className={styles.arrow} />
                  4.7 (750)
                </div>

                  <div>
                    likes
                  </div>
                </div>
              </div>
              {/* Add more items as needed */}
            </div>
            <button
              className={`${styles.arrowButton} ${styles.right}`}
              onClick={scrollRight}
            >
               <img src="./images/home/right.png" alt="Description of the image" className={styles.arrow} />
            </button>
          </div>
        </section>

      </div>

    </React.Fragment>
  );
};

export default Main;
