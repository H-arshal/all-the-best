// import { useMemo } from "react";

// function FloatingDecor() {
//   const elements = useMemo(() => {
//     const decorIcons = [
//       "🧪", "🌿", "🧘‍♀️", "💊", "🍵",
//       "🌱", "🏥", "🧴", "🧬", "🩺", "🕉️"
//     ];

//     return Array.from({ length: 80 }).map((_, i) => ({
//       id: i,
//       icon: decorIcons[Math.floor(Math.random() * decorIcons.length)],
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * -100}vh`, // START from random height above screen
//       animationDelay: `${Math.random() * 10}s`,
//       animationDuration: `${Math.random() * 5 + 10}s`, // 10–15s
//       fontSize: `${Math.random() * 12 + 12}px`,
//     }));
//   }, []);

//   return (
//     <div className="floating-container">
//       {elements.map((el) => (
//         <div
//           key={el.id}
//           className="sparkle"
//           style={{
//             left: el.left,
//             top: el.top, // random top starting point
//             animationDelay: el.animationDelay,
//             animationDuration: el.animationDuration,
//             fontSize: el.fontSize,
//           }}
//         >
//           {el.icon}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FloatingDecor;

import { useEffect, useState } from "react";

function FloatingDecor() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const decorIcons = [
      "🧪", "🌿", "🧘‍♀️", "💊",
      "🌱", "🏥", "🧴", "🧬", "🩺", "🕉️"
    ];

    const generatedElements = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      icon: decorIcons[Math.floor(Math.random() * decorIcons.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * -100}vh`, // Random top starting point
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${Math.random() * 5 + 10}s`, // 10–15s
      fontSize: `${Math.random() * 12 + 15}px`,
    }));

    setElements(generatedElements);
  }, []);

  return (
    <div className="floating-container">
      {elements.map((el) => (
        <div
          key={el.id}
          className="sparkle"
          style={{
            left: el.left,
            top: el.top,
            animationDelay: el.animationDelay,
            animationDuration: el.animationDuration,
            fontSize: el.fontSize,
          }}
        >
          {el.icon}
        </div>
      ))}
    </div>
  );
}

export default FloatingDecor;
