import { Button } from "../components/button";
import { IconButton } from "../components/iconbutton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSKilAssessment = () => {
    navigate("/assessment-intro");
  };

  const handleGoalTracking = () => {
    navigate("/");
  };

  const handleResources = () => {
    navigate("/");
  };

  return (
    <div className="bg-white">
      <div className="px-6 lg:px-8">
        <div className="mx-auto flex justify-center">
          <div className="mt-6 text-center w-2/3">
            <h1 className="text-3xl text-black">
              Overcome Imposter Syndrome & watch yourself Bloom
            </h1>
            <p className="text-lg mt-6">
              Imposter syndrome is like a cage that traps your potential; it
              convices you that you don&apos;t deserve your achievements, and as
              a result you shy away from new challenges and opportunities for
              growth.
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <div className="bg-white p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  <IconButton variant="purple" onPress={handleSKilAssessment}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </IconButton>
                </h2>
                <Button
                  className="text-gray-700"
                  variant="link"
                  onPress={handleSKilAssessment}
                >
                  Take a Skill Assessment
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  <IconButton variant="purple" onPress={handleGoalTracking}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      viewBox="0 0 24 24"
                      className="size-6"
                    >
                      <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                      <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 18c-4.337 0-8-3.663-8-8s3.663-8 8-8 8 3.663 8 8-3.663 8-8 8z" />
                      <path d="M12 10c-1.081 0-2 .919-2 2s.919 2 2 2 2-.919 2-2-.919-2-2-2z" />
                    </svg>
                  </IconButton>
                </h2>
                <Button
                  className="text-gray-700"
                  variant="link"
                  onPress={handleGoalTracking}
                >
                  Set & Accomplish Goals
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  <IconButton variant="purple" onPress={handleResources}>
                    <svg
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6"
                    >
                      <path
                        d="M44.1562 36.6562L34.3312 26.8313C32.9062 25.4063 30.5812 25.3313 29.0062 26.6063L25.1813 22.7812C29.5312 17.2312 29.1562 9.20625 24.0563 4.10625C18.5813 -1.36875 9.58125 -1.36875 4.10625 4.10625C-1.36875 9.58125 -1.36875 18.5813 4.10625 24.0563C6.88125 26.8313 10.4812 28.1813 14.0812 28.1813C17.1562 28.1813 20.2313 27.2063 22.7812 25.1813L26.6062 29.0063C25.2562 30.5813 25.3312 32.9062 26.8312 34.3313L36.6562 44.1562C37.4062 44.9062 38.4562 45.2812 39.4313 45.2812C40.4062 45.2812 41.4562 44.9062 42.2062 44.1562L44.1562 42.2063C45.6562 40.7063 45.6562 38.2313 44.1562 36.6562ZM6.43125 21.7313C2.23125 17.5312 2.23125 10.7063 6.43125 6.50625C8.53125 4.40625 11.3062 3.35625 14.0062 3.35625C16.7062 3.35625 19.4812 4.40625 21.5812 6.50625C25.7812 10.7063 25.7812 17.5312 21.5812 21.7313C17.4562 25.9312 10.6312 25.9312 6.43125 21.7313ZM41.7562 39.8813L39.8063 41.8313C39.5812 42.0563 39.2062 42.0563 38.9812 41.8313L29.1562 32.0063C28.9312 31.7813 28.9312 31.4062 29.1562 31.1813L31.1062 29.2313C31.1812 29.1563 31.3312 29.0813 31.4812 29.0813C31.6312 29.0813 31.7812 29.1563 31.8562 29.2313L41.6813 39.0563C41.9813 39.2812 41.9813 39.6563 41.7562 39.8813Z"
                        fill="black"
                      />
                      <path
                        d="M10.3314 13.1063H14.0064C14.9064 13.1063 15.7314 12.3562 15.7314 11.3812C15.7314 10.4062 14.9814 9.65625 14.0064 9.65625H10.3314C9.43145 9.65625 8.60645 10.4062 8.60645 11.3812C8.60645 12.3562 9.35645 13.1063 10.3314 13.1063Z"
                        fill="black"
                      />
                      <path
                        d="M17.9814 15.2812H10.3314C9.43145 15.2812 8.60645 16.0312 8.60645 17.0062C8.60645 17.9812 9.35645 18.7313 10.3314 18.7313H17.9814C18.8814 18.7313 19.7064 17.9812 19.7064 17.0062C19.7064 16.0312 18.8814 15.2812 17.9814 15.2812Z"
                        fill="black"
                      />
                    </svg>
                  </IconButton>
                </h2>
                <Button
                  className="text-gray-700"
                  variant="link"
                  onPress={handleResources}
                >
                  Explore <br /> Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
