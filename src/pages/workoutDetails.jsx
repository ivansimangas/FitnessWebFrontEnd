// src/pages/workoutDetail.jsx
import { useState, useEffect } from "react";
import { addWorkout, getWorkoutsById } from "../api/workout";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const WorkoutDetail = () => {
  const { token } = useAuth();
  const [workout, setWorkout] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const callWorkout = async () => {
      const result = await getWorkoutsById(id);
      setWorkout(result);
    };
    callWorkout();
  }, [id]);

  const handleAddWorkout = async () => {
    try {
      await addWorkout(id, token);
    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };

  if (!workout) return <div>Loading workout...</div>;

  return (
    <div>
      <h2>{workout.name}</h2>
      <iframe
        width="560"
        height="315"
        src={workout.videoUrl}
        title={workout.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <h2>Description of Workout</h2>
        <p>{workout.description}</p>
      </div>
      <button onClick={handleAddWorkout}>Add Workout</button>
    </div>
  );
};

export default WorkoutDetail;
