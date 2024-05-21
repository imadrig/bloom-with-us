export default function Nav() {
  return (
    <nav
      className="bg-blue-400 shadow shadow-gray-300 w-100 px-8 md:px-auto"
      style={{
        borderBottom: "24px solid #FFCF72",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
    >
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-black md:order-1">
          <a href="/">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71l-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
              </g>
            </svg>
          </a>
        </div>
        <div className="text-black order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 text-black"></li>
            <li className="md:px-4 md:py-2 hover:text-white">
              <a href="#">About Us</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-white">
              <a href="/assessment-intro">Skill Assessment Tools</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-white">
              <a href="#">Goal/Progress Tracking</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-white">
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
