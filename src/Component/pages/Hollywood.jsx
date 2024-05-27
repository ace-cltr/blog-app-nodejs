import { useContext } from "react";
import { Contextdata } from "../Contextapi/Contextapi";
import { Link } from "react-router-dom";
import video from "../images/video.mp4";

import "./Style.css";

export const Hollywood = () => {
  const apidata = useContext(Contextdata);

  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }

  // ------------------------------------------usesate---------------------------

  return (
    <>
      <div className="boll-heading">
        <h1>Hollywood</h1>
      </div>
      <div className="bollywood-data">
        {apidata
          .filter((item) => item.id > 45 && item.id < 54)
          .map((data, index) => {
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
            {apidata
              .filter((item) => item.id >= 54 && item.id < 64)
              .map((data, index) => {
                return (
                  <>
                    <div className="child" key={index}>
                      <Link
                        to={
                          "/detaildescription/" + data.id + "/" + data.catgory
                        }
                      >
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
            {apidata
              .filter((item) => item.id >= 63 && item.id <= 69)
              .map((data, index) => {
                const count = index + 1;
                return (
                  <>
                    <div className="child" key={index}>
                      <Link
                        to={
                          "/detaildescription/" + data.id + "/" + data.catgory
                        }
                      >
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
                )
              })}
            <div className="advertisement">
              <video src={video} muted loop autoPlay></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hollywood;
