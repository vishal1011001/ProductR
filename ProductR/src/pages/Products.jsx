import { RenderProducts } from "../components/RenderProducts";

function Products({products}) {
  return (
    <div className="absolute top-15 left-55">
      <RenderProducts products={products}/>
    </div>
  );
}

export default Products;