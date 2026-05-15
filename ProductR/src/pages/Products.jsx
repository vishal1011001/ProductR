import { RenderProducts } from "../components/RenderProducts";

function Products({products, changeIsAdding}) {
  const handleAddProduct = () => {
    changeIsAdding();
  }
  
  return (
  <div className="absolute top-15 left-55 w-[calc(100%-13.75rem)] h-[calc(100vh-3.75rem)] overflow-y-auto bg-white">
    <p className="text-2xl ml-5 mt-3">Products</p>
    <button
      onClick={changeIsAdding}
    className="absolute right-10 top-5 bg-slate-700 text-white p-2 rounded">Add Products</button>
    <div className="h-full flex flex-col">
        {products.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-10">
            
            {/* Icon */}
            <img 
              src="./add-pro-img.png" 
              alt="Empty state" 
              className="h-24 w-24 mb-6" 
            />

            {/* Heading */}
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Feels a little empty over here...
            </h3>

            {/* Description */}
            <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
              You can create products without connecting store <br />
              you can add products to store anytime
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => handleAddProduct()}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-10 rounded-lg transition-colors shadow-md"
            >
              Add your Products
            </button>
            
          </div>
        ) : (
          <div className="pt-8 p-5">
            <RenderProducts products={products} />
          </div>
        )
}
    </div>
  </div>
  );
}

export default Products;