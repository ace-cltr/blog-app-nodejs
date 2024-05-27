import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <Link to={"https://www.facebook.com/profile.php?id=100066165454663"}>
          <i className="fa-brands fa-square-facebook fa-beat-fade fa-2xl "></i>
        </Link>

        <Link to={"https://www.instagram.com/sumitrawat6216/?next=%2F"}>
          <i className="fa-brands fa-square-instagram  fa-beat-fade fa-2xl "></i>
        </Link>
        <Link to={"https://www.linkedin.com/in/sumit-rawat-419b8321b/"}>
          <i className="fa-brands fa-linkedin fa-beat-fade fa-2xl"></i>
        </Link>

        <Link to={"https://github.com/sumitpahadi"}>
          <i className="fa-brands fa-github fa-beat-fade fa-2xl"></i>
        </Link>
      </div>
      <div className="copy-right">
        <div> &copy; Anand Vishwakarma  </div>
      </div>
    </>
  );
}

export default Footer;
