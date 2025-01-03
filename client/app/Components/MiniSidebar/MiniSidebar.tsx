// "use client";
// import IconCheck from "@/public/icons/IconCheck";
// import IconDeleteAll from "@/public/icons/IconDeleteAll";
// import IconFileCheck from "@/public/icons/IconFileCheck";
// import IconGrid from "@/public/icons/IconGrid";
// import IconStopwatch from "@/public/icons/IconStopwatch";
// import { link } from "fs";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// function MiniSidebar() {
//   const pathname = usePathname();

//   const getStrokeColor = (link: string) => {
//     return pathname === link ? "#3aafae" : "#71717a";
//   };

//   const navItems = [
//     {
//       icon: <IconGrid strokeColor={getStrokeColor("/")} />,
//       title: "All",
//       link: "/",
//     },
//     {
//       icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
//       title: "Completed",
//       link: "/completed",
//     },
//     {
//       icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
//       title: "Pending",
//       link: "/pending",
//     },
//     {
//       icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
//       title: "Overdue",
//       link: "/overdue",
//     },
//   ];
//   return (
//     <div className="basis-[5rem] flex flex-col bg-[#f9f9f9]">
//       <div className="flex items-center justify-center h-[5rem]">
//         <Image src="/logo.png" width={28} height={28} alt="logo" />
//       </div>

//       <div className="mt-8 flex-1 flex flex-col items-center justify-between">
//         <ul className="flex flex-col gap-10">
//           {navItems.map((item, index) => (
//             <li key={index} className="relative group">
//               <Link href={item.link}>{item.icon}</Link>

//               {/* Hover Tooltip */}
//               <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {item.title}
//               </span>
//             </li>
//           ))}
//         </ul>

//         <div className="mb-[1.5rem]">
//           <button className="w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31]  p-2 rounded-full">
//             <IconDeleteAll strokeColor="#EB4E31" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MiniSidebar;

"use client";
import IconCheck from "@/public/icons/IconCheck";
import IconDeleteAll from "@/public/icons/IconDeleteAll";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconGrid from "@/public/icons/IconGrid";
import IconStopwatch from "@/public/icons/IconStopwatch";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MiniSidebar() {
  const pathname = usePathname();

  const getStrokeColor = (link: string): string => {
    return pathname === link ? "#3aafae" : "#71717a";
  };
  

  const navItems = [
    {
      icon: <IconGrid strokeColor={getStrokeColor("/")} />,
      title: "All",
      link: "/",
    },
    {
      icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
      title: "Completed",
      link: "/completed",
    },
    {
      icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
      title: "Pending",
      link: "/pending",
    },
    {
      icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
      title: "Overdue",
      link: "/overdue",
    },
  ];

  return (
    <div className="basis-[5rem] flex flex-col bg-[#f9f9f9]">
      <div className="flex items-center justify-center h-[5rem]">
        <Image src="/logo.png" width={28} height={28} alt="logo" />
      </div>

      <div className="mt-8 flex-1 flex flex-col items-center justify-between">
        <ul className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.link}>{item.icon}</Link>

              {/* Hover Tooltip */}
              <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mb-[1.5rem] flex flex-col items-center">
          {/* Delete All Button */}
          <button className="w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31] p-2 rounded-full">
            <IconDeleteAll strokeColor="#EB4E31" />
          </button>

          {/* Personal Assistant Button */}
          <button
            className="mt-8 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg animate-gemini"
            onClick={() => {
              window.location.href = " http://localhost:8501"; // Replace with the URL of your hosted App.py
            }}
          >
            <span className="text-white text-sm font-medium">SAM</span>
          </button>
        </div>
      </div>

      {/* CSS for Gemini Icon Animation */}
      <style jsx>{`
        @keyframes gemini-spin {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-gemini {
          animation: gemini-spin 2s infinite linear;
        }
      `}</style>
    </div>
  );
}

export default MiniSidebar;

