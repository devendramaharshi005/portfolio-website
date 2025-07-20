// type Visitor = {
//   id: string;
//   name: string;
//   email: string;
//   message: string;
//   visited_at: Date;
// };

// export default async function VisitorPAGE() {
//   let visitors: Visitor[] = [];

//   try {
//     const response = await fetch(`http://localhost:3000/api/visitors`, {
//       cache: "no-store", // Avoid caching if real-time data is needed
//     });
//     const result = await response.json();
//     visitors = result.data;
//   } catch (err) {
//     console.error("Error fetching visitors:", err);
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Visitor Messages</h1>
//       <div className="space-y-4">
//         {visitors.length === 0 ? (
//           <p>No visitors found.</p>
//         ) : (
//           visitors.map((visitor) => (
//             <div
//               key={visitor.id}
//               className="border border-gray-300 p-4 rounded-lg shadow-sm"
//             >
//               <h2 className="text-lg font-semibold">{visitor.name}</h2>
//               <p className="text-sm text-gray-600">{visitor.email}</p>
//               <p className="mt-2">{visitor.message}</p>
//               <p className="mt-1 text-xs text-gray-400">
//                 {new Date(visitor.visited_at).toLocaleString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";

const Page = () => {
  return <div>404 Page not found</div>;
};

export default Page;
