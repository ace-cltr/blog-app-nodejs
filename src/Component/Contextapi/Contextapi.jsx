import{ createContext, useEffect, useState } from "react";
import axios from "axios";
import "./data.css";

export const Contextdata = createContext();
const url = "https://blog-app-backend-tbld.onrender.com/home";

function Contextapi({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <div className="ring">
        {" "}
        {/* Changed class to className */}
        Loading
        <span className="span"></span>
      </div>
    );
  } else {
    return <Contextdata.Provider value={data}>{children}</Contextdata.Provider>;
  }
}

export default Contextapi;
