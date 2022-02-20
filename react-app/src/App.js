import React, { useState, useEffect } from "react";
import "./App.css";
import SignIn from "./Components/Auth/SignIn/SignIn";
import SignUp from "./Components/Auth/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./Components/Pages/Home";
import Tutorials from "./Components/Pages/Tutorials/Tutorials";
import FIveOrgans from "./Components/Pages/Tutorials/FIveOrgans";
import Pracrice from "./Components/Pages/Tutorials/Practice/Pracrice";
import Question from "./Components/Pages/Tutorials/Practice/Question";
function App() {
  const [user, loading, error] = useAuthState(auth);
  let eye = {
    imgLink:
      "https://pluspng.com/img-png/cartoon-kid-png-cartoon-person-exercising-1425.png",
    heading: "Eye",
    pera: `An eye is an organ responsible for the vision to detects visible
              images and most use more than any other sense. The light reflects
              off an object to the eye. The transparent outer layer of the eye
              called the cornea bends the light that passes through the hole of
              the pupil. The iris (which is the colored part of the eye) works
              like the shutter of a camera, retracting to shut out light or
              opening wider to let in more light. An eye translates light into
              image signals for the brain through the various parts like sclera,
              the cornea, anterior & posterior chambers, iris, pupil, lens,
              vitreous humor, retina, fovea, macula, and the ophthalmoscope.`,
    next: "/Touchtutorials",
    prev: "/",
  };
  let Touch = {
    imgLink:
      "https://pluspng.com/img-png/cartoon-kid-png-cartoon-person-exercising-1425.png",
    heading: "Touch",
    pera: `An eye is an organ responsible for the vision to detects visible
              images and most use more than any other sense. The light reflects
              off an object to the eye. The transparent outer layer of the eye
              called the cornea bends the light that passes through the hole of
              the pupil. The iris (which is the colored part of the eye) works
              like the shutter of a camera, retracting to shut out light or
              opening wider to let in more light. An eye translates light into
              image signals for the brain through the various parts like sclera,
              the cornea, anterior & posterior chambers, iris, pupil, lens,
              vitreous humor, retina, fovea, macula, and the ophthalmoscope.`,

    next: "/Smelltutorials",
    prev: "/Visiontutorial",
  };
  let Smell = {
    imgLink:
      "https://pluspng.com/img-png/cartoon-kid-png-cartoon-person-exercising-1425.png",
    heading: "Smell",
    pera: `An eye is an organ responsible for the vision to detects visible
              images and most use more than any other sense. The light reflects
              off an object to the eye. The transparent outer layer of the eye
              called the cornea bends the light that passes through the hole of
              the pupil. The iris (which is the colored part of the eye) works
              like the shutter of a camera, retracting to shut out light or
              opening wider to let in more light. An eye translates light into
              image signals for the brain through the various parts like sclera,
              the cornea, anterior & posterior chambers, iris, pupil, lens,
              vitreous humor, retina, fovea, macula, and the ophthalmoscope.`,
    next: "/tastetutorial",
    prev: "/Touchtutorials",
  };
  let Taste = {
    imgLink:
      "https://pluspng.com/img-png/cartoon-kid-png-cartoon-person-exercising-1425.png",
    heading: "Taste",
    pera: `An eye is an organ responsible for the vision to detects visible
              images and most use more than any other sense. The light reflects
              off an object to the eye. The transparent outer layer of the eye
              called the cornea bends the light that passes through the hole of
              the pupil. The iris (which is the colored part of the eye) works
              like the shutter of a camera, retracting to shut out light or
              opening wider to let in more light. An eye translates light into
              image signals for the brain through the various parts like sclera,
              the cornea, anterior & posterior chambers, iris, pupil, lens,
              vitreous humor, retina, fovea, macula, and the ophthalmoscope.`,
    next: "/hearingtutorial",
    prev: "/Smelltutorials",
  };
  let Hearing = {
    imgLink:
      "https://pluspng.com/img-png/cartoon-kid-png-cartoon-person-exercising-1425.png",
    heading: "Hearing",
    pera: `An eye is an organ responsible for the vision to detects visible
              images and most use more than any other sense. The light reflects
              off an object to the eye. The transparent outer layer of the eye
              called the cornea bends the light that passes through the hole of
              the pupil. The iris (which is the colored part of the eye) works
              like the shutter of a camera, retracting to shut out light or
              opening wider to let in more light. An eye translates light into
              image signals for the brain through the various parts like sclera,
              the cornea, anterior & posterior chambers, iris, pupil, lens,
              vitreous humor, retina, fovea, macula, and the ophthalmoscope.`,
    next: "/practice",
    prev: "/tastetutorial",
  };
  return (
    <>
    {
        user!=null?(<SignIn/>):(<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Visiontutorial" element={<FIveOrgans obj={eye} />} />
        <Route
          exact
          path="Touchtutorials"
          element={<FIveOrgans obj={Touch} />}
        />
        <Route
          exact
          path="Smelltutorials"
          element={<FIveOrgans obj={Smell} />}
        />
        <Route
          exact
          path="tastetutorial"
          element={<FIveOrgans obj={Taste} />}
        />
        <Route
          exact
          path="hearingtutorial"
          element={<FIveOrgans obj={Hearing} />}
        />
        <Route exact path="practice" element={<Pracrice />}>
          <Route
            exact
            path="1"
            element={
              <Question
                heading="what is the name of organ use to smell things"
                ans="nose"
                id={1}
              />
            }
          />
          <Route
            exact
            path="2"
            element={
              <Question
                heading="what is the name of organ use to see things"
                ans="eye"
                id={2}
              />
            }
          />
          <Route
            exact
            path="3"
            element={
              <Question
                heading="what is the name of organ use to test flavour"
                ans="toungue"
                id={3}
              />
            }
          />
          <Route
            exact
            path="4"
            element={
              <Question
                heading="what is the name of organ use to hear sound"
                ans="ear"
                id={4}
              />
            }
          />
          <Route
            exact
            path="5"
            element={<Question heading="Question5" ans="hand" id={5} />}
          />
        </Route>
        <Route exact path="SignIn" element={<SignIn />} />
        <Route exact path="SignUp" element={<SignUp />} />
        <Route exact path="tutorials" element={<Tutorials />}>
          <Route exact path="karan" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>)
    }
    </>
    
  );
}

export default App;
