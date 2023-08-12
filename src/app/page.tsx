import { YaritaikotoListPage } from "./yaritaikotoList";

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col items-center min-h-screen"
        style={{ backgroundColor: "#ffa2ab" }}
      >
        <div className="p-2 container max-w-[500px]">
          <YaritaikotoListPage />
        </div>
        <div className="h-16" />
      </main>

      <footer className="fixed bottom-0 w-full bg-white border border-t-1">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                マイリスト
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                他のリストを見る
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
