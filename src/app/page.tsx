import { YaritaikotoListPage } from "./yaritaikotoList";
import Footer from "./footer";

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
      <Footer />
    </>
  );
}
