import { Button } from "../components/button";
import { useEffect } from "react";
import goals from "../data/Goals/GoalsList.json";
import { useNavigate } from "react-router-dom";

export default function GoalsIntro() {
  const navigate = useNavigate();

  useEffect(() => {
    const goal = localStorage.getItem("selectedGoal");
    if (goal) {
      console.log("redirect");
      navigate("/");
    }
  }, [navigate]);

  const handleGoalPressed = (itemId) => {
    //console.log(itemId);
    localStorage.setItem("selectedGoal", itemId);
  };

  const handleContPressed = () => {
    console.log("Button pressed");
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 p-20">
      <h1 className="text-2xl text-start p-1 self-center">Set your Goal</h1>
      <div className="self-center col-span-1 row-start-2 row-end-2 p-1">
        <p className="text-base text-start pb-8">
          What goals do you want to achieve?
        </p>
        <ul>
          {goals.map((item) => {
            return (
              <Button
                key={item.id}
                variant="secondaryDarkPurple"
                size="wide"
                onPress={() => handleGoalPressed(item.id)}
              >
                {item.goal}
              </Button>
            );
          })}
        </ul>
        <Button
          variant="primaryLightPurple"
          size="wide"
          onPress={handleContPressed}
        >
          {" "}
          Continue{" "}
        </Button>
      </div>
      <div className="flex row-start-2 row-end-2 p-2">
        <h1 className="text-xl pb-1 self-center">
          {" "}
          In a world where self-dount and fear often stand as barriers to
          success, we are here to offer a guiding light.{" "}
        </h1>
      </div>
    </div>
  );
}
