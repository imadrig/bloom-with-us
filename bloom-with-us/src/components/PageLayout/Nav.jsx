export default function Nav() {
  return (
    <nav className="bg-gray-300 shadow shadow-gray-300 w-full px-8 md:px-2">
      <div className="md:h-16 h-28 mx-auto container flex items-center justify-center">
        <div className="text-gray-500 md:order-1 flex items-center justify-center w-full">
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
        </div>
      </div>
      <div className="text-right">
        <a href="/">Home</a>
      </div>
      <div className="text-right">
        <a href="/customer-success-manager">Customer Success Manager Path</a>
      </div>
    </nav>
  );
}
