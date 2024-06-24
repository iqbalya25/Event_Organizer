// // eventlist/components/EventItem.tsx
// import React from 'react';
// import { Event } from '../../types';

// interface EventItemProps {
//   event: Event;
// }

// const EventItem: React.FC<EventItemProps> = ({ event }) => {
//   return (
//     <div className="p-4 w-full sm:w-1/2 lg:w-1/4">
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <img src={event.imageUrl} alt={event.name} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <h3 className="text-lg font-bold">{event.name}</h3>
//           <p className="text-sm text-gray-500">{event.description}</p>
//           <p className="text-sm font-semibold">{event.date}</p>
//           <p className="text-sm text-blue-500">{event.type}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventItem;
