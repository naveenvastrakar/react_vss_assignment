import { useEffect, useState } from "react";

const FuncAPIMounting = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    console.log(
      "2.Mouting done, do what ever you want since 'Mai sirf ek baar hi chalunga'"
    );

    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  console.log("1. Products: ", products);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Deccrement</button>
      {products ? (
        products.map((product) => {
          return (
            <>
            <div key={product.id}>{product.title}</div>
            <img key={product.id} src={product.image} />
            </>
          );
        })
      ) : (
        <p>Please wait</p>
      )}
    </div>
  );
};

export default FuncAPIMounting;
