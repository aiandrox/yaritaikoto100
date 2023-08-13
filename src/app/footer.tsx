"use client";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white border border-t-1">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              マイリスト
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000/auth/google_oauth2"
              className="mr-4 hover:underline md:mr-6"
            >
              Googleログイン
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
