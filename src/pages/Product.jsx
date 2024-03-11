import { useOutletContext, useParams, useSearchParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  // url: http://localhost:5173/products/3?test=123&test=456
  const [searchParams] = useSearchParams();
    /*
    searchParams.get = 123
    searchParams.getAll = ['123',456]
    */
  console.log("searchParams  ==>", searchParams.get("test"));
  const outletContext = useOutletContext();

  console.log("outletContext ==>", outletContext);
  return <h1>Product: {id}</h1>;
};

export default Product;
