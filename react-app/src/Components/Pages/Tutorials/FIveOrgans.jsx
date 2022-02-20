import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./FO.scss";
function FIveOrgans({ obj }) {
  const navigate = useNavigate();
  return (
    <div className="bg-danger FO-main">
      {obj != null ? (
        <div className="row h-100">
          <div className="col-md-6 imgHead">
            <img src={obj.imgLink} alt="img" />
          </div>
          <div className="col-md-6 infohead">
            <div className="information">
              <h1 className="heading">{obj.heading}</h1>
              <p>{obj.pera}</p>
              <div>
                <button onClick={() => console.log(obj.prev)}>click</button>
                <Button onClick={() => navigate(obj.prev)}>prev</Button>
                <Button onClick={() => navigate(obj.next)}>next</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>I have nothing</>
      )}
    </div>
  );
}

export default FIveOrgans;
