"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function UserKnowledge() {
  const router = useRouter();
  const languageInputRef = useRef(null);
  const frameworkInputRef = useRef(null);

  const inputClass =
    "w-full p-4 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white border-2 border-gray-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-colors";

  function handleClick() {
    sessionStorage.setItem(
      "userKnowledge",
      JSON.stringify({
        lang: languageInputRef.current?.value,
        framework: frameworkInputRef.current?.value,
      })
    );

    router.push("/result");
  }

  return (
    <main
      className=" max-w-7xl mx-auto px-8 sm:px-16 w-screen"
      id="mainContent"
    >
      <div className="flex flex-col items-center h-full gap-10 justify-center">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        Share Your Financial Knowledge
        </h1>

        <div className="flex flex-col max-w-3xl w-full">
          <label className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-2">
          What financial topics would you like to learn??
          </label>
          <input
            ref={languageInputRef}
            type="text"
            className={inputClass}
            placeholder="Separated by comma (e.g., Budgeting, Stock Market, Tax Planning)"
          />

          <label className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-2 mt-6">
            {/* What frameworks/libraries you know?{" "} */}
            What existing knowledge you have?{" "}
            <i className=" font-normal">(if any)</i>
          </label>
          <input
            ref={frameworkInputRef}
            type="text"
            className={inputClass}
            placeholder="Briefly describe what topics are you familiar with"
          />
        </div>

        <button
          onClick={handleClick}
          className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
        >
          Get Path
        </button>
      </div>
    </main>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { useRef } from "react";

// export default function UserKnowledge() {
//   const router = useRouter();
//   const topicsInputRef = useRef(null);
//   const experienceInputRef = useRef(null);

//   const inputClass =
//     "w-full p-4 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white border-2 border-gray-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-colors";

//   function handleClick() {
//     sessionStorage.setItem(
//       "userKnowledge",
//       JSON.stringify({
//         topics: topicsInputRef.current?.value,
//         experience: experienceInputRef.current?.value,
//       })
//     );

//     router.push("/result");
//   }

//   return (
//     <main
//       className=" max-w-7xl mx-auto px-8 sm:px-16 w-screen"
//       id="mainContent"
//     >
//       <div className="flex flex-col items-center h-full gap-10 justify-center">
//         <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
//           Share Your Financial Knowledge
//         </h1>

//         <div className="flex flex-col max-w-3xl w-full">
//           <label className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-2">
//             What financial topics are you familiar with?
//           </label>
//           <input
//             ref={topicsInputRef}
//             type="text"
//             className={inputClass}
//             placeholder="Separated by comma (e.g., Budgeting, Stock Market, Tax Planning)"
//           />

//           <label className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-2 mt-6">
//             What is your level of experience in these areas?{" "}
//             <i className="font-normal">(e.g., Beginner, Intermediate, Advanced)</i>
//           </label>
//           <input
//             ref={experienceInputRef}
//             type="text"
//             className={inputClass}
//             placeholder="Briefly describe your experience (e.g., Beginner in Investing, Advanced in Budgeting)"
//           />
//         </div>

//         <button
//           onClick={handleClick}
//           className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
//         >
//           Get Path
//         </button>
//       </div>
//     </main>
//   );
// }
