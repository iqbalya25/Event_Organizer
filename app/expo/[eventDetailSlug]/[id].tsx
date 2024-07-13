// // src/pages/expo/event/[id].tsx

// import React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useEvent } from '../events';

// const EventDetailPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const { data: event, isLoading, error } = useEvent(id as string);

//   if (isLoading) return <div className="text-center p-10">Loading...</div>;
//   if (error) return <div className="text-center p-10 text-red-500">Error: {(error as Error).message}</div>;
//   if (!event) return <div className="text-center p-10">Event not found</div>;

//   return (
//     <div className="container mx-auto p-6">
//       <Link href="/expo" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Events</Link>
//       <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <p className="text-gray-700 mb-4">{event.description}</p>
//         <p className="mb-2"><strong>Date:</strong> {event.dateStart} - {event.dateEnd}</p>
//         <p className="mb-2"><strong>Time:</strong> {event.hourStart} - {event.hourEnd}</p>
//         <p className="mb-2"><strong>Location:</strong> {event.city}, {event.address}</p>
//         <p className="mb-2"><strong>Capacity:</strong> {event.capacity}</p>
//         <p className="mb-2"><strong>Website:</strong> <a href={event.websiteUrl} className="text-blue-500 hover:underline">{event.websiteUrl}</a></p>

//         {event.topics && event.topics.length > 0 && (
//           <div className="mt-4">
//             <h2 className="text-xl font-semibold mb-2">Topics:</h2>
//             <ul className="list-disc list-inside">
//               {event.topics.map((topic, index) => (
//                 <li key={index}>{topic.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {event.speakers && event.speakers.length > 0 && (
//           <div className="mt-4">
//             <h2 className="text-xl font-semibold mb-2">Speakers:</h2>
//             {event.speakers.map((speaker, index) => (
//               <div key={index} className="mb-2">
//                 <p><strong>{speaker.name}</strong> - {speaker.position} at {speaker.companyName}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventDetailPage;
