const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        className="animate-spin h-10 w-10 text-primary mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a3.999 3.999 0 10-7.96 0H6v5.291zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4z"
        ></path>
      </svg>
      <p className="text-gray-600">Loading...</p>
    </div>
  );
};

export default Loading;
