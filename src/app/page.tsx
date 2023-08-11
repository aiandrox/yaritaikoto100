import Row from "./components/row";

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

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center p-24"
        style={{ backgroundColor: "#ffa2ab" }}
      >
        <h1 className="text-3xl font-bold text-white mb-4">やりたいことリスト</h1>
        <div className="flex flex-col items-center justify-center">
          {items.map((item, i) => (
            <Row key={i} number={i + 1} item={item} />
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-white">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
