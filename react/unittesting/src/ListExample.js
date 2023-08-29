import React from "react";
const ListExample = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => {
          <li key={item.id}>
            {item.id}
            {item.first_name},{item.last_name},{item.email}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ListExample;
