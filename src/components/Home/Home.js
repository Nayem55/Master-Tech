import React from "react";
import "./Home.css";
import useReview from "../../CustomHooks/useReview";
import Review from "../Review/Review";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [reviews] = useReview();
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column">
      <div className="product d-flex justify-content-between align-items-center">
        <div className="img-text">
          <h1>
            Best Laptop <br />
            <span>With Amazing Features</span>{" "}
          </h1>
          <p>
            Lenovo IP Slim Laptop is comes with Intel Core i5-1035G1 Processor
            (6M Cache, 1.10 GHz up to 3.70 GHz), 8GB DDR4 SODIMM 2667MHz RAM
            which is upgrade able up to 16 GB, 1TB 5400rpm HDD and optional
            discrete graphics, you can do more with your PC and enjoy a rich
            entertainment experience.. In this laptop, it is also has 3 Cell
            Li-Polymer, Up to 7.5 hours, 2 x 1.5W speakers, Dolby Audio with
            Extra SSD slot.
          </p>
          <button>
            {" "}
            Watch Live{" "}
            <FontAwesomeIcon
              className="icon"
              icon={faCirclePlay}
            ></FontAwesomeIcon>{" "}
          </button>
        </div>
        <img
          className="img img-fluid "
          src="https://i0.wp.com/cdnimg.tcsc.my.id/2022/03/Lenovo-IdeaPad-Duet-5i-Diperkenalkan-Ke-Pasar.jpg?w=725&h=405"
          alt=""
        />
      </div>
      <p className="text-center text">Customer Reviews</p>
      <div className="home-review">
        {reviews.slice(0, 3).map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
      <button className="btn" onClick={() => navigate("/reviews")}>
        See All Reviews
      </button>
    </div>
  );
};

export default Home;
