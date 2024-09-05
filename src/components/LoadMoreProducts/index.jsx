import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products/?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  });

  if (loading) {
    return <div>Loading data please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div
                className="product"
                key={product.id}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableButton ? <p>you have reached 100 products</p> : null}
      </div>
    </div>
  );
}
