import { useState } from "react";
import { Button } from "../../components/button";
import QuestionsSkillAssessment from "./QuestionsSkillAssessment";

export default function SkillsAssessment() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [currentSkillDetails, setCurrentSkillDetails] = useState(null);

  const handleMoveToNextSkill = (answer) => {
    const yesAnswers = JSON.parse(localStorage.getItem("yesAnswers")) || [];
    const noAnswers = JSON.parse(localStorage.getItem("noAnswers")) || [];

    if (currentSkillDetails) {
      answer === "Yes"
        ? yesAnswers.push(currentSkillDetails)
        : noAnswers.push(currentSkillDetails);

      localStorage.setItem("yesAnswers", JSON.stringify(yesAnswers));
      localStorage.setItem("noAnswers", JSON.stringify(noAnswers));
    }

    setCurrentSkill(currentSkill + 1);
  };

  return (
    <div className="flex flex-col mt-6">
      <div>
        <QuestionsSkillAssessment
          currentSkill={currentSkill}
          onSkillLoad={setCurrentSkillDetails}
        />
      </div>

      <div>
        <Button
          variant="primaryBlue"
          onClick={() => handleMoveToNextSkill("Yes")}
        >
          Yes
        </Button>
        <Button
          variant="primaryYellow"
          onClick={() => handleMoveToNextSkill("No")}
        >
          No
        </Button>
      </div>
    </div>
  );
}
