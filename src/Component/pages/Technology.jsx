import  { useContext } from "react";

import { Link } from "react-router-dom";

import "./Style.css";
import video from "../images/video.mp4"
import { Contextdata } from "../Contextapi/Contextapi";
function Technology() {

  const bollywooddata = useContext(Contextdata);


  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }
  return (
    <>
      <>
        <div className="boll-heading">
          <h1>Technology</h1>
        </div>
        <div className="bollywood-data">
          {bollywooddata
            .filter((item) => item.id >=23 && item.id < 31)
            .map((data, index) => {
              return (
                <div className="imagedata" key={index}>
                  <div className="child">
                    <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
                      <img src={data.Image} alt="click here" />
                    </Link>
                    <div className="title">{data.heading}</div>

                    <div className="description">
                      {truncateDescription(data.description, 50)}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* --------------top stories------------------------ */}
        <div className="stories">Top stories</div>

        <div className="bollywood-first-container">
          <div className="bollywood-firstinner-container">
            <div className="bollywood-content">
              {bollywooddata
                .filter((item) => item.id >= 31 && item.id < 40)
                .map((data, index) => {
                  return (
                    <>
                      <div className="child" key={index}>
                        <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
                          <img src={data.Image} alt="click here" />
                        </Link>
                        <div className="title">{data.heading}</div>

                        <div className="description">
                          {truncateDescription(data.description, 15)}
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
          
            </div>
          </div>

          <div className="bollywood-secondinner-container">
            <div className="bollywood-inner-content">
              <div className="post">Top Post</div>
              {bollywooddata
                .filter((item) => item.id >= 40 && item.id <=45)
                .map((data, index) => {
                  const count = index + 1;
                  return (
                    <>
                      <div className="child" key={index}>
                        <Link to={"/detaildescription/" + data.id+"/"+data.catgory}>
                          <img src={data.Image} alt="click here" />
                        </Link>
                        <div className="title">{data.heading}</div>

                        <div className="description">
                          {truncateDescription(data.description, 8)}
                        </div>
                        <div className="count">{count}</div>
                      </div>

                      <hr />
                    </>
                  );
                })}
              <div className="advertisement">
           <video src={video}   muted loop autoPlay></video>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Technology;
