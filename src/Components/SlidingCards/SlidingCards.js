import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../../Api/Api";
import {
  AddItem,
  DesincrementProduct,
  IncrementProduct,
} from "../../Redux/Action";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardSlidingBar from "../Card/CardSlidingBar";

function SlidingCards(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier.data);
  const getProducts = async () => {
    const response = await showProduct();
    if (response.status === 200) {
      setData(response.data);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data.map((el, index) => (
        <CardSlidingBar
          link={`${el._id}`}
          key={index}
          price={el.price}
          name={el.name}
          stock={
            panier.filter((el2) => el._id === el2._id).length
              ? el.stock
              : el.stock
          }
          onClick={() => dispatch(AddItem(el))}
          add={() => dispatch(IncrementProduct(el))}
          minus={() => dispatch(DesincrementProduct(el))}
          exist={
            panier.filter((el2) => el._id === el2._id).length ? true : false
          }
        ></CardSlidingBar>
      ))}
    </Carousel>
  );
}

export default SlidingCards;
