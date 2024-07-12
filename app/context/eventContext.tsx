"use client";
import { Event } from "@/types/eventType";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

// export interface EventContextType {
//   eventList: Event[];
//   loading: boolean;
//   error: unknown;
// }

// const EventContext = createContext<EventContextType |  undefined>(undefined);

// export default EventContext;

// export const EventProvider: React.FC<{ children: JSX.Element }> = ({
//       children,
//     }) => {
//       const [eventList, setEventList] = useState<Event[]>([]);
//       const [loading, setLoading] = useState<boolean>(true);
//       const [error, setError] = useState<unknown>(null);

//       useEffect(() => {
//         const fetchEventList = async () => {
//           setLoading(true);
//           try {
//             setLoading(true);
//               const response = await fetch(
//                 `http://localhost:8080/api/v1/event/paginated?page=0&size=20`
//               );
//               if (!response.ok) {
//                 throw new Error("Failed to fetch event.");
//               }
//               const data = (await response.json()) as { results: Event[] };

//               );
//             }

//             setEventList(Response);
//             setLoading(false);
//           } catch (error) {
//             setError(error);
//             setLoading(false);
//           }
//         };

//         fetchEventList();
//       }, );

//       const value: EventContextType = {
//         eventList,
//         loading,
//         error,

//       };

//       return (
//         <EventContext.Provider value={value}>{children}</EventContext.Provider>
//       );
//     };

//     export { EventContext };

// export interface EventContextType {
//   eventList: Event[];
//   loading: boolean;
//   error: unknown;
// }

// const EventContext = createContext<EventContextType | undefined>(undefined);

// export default EventContext;

// export const EventProvider: React.FC<{ children: JSX.Element }> = ({
//   children,
// }) => {
//   const [eventList, setEventList] = useState<Event[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<unknown>(null);

//   useEffect(() => {
//     const fetchEventList = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/v1/event/paginated?page=0&size=20`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch events.");
//         }
//         const data = await response.json();
//         setEventList(data.results);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEventList();
//   }, []);

//   const value: EventContextType = {
//     eventList,
//     loading,
//     error,
//   };

//   return (
//     <EventContext.Provider value={value}>{children}</EventContext.Provider>
//   );
// };

// export interface EventContextType {
//   eventList: Event[];
//   loading: boolean;
//   error: unknown;
// }

// const EventContext = createContext<EventContextType | undefined>(undefined);

// export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [eventList, setEventList] = useState<Event[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<unknown>(null);

//   useEffect(() => {
//     const fetchEventList = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/v1/event/paginated?page=0&size=20`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch events.");
//         }
//         const data = await response.json();
//         setEventList(data.results);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEventList();
//   }, []);

//   return (
//     <EventContext.Provider value={{ eventList, loading, error }}>
//       {children}
//     </EventContext.Provider>
//   );
// };

// export const useEvent = () => {
//   const context = useContext(EventContext);
//   if (context === undefined) {
//     throw new Error("useEvent must be used within an EventProvider");
//   }
//   return context;
// };

// export default EventContext;

export interface EventContextType {
  eventList: Event[];
  loading: boolean;
  error: string | null;
}

const defaultContextValue: EventContextType = {
  eventList: [],
  loading: true,
  error: null,
};

const EventContext = createContext<EventContextType>(defaultContextValue);

export const useEvent = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [eventList, setEventList] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:8080/api/v1/event/paginated?page=0&size=20",
          {
            headers: {
              Accept: "application/json",
              // Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Raw data:", data);

        if (data && data.data && data.data.content) {
          console.log("Data fetched:", data.data.content);
          const events: Event[] = data.data.content.map((item: any) => ({
            name: item.name,
            address: item.address,
            city: item.city,
            websiteUrl: item.websiteUrl,
            imageUrl: item.imageUrl,
            description: item.description,
            descriptionDetail: item.descriptionDetail,
            dateStart: new Date(item.dateStart),
            dateEnd: new Date(item.dateEnd),
            hourStart: item.hourStart,
            hourEnd: item.hourEnd,
            capacity: item.capacity,
            eventTypeId: item.eventTypeId,
            topics: item.topics || [],
            categories: item.categories || [],
            companies: item.companies || [],
            speakers: item.speakers || [],
            ratings: item.ratings || [],
            eventType: item.eventType,
          }));

          console.log("Events to be saved: ", events);

          setEventList(events);
          //     console.log("Event list set:", events);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (e) {
        console.error("Fetch error:", e);
        setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEventList();
  }, []);
  return (
    <EventContext.Provider value={{ eventList, loading, error }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;

//   useEffect(() => {
//     const fetchEventList = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/v1/event/paginated?page=0&size=20`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch events.");
//         }
//         const data = await response.json();
//         setEventList(data.results);
//       } catch (error) {
//         setError(
//           error instanceof Error ? error.message : "An unknown error occurred"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEventList();
//   }, []);
