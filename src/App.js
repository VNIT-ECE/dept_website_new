import React, {useEffect, useState} from "react";
import Resources from "./Resources/Resources";
import Hero from "./Top/Hero";
import Nav from "./Top/Nav";
import Footer from "./Bottom/Footer";
import Row from "./components/Row/Row";
import TimeTable from "./components/TimeTable/TimeTable";
import './App.css';
import CGPA from "./CGPA/cgpa";
import Blog from "./Bottom/Blog";
import Contact from "./Bottom/Contact";
import Gallery from "./Gallery/Gallery";
import WebTeam from "./WebTeam";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {

  const [currSem, setCurrSem] = useState(5);
  const [loader, setLoader] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    }, 3000);

  }, []);


  return (
    <Router>
      {loader? 
        <div className="flex w-screen h-screen justify-center items-center">
          <div className="">
            <div className="animate-spin">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              {/* Please wait...loading */}
            </div>
          </div>
        </div>
      :
        <div id="top" className="max-w-6xl mx-auto relative">
          <Nav currSem={currSem} setCurrSem={setCurrSem} />
          <Switch>
            <Route exact path="/">
              <Hero sem={currSem} />
              <div className="App__Container">
                <Row sem={currSem} />
                <TimeTable sem={currSem} />
              </div>
              <Resources sem={currSem} />
              <CGPA sem={currSem} />
              <Blog />
              <Contact />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/webteam">
              <WebTeam />
            </Route>
          </Switch>
          <Footer />
        </div>
      }
      
      </Router>
  );
}

export default App;
