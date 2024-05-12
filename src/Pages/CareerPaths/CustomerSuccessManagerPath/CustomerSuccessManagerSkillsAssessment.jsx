import { useState } from "react";
import SkillsQuestions from "./QuestionsCustomerSuccessManager";

export default function CustomerSuccessManagerSkillsAssessment() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const handleMoveToNextSkill = () => {
    setCurrentSkill(currentSkill + 1);
  };

  return (
    <div>
      <SkillsQuestions currentSkill={currentSkill} />
      <button
        className="bg-gray-300 m-6 p-2 rounded"
        onClick={handleMoveToNextSkill}
      >
        Yes
      </button>
      <button
        className="bg-gray-300 m-6 p-2 rounded"
        onClick={handleMoveToNextSkill}
      >
        No
      </button>
    </div>
  );
}
