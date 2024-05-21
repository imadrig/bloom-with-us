import { Button } from "../components/button";
import { Link } from "react-router-dom";

export default function AssessmentIntro() {
  function handleNextPressed() {
    console.log("Button pressed");
  }

  return (
    <div className="flex flex-col p-20">
      <h1 className="text-3xl text-start pb-8">Hello, Bloom with Us!</h1>
      <p className="text-start pb-8">
        We’re here to help you advance your career goals. Start by taking our
        skills assessment to see what skills you already possess and what skills
        we can help you improve upon.
      </p>
      <Link to={"/customer-success-manager"}>
        <Button
          variant="gray"
          className="w-20 self-center"
          onPress={handleNextPressed}
        >
          {" "}
          Next{" "}
        </Button>
      </Link>
    </div>
  );
}
