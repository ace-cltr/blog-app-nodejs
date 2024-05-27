import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <Link to={"https://www.facebook.com/"}>
          <i className="fa-brands fa-facebook fa-beat-fade fa-2xl "></i>
        </Link>

        <Link to={"https://www.instagram.com/_anand.vish_/"}>
          <i className="fa-brands fa-instagram  fa-beat-fade fa-2xl "></i>
        </Link>
        <Link to={"https://www.linkedin.com/in/anand-vishwakarma-87a57a276/"}>
          <i className="fa-brands fa-linkedin fa-beat-fade fa-2xl"></i>
        </Link>

        <Link to={"https://github.com/ace-cltr"}>
          <i className="fa-brands fa-github fa-beat-fade fa-2xl"></i>
        </Link>
      </div>
      <div className="copy-right">
        <div> &copy; Anand Vishwakarma </div>
      </div>
    </>
  );
}

export default Footer;
