// import { useContext } from "react";
// import {aContext} from "./A"
// const D = () => {
//     const aUseData = useContext(aContext);
//     {bgColor,txtColor} = aUseData;
//     return(
//         <div style={background:{bgColor},color:{txtColor}}>
//             hello i m D 
//         </div>
//     )
// };
// export default D;

import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const WithUseMemo = () => {
  const [products, setProducts] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(10);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("@AJ Response: ", response);
        setProducts(response.data);
      } catch (err) {
        console.log("Err: ", err);
      }
    })();
  }, []);

  const filteredProducts = useMemo(() => {
    return products?.filter((item) => {
      console.log("ReCalculating: ", item.id);
      return item.price < selectedPrice;
    });
  }, [products, selectedPrice]);

  console.log("@AJ Re-Render: ", products, filteredProducts);

  return (
    <div>
      <h1>My Products : {filteredProducts?.length}</h1>
      <div>
        <button onClick={() => setSelectedPrice(10)}>Below 10</button>
        <button onClick={() => setSelectedPrice(20)}>Below 20</button>
        <button onClick={() => setSelectedPrice(30)}>Below 30</button>
        <button onClick={() => setCounter(counter + 1)}>Increment </button>
      </div>
      <div>
        <ul>s
          {filteredProducts?.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WithUseMemo;
