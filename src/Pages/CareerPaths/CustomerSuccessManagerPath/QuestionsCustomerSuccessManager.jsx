import skillsAndQuestions from "../../../data/CareerPathSkills/customerSuccessManagerSkills.json";
import PropTypes from "prop-types";

export default function QuestionsCustomerSuccessManager({ currentSkill }) {
  //Access the skill the user is seeing
  const currentSkillDisplaying = skillsAndQuestions[currentSkill];

  return (
    <div className="pt-6 w-full">
      <div className="bg-white p-6 w-full">
        <h2 className="">
          Select yes or no based on whether you believe you exemplify this
          skill.
        </h2>

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          {currentSkillDisplaying.skill}
        </h2>

        <p className="text-gray-700 italic">
          {currentSkillDisplaying.skillValidationQuestion}
        </p>
      </div>
    </div>
  );
}

QuestionsCustomerSuccessManager.propTypes = {
  currentSkill: PropTypes.number.isRequired,
};
