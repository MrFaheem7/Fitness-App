import { createContext, useState } from "react";

const FormContext = createContext();

const CoachFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    availabilityScheduling: {},
    personalAddress: {},
    professionalBackground: {},
    prospectiveClientPreferences: {},
    trainingSpecialties: {},
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, CoachFormProvider };