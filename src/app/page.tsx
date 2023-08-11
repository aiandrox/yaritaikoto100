export default function Home() {
  const items = [
    {
      value: "やりたいこと1",
      isDone: false,
    },
    {
      value: "やりたいこと2",
      isDone: true,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
    {
      value: "",
      isDone: false,
    },
  ];

  return (
    <main
      className="flex min-h-screen flex-col items-center p-24"
      style={{ backgroundColor: "#ffa2ab" }}
    >
      <h1 className="text-3xl font-bold text-white mb-4">やりたいことリスト</h1>
      <div className="flex flex-col items-center justify-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-center mt-2">
            <div className="relative w-12 text-2xl font-bold text-white">
              {(i + 1).toString().padStart(3, "0")}
              {item.isDone && (
                <div className="absolute bottom-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="ml-4 text-l">
              <input
                type="text"
                className="w-96 p-2 text-gray-700 rounded-md focus:outline-none"
                value={item.value}
              />
            </div>
            <div className="ml-4">
              {/* ハンバーガーSVG */}
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
