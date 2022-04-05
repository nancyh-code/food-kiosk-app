import { useState, useEffect, createContext } from "react";
import axios from "axios";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const obtainCategories = async () => {
    try {
      const { data } = await axios("/api/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtainCategories();
  }, []);

  return (
    <KioskContext.Provider value={{ categories }}>
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
