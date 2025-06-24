import "../styles/workouts.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import chest from "../imgSource/chest.png";
import arms from "../imgSource/arms.png";
import back from "../imgSource/back.png";
import legs from "../imgSource/legs.png";
import shoulders from "../imgSource/shoulders.png";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("http://localhost:5432/api/workouts");
        setWorkouts(response.data);
      } catch (error) {
        console.error("Failed to fetch workouts", error);
      }
    };
    fetchWorkouts();
  }, []);

  const onImgClick = (id) => {
    navigate(`/workouts/${id}`);
  };

  return (
    <div className="workouts">
      <h1>All Workouts</h1>

      <div className="workout-images">
        <div className="workout-image" onClick={() => onImgClick(1)}>
          <img src={chest} alt="Chest Workout" />
          <h2>Chest</h2>
        </div>
        <div className="workout-image" onClick={() => onImgClick(2)}>
          <img src={arms} alt="Arms Workout" />
          <h2>Arms</h2>
        </div>
        <div className="workout-image" onClick={() => onImgClick(3)}>
          <img src={back} alt="Back Workout" />
          <h2>Back</h2>
        </div>
        <div className="workout-image" onClick={() => onImgClick(4)}>
          <img src={legs} alt="Legs Workout" />
          <h2>Legs</h2>
        </div>
        <div className="workout-image" onClick={() => onImgClick(5)}>
          <img src={shoulders} alt="Shoulders Workout" />
          <h2>Shoulders</h2>
        </div>
      </div>

      <ul className="workout-list">
        {workouts.map((workout) => (
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
