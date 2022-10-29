import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//import components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="homee">
      <div className="containerEffect">
        <div className="bubbles">
          <span className="spanEffect" style={{ "--ii": 11 }}></span>
          <span className="spanEffect" style={{ "--ii": 12 }}></span>
          <span className="spanEffect" style={{ "--ii": 24 }}></span>
          <span className="spanEffect" style={{ "--ii": 11 }}></span>
          <span className="spanEffect" style={{ "--ii": 14 }}></span>
          <span className="spanEffect" style={{ "--ii": 23 }}></span>
          <span className="spanEffect" style={{ "--ii": 11 }}></span>
          <span className="spanEffect" style={{ "--ii": 18 }}></span>
          <span className="spanEffect" style={{ "--ii": 16 }}></span>
          <span className="spanEffect" style={{ "--ii": 19 }}></span>
          <span className="spanEffect" style={{ "--ii": 20 }}></span>
          <span className="spanEffect" style={{ "--ii": 22 }}></span>
          <span className="spanEffect" style={{ "--ii": 25 }}></span>
          <span className="spanEffect" style={{ "--ii": 21 }}></span>
          <span className="spanEffect" style={{ "--ii": 18 }}></span>
          <span className="spanEffect" style={{ "--ii": 15 }}></span>
          <span className="spanEffect" style={{ "--ii": 13 }}></span>
          <span className="spanEffect" style={{ "--ii": 26 }}></span>
          <span className="spanEffect" style={{ "--ii": 17 }}></span>
          <span className="spanEffect" style={{ "--ii": 13 }}></span>
          <span className="spanEffect" style={{ "--ii": 28 }}></span>
        </div>

      </div>
        <div className="home">
          <div className="workouts">
            {workouts &&
              workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
              ))}
          </div>
          <WorkoutForm />
        </div>
    </div>
  );
};
export default Home;
