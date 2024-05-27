import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Contextdata } from "./Contextapi/Contextapi";
import { Link } from "react-router-dom";
import logo from "../Component/images/Mask Group 16.png";

import "./Navbar.css";

export const Detaildesciption = () => {
  const { id, catgory } = useParams();
  console.log(useParams());

  const bollywooddata = useContext(Contextdata);

  const imageData = bollywooddata.find((item) => item.id === parseInt(id));

  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  return (
    <>
      <div className="unique-image">
        <div className="like-share">
          <div className="like-heading">
            <i className="fa-solid fa-thumbs-up"></i>Like
          </div>
          <div className="share">
          <i className="fa-solid fa-share"></i>share
          </div>
        </div>
        <div className="child-of-des">
          <h1>{imageData.heading}</h1>
          <div className="header-for-img">
            <div className="mypic">
              <img src={logo} alt="" />
            </div>
            <div className="names">
              <h5>Anand Vishwakarma</h5>
              <h5>{today}</h5>
            </div>
            <div>
              <div className="logo">
                <i className="fa-brands fa-facebook fa-beat-fade fa-2xl"></i>
                <i className="fa-brands fa-instagram fa-beat-fade fa-2xl"></i>
                <i className="fa-brands fa-twitter fa-beat-fade fa-2xl"></i>
                <i className="fa-brands fa-youtube fa-beat-fade fa-2xl"></i>
              </div>
            </div>
          </div>

          <img src={imageData.Image} alt="click here" className="movieimg" />
          <div className="des">
            <p>{imageData.description}</p>
          </div>
          <div className="like">
            <span className="material-symbols-outlined">👍</span>
            <p>Like</p>
          </div>
          <hr />

          <div className="header-for-img1">
            <div className="mypic">
              <img src={logo} alt="" />
            </div>
            <div className="names">
              <h5>Post by</h5>
              <h5>Anand Vishwakarma</h5>
              <h5>{today}</h5>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="siren-heading">
        <h1>More from The Siren</h1>
      </div>
      <hr />

      <div className="bollywood-data1">
        {bollywooddata
          .filter(
            (data) => (data.id % 2 === 0 && data.id % 8 === 0) || data.id === 22
          )
          .map((data, index) => {
            if (data.catgory === catgory) {
              console.log("data id is " + data.id);
              return (
                <div className="imagedata" key={index}>
                  <div className="child">
                    <Link
                      to={"/detaildescription/" + data.id + "/" + data.catgory}
                    >
                      <img src={data.Image} alt="click here" />
                    </Link>
                    <div className="title">{data.heading}</div>
                    <div className="description">
                      {truncateDescription(data.description, 20)}
                    </div>
                  </div>
                  <div className="logimage">
                    <div className="mypic">
                      <img src={logo} alt="" />
                    </div>
                    <div className="names">
                      <h5>Written by</h5>
                      <h5>Anand Vishwakarma</h5>
                      <h5>{today}</h5>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
    </>
  );
};

export default Detaildesciption;
