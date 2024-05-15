import { Button } from "../components/button";

export default function AssessmentIntro() {
  return (
    <div className="flex flex-col p-20">
      <h1 className="text-3xl text-start pb-8">Hello, Bloom with Us!</h1>
      <p className="text-start pb-8">
        We’re here to help you advance your career goals. Start by taking our
        skills assessment to see what skills you already possess and what skills
        we can help you improve upon.
      </p>
      <Button variant="gray" className="w-20 self-center">
        {" "}
        Next{" "}
      </Button>
    </div>
  );
}
