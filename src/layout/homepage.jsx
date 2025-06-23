import { useEffect, useState } from "react";
import warmUp from "../videos/warmUp.mp4";
//import workOut from "../videos/workOut.mp4";
//main app component
export default function HomePage() {
  const [secondVideoHidden, setSecondVideoHidden] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      setSecondVideoHidden(scrollTop > windowHeight / 2);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    //first video  with turnary element to hide it if preson scrolled
    <div className="videoColage">
      <section
        className={`video-section ${!secondVideoHidden ? "visible" : ""}`}
      >
        <video className="warmUpVid" autoPlay loop muted>
          <source src={warmUp} type="video/mp4" />
        </video>
        <div className="firstVideoButton">
          <h2 className="firstH2text">Somthing about workout</h2>
          <button className="firstbutton">my workouts</button>
        </div>
      </section>

      {/* second video with rutnary element to hide it if person scrolled */}
      <section
        className={`video-section ${secondVideoHidden ? "visible" : ""}`}
      >
        {/* <video className="workOutVid" autoPlay loop muted>
          <source src={workOut} type="video/mp4" />
          
        </video>*/}

        <img
          src="https://drive.google.com/u/0/drive-viewer/AKGpihZFY1Q3C2RJKu5MB1kaExc2W-Pz7u6WaBv53GFwYZgAJv5bKqrmN9Fj219uslDKyl3dJgc6P0BJDP0ulDQjtLY1atvF_ci6wOE=s2560"
          alt="img"
        />
        <div className="secondVideoButton">
          <h2 className="secondH2text">another thing about workout</h2>
          <button className="seconButton">Register</button>
        </div>
      </section>
    </div>
  );
}
