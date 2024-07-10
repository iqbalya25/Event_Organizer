"use client";

import { Topic } from "@/types/topicType";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

export interface TopicsContextType {
  topicsList: Topic[];
  loading: boolean;
  error: string | null;
}

const defaultContextValue: TopicsContextType = {
  topicsList: [],
  loading: true,
  error: null,
};

const TopicsContext = createContext<TopicsContextType>(defaultContextValue);

export const useTopics = () => {
  const context = useContext(TopicsContext);
  if (!context) {
    throw new Error("useTopics must be used within a TopicsProvider");
  }
  return context;
};

interface TopicsProviderProps {
  children: ReactNode;
}

export const TopicsProvider: React.FC<TopicsProviderProps> = ({ children }) => {
  const [topicsList, setTopicsList] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopicsList = async () => {
      try {
        setLoading(true);
        // const token = "your-token";

        const response = await fetch(
          `http://localhost:8080/api/v1/event-topic/6`,
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
        if (data && data.data) {
          //console.log("Data Topic fetched:", data.data);
          const topics = data.data.map((item: { topic: any }) => item.topic);
          setTopicsList(topics);
          //console.log("Topics list set:", topics);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (e) {
        setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTopicsList();
  }, []);

  return (
    <TopicsContext.Provider value={{ topicsList, loading, error }}>
      {children}
    </TopicsContext.Provider>
  );
};

export default TopicsContext;
