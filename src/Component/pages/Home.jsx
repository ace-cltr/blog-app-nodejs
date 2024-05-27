
import  { useContext } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import video from "../images/video.mp4"
import { Contextdata } from "../Contextapi/Contextapi";
export const Home = () => {
  
  const apidata = useContext(Contextdata);

console.log(apidata)

  function truncateDescription(description, numWords) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription;
  }

  
  return (
    <>
     {apidata[0] && (
  <div className="top-container">
    <div className="first-container">
      <img src={apidata[0].image1} alt="" />
    </div>
    <div className="second-container">
      <img src={apidata[0].image2} alt="" />
    </div>
    <div className="third-container">
      <img src={apidata[0].image3} alt="" />
    </div>
  </div>
)}


      <div className="boll-heading">
        <h1>The Latest</h1>
      </div>
      <div className="bollywood-data">
        {apidata
          .filter((item) => item.id >= 114 && item.id < 122)
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
              .filter((item) => item.id >= 122 && item.id < 131)
              .map((data, index) => {
                return (
                  <div key={index}>
                    <div className="child">
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
                  </div>
                );
              })}
          
          </div>
        </div>

        <div className="bollywood-secondinner-container">
          <div className="bollywood-inner-content">
            <div className="post">Top Post</div>
            {apidata
              .filter((item) => item.id >= 132 && item.id <= 138)
              .map((data, index) => {
                const count = index + 1;
                return (
                  <div key={index}>
                    <div className="child">
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
                      <div className="count">{count}</div>
                    </div>

                    <hr />
                  </div>
                );
              })}
            <div className="advertisement">
            <video src={video}   muted loop autoPlay></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
