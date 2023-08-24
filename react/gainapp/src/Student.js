import { useState } from "react";
const Student = ({ students }) => {
  //   let students = ["Kamran", "Sana", "Nidhi", "Apoorva", "Shreyanshi"];
  return (
    <div>
      {students.map((val) => {
        return <div>{val}</div>;
      })}
    </div>
  );
};

export default Student;
