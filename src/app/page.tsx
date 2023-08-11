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
  );
}
