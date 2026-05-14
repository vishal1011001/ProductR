export function RenderProducts({ products }) {
  return (
    <div>
      {products.map((product) => {
        <div key={product._id}>
          <div className="w-[280px] rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

            {/* Product Image */}
            <div className="flex justify-center rounded-xl bg-gray-100 p-4">
              <img
                src={product.productImageUrl}
                alt={product.productName}
                className="h-[180px] object-contain"
              />
            </div>

            {/* Pagination Dots */}
            <div className="mt-2 flex justify-center gap-1">
              <div className="h-2 w-2 rounded-full bg-orange-400"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            </div>

            {/* Product Title */}
            <h2 className="mt-3 text-[15px] font-semibold text-gray-900">
              {product.productName}
            </h2>

            {/* Product Details */}
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Product type -</span>
                <span className="text-gray-700">{product.productType}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Quantity Stock -</span>
                <span className="text-gray-700">{product.quantityStock}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">MRP -</span>
                <span className="text-gray-700">₹ {product.mrp}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Selling Price -</span>
                <span className="text-gray-700">
                  ₹ {product.sellingPrice}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Brand Name -</span>
                <span className="text-gray-700">{product.brandName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Total Images -</span>
                <span className="text-gray-700">{product.totalImages}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Exchange Eligibility -</span>
                <span className="font-medium text-green-600">
                  {product.exchangeEligibility}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Status -</span>
                <span
                  className={`font-medium ${product.isPublished
                      ? "text-green-600"
                      : "text-red-500"
                    }`}
                >
                  {product.isPublished ? "Published" : "Draft"}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex items-center gap-2">
              <button className="flex-1 rounded-lg bg-blue-700 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
                {product.isPublished ? "Unpublish" : "Publish"}
              </button>

              <button className="flex-1 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                Edit
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-500 transition hover:bg-gray-100">
                🗑
              </button>
            </div>
          </div>
        </div>
      })}
    </div>
  );
}