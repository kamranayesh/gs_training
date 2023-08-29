import CompanyContext from "./companycontext";
import { useContext } from "react";
const Comment = () => {
  const companyOb = useContext(CompanyContext);
  console.log(companyOb);
  return (
    <div>
      <h2>This is Comment component</h2>
      <div>
        Company Name : {companyOb.name}
        <br />
        Company city : {companyOb.city}
      </div>
    </div>
  );
};

export default Comment;
