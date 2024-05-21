import { useState } from "react";
import { Button } from "../../../components/button";
import SkillsQuestions from "./QuestionsCustomerSuccessManager";

export default function CustomerSuccessManagerSkillsAssessment() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const handleMoveToNextSkill = () => {
    setCurrentSkill(currentSkill + 1);
  };

  return (
    <div>
      <SkillsQuestions currentSkill={currentSkill} />

      <div>
        <Button variant="primaryBlue" onClick={handleMoveToNextSkill}>
          Yes
        </Button>
        <Button variant="primaryYellow" onClick={handleMoveToNextSkill}>
          No
        </Button>
      </div>
    </div>
  );
}
