import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Login } from "./pages/loginpage";
import { Register } from "./pages/registerPage";
import HomePage from "./layout/homepage";
import Workouts from "./pages/workouts";
import WorkoutDetail from "./pages/workoutDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:id" element={<WorkoutDetail />} />
      </Route>
    </Routes>
  );
}
