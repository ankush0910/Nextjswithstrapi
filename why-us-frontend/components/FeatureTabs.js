// export default function FeatureTabs({ features, activeIndex, onTabClick }) {
//     return (
//       <div className="flex flex-col gap-4">
//         {features.map((item, index) => {
//           const isActive = index === activeIndex;
//           return (
//             <button
//               key={item.id}
//               onClick={() => onTabClick(index)}
//               className={`flex items-center justify-between w-[250px] px-4 py-3 rounded-full transition \${isActive
//                 ? "bg-[#924e61] text-white"
//                 : "bg-gray-200 text-gray-800"}`}
//             >
//               <span className="text-lg">{item.title}</span>
//               <span>&lt;</span>
//             </button>
//           );
//         })}
//       </div>
//     );
//   }



  export default function FeatureTabs({ features, activeIndex, onTabClick }) {
    return (
      <div className="flex flex-col gap-4">
        {features.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => onTabClick(index)}
              className={`flex items-center justify-between w-[350px] px-4 py-3 rounded-full transition-all ${
                isActive ? "bg-[#924e61] text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              <span>&lt;</span>
              <span className="text-lg">{item.title}</span>
            </button>
          );
        })}
      </div>
    );
  }
  