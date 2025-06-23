import {useState, useEffect} from "react";
import {getWorkoutByid} from "../api/workout";
import {useParams} from "react-router";
import { Link } from "react-router";
const VideoFrame = ({ videoUrl }) => {
  return (
    <div className="video-frame">
      <iframe
        width=
        height=
        src={videoUrl}
        title="Workout Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
const Workout = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const data = await getWorkoutByid(id);
        setWorkout(data);
      } catch (err) {
        setError("Failed to fetch workout details.");
      }
    };
    fetchWorkout();
  }, [id]);
  if (error) {
    return <div>{error}</div>;
  }
  if (!workout) {
    return <div>Your workout</div>;
  }
  return (
    <div className="workout-details">
      <h1>{workout.name}</h1>
      <VideoFrame videoUrl={workout.videoUrl} />
      <p>{workout.description}</p>
      <Link to="/workouts">Back to Workouts</Link>
    </div>
  );
}
export const WorkoutsById = async (id) => {
    try {
        const response = await getWorkoutByid(id);
        return response;
    } catch (error) {
        console.error("Error fetching workout by ID:", error);
        throw error;
    }
};
