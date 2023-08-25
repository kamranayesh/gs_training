import { useRef } from "react";

const RefExample = () => {
  const inputnameRef = useRef(null);
  const inputcityRef = useRef(null);
  const h1Ref = useRef(null);
  const showValues = () => {
    let nameOb = inputnameRef.current;
    let cityOb = inputcityRef.current;
    const h1Ob = h1Ref.current;
    console.log(nameOb);
    console.log(cityOb);
    h1Ob.textContent = `Name =${nameOb.value} and City = ${cityOb.value}`;
  };
  return (
    <div>
      <h1 ref={h1Ref}></h1>
      <input type="text" name="name" ref={inputnameRef} />
      <input type="text" name="city" ref={inputcityRef} />
      <button onClick={showValues}>Show Values</button>
    </div>
  );
};

export default RefExample;
