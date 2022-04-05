import { useContext } from "react";
import KioskContext from "../context/KioskProvider";

const useKiosk = () => {
  return useContext(KioskContext);
};

export default useKiosk;
