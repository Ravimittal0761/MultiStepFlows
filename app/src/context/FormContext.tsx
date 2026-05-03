import React, { createContext, useEffect, useState } from "react";
import { getProgress } from "../services/api";

export const FormContext = createContext<any>(null);

export const FormProvider = ({ children }: any) => {
  const [formData, setFormData] = useState({
    age: "",
    goal: "",
    preferences: [],
    extra: "",
  });

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProgress();
        if (data) setFormData(data);
      } catch (e) {
        console.log("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <FormContext.Provider value={{ formData, setFormData, loading }}>
      {children}
    </FormContext.Provider>
  );
};
