import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        className="max-w-7xl mx-auto px-8 sm:px-16 w-screen"
        id="mainContent"
      >
        <div className="flex flex-col items-center h-full gap-10 justify-center">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Learning Path Generator
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl">
          This is an AI-powered financial learning path generator designed to suggest the best learning paths to enhance your financial knowledge and skills based on your current understanding. It will generate personalized financial learning paths, covering topics like investing, budgeting, financial planning, and more.
          </p>

          <Link
            href="/getting-started"
            className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
          >
            Lets Go!
          </Link>

          
        </div>
      </div>
    </main>
  );
}
