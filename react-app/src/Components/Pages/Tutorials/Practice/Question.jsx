import React, { useState } from "react";
import "./Ouestion.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// /workspace/Five-SenceOrgans/react-app/src/Components/Pages/Tutorials/Practice/Ouestion.scss
function Question({ heading, ans, id }) {
  const navigate = useNavigate();
  let listObj = [
    {
      img: "https://openclipart.org/image/800px/svg_to_png/64135/big-nosed-man.png",
      alt: "Nose-logo",
      text: "Nose",
      id: "1",
    },
    {
      img: "http://www.clker.com/cliparts/M/6/O/D/3/J/hand-wave-hi.png",
      alt: "Hand-logo",
      text: "Hand",
      id: "2",
    },
    {
      img: "https://www.freepnglogos.com/uploads/tongue-png/tongue-trinetra-about-indian-symbols-signs-patterns-16.png",
      alt: "tongue-logo",
      text: "tongue",
      id: "3",
    },
    {
      img: "https://www.jing.fm/clipimg/full/151-1511429_anime-eye-png-animated-blinking-eye-png.png",
      alt: "Eye-logo",
      text: "Eye",
      id: "4",
    },
    {
      img: "https://clipartion.com/wp-content/uploads/2015/10/left-big-ears-clipart.png",
      alt: "Ear-logo",
      text: "Ear",
      id: "5",
    },
  ];
  const [myans, setmyans] = useState("");
  const [listActive, setActive] = useState("");
  const [isanswnerWright, setisanswnerWrightt] = useState(false);
  const handelchecking = () => {
    let smallans = myans.toLocaleLowerCase();
    if (ans == smallans) {
      setisanswnerWrightt(true);
      console.log("correct answer");
      alert("your answer is right");
    } else {
      // prompt("your answer is wrong please try again ")
      alert("your answer is wrong please try again ");
    }
    console.log(ans, smallans);
  };
  return (
    <div className="Question-main">
      <h1>{heading}</h1>
      <div className="drag">
        <ul>
          {listObj.map((obj) => (
            <>
              <li
                onClick={() => {
                  setmyans(obj.text);
                  setActive(obj.text);
                }}
                className={listActive === obj.text ? "active" : ""}
              >
                <div className="img" id={setActive}>
                  <img src={obj.img} alt={obj.alt} />
                </div>
                {obj.text}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="drop">drop your message here</div>
      <Button onClick={() => handelchecking()}>Submit</Button>
      <Button onClick={() => navigate(`/practice/${((id) % 5) + 1}`)}>
        Next
      </Button>
    </div>
  );
}

export default Question;
