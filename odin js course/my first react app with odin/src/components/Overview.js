import { useState } from "react";

let count = 0;

const Comp1 = () => {
   const [inputValue, setInput] = useState("");
   const [arr, setArr] = useState([]);

   return (
      <div>
         <label>Your Tasks </label>
         <input type="text" onChange={(e) => setInput(e.target.value)}></input>
         <button
            type="submit"
            onClick={() => {
               setArr([...arr, { id: count++, name: inputValue }]);
               setInput("");
            }}
         >
            AddinG
         </button>
         <p>
            {arr.map((el, i) => (
               <li key={i}>
                  {el.id} - {el.name}
               </li>
            ))}
         </p>
      </div>
   );
};

export default Comp1;
