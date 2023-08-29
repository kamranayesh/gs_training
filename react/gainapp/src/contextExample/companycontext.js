import { createContext } from "react";
const CompanyContext = createContext({
  name: "default name",
  city: "default city",
});

export default CompanyContext;
