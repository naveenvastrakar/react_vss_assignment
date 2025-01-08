import { useState , useEffect } from "react";
import axios from "axios";
import LoaderView from './MainLogic'
const ProductListHOC = () => {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
  
      (async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
        } catch (err) {
          console.log("Error: ", err);
          setProducts([]);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);
  
    return (
      <LoaderView
        loading={isLoading}
        loadingMsg="Navdeep, Please wait"
        data={products}
        noDataMsg="No products available"
      >
        <div>
          <h1>Product List</h1>
          <hr />
          <ul>
            {products?.map((product) => {
              return <li key={product.id}>{product.title}</li>;
            })}
          </ul>
        </div>
      </LoaderView>
    );
  };
  
  export default ProductListHOC;