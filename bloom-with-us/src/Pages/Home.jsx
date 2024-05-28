import { Button } from "../components/button";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="px-6 lg:px-8">
        <div className="mx-auto flex justify-center">
          <div className="mt-6 text-center w-2/3">
            <h1 className="text-3xl text-black">
              Imposter syndrome is not a diagnosable condition, yet it often
              goes hand-in-hand with anxiety, depression, and career burnout.
              Extremely common and may impair professional performance.
            </h1>
            <p className="text-lg font-bold mt-6">
              We’re here to help you navigate
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <div className="bg-white p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  <Button variant="primaryBlue" className="w-6">
                    1
                  </Button>
                </h2>
                <p className="text-gray-700">Take a Skill Assessment</p>
              </div>
              <div className="bg-white p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  <Button variant="primaryBlue" className="w-6">
                    2
                  </Button>
                </h2>
                <p className="text-gray-700">Set & Accomplish Goals</p>
              </div>
              <div className="bg-white p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  <Button variant="primaryBlue" className="w-6">
                    3
                  </Button>
                </h2>
                <p className="text-gray-700">
                  Explore <br /> Resources
                </p>
              </div>
            </div>
            <Button variant="primaryYellow" className="h-12 w-96 mt-6">
              Learn more about Imposter Syndrome
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
