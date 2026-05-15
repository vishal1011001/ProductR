import { useState } from "react";

export function AddProduct({ API_URL, changeIsAdding, setProducts }) {
  const [productName, setProductName] = useState('');
  const changeProductName = (e) => {
    setProductName(e.target.value);
  }
  const [quantityStock, setQuantityStock] = useState('');
  const changeQuantityStock = (e) => {
    setQuantityStock(e.target.value);
  }
  const [mrp, setMrp] = useState('');
  const changeMrp = (e) => {
    setMrp(e.target.value);
  }
  const [sellingPrice, setSellingPrice] = useState('');
  const changeSellingPrice = (e) => {
    setSellingPrice(e.target.value);
  }
  const [brandName, setBrandName] = useState('');
  const changeBrandName = (e) => {
    setBrandName(e.target.value);
  }


  const [productType, setProductType] = useState("Foods");
  const [exchType, setExchType] = useState("YES");

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleExchTypeChange = (event) => {
    setExchType(event.target.value);
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const prod = {
        "productName": productName,
        "productType": productType,
        "quantityStock": quantityStock,
        "mrp": mrp,
        "sellingPrice": sellingPrice,
        "brandName": brandName,
        "totalImages": 1,
        "exchangeEligibility": exchType,
        "isPublished": false,
        "productImageUrl": `https://placehold.co/400x400?text=${productName}`
      }

      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prod)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } else {
        throw new Error('Products cannot be fetched.');
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="space-y-1 bg-white">
      <div>
        <p>Product Name</p>
        <input
          value={productName}
          onChange={changeProductName}
          placeholder="Product Name" className="w-full rounded border px-3 py-2" />
      </div>

      <div>
        <p>Product Type</p>
        <select
          value={productType}
          onChange={handleProductTypeChange}
          className="w-full rounded border px-3 py-2"
        >
          <option value="Foods">Foods</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Beauty Products">Beauty Products</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div>
        <p>Quantity Stock</p>
        <input
          value={quantityStock}
          onChange={changeQuantityStock}
          placeholder="Total number of stock available"
          type="number"
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <p>MRP</p>
        <input
          value={mrp}
          onChange={changeMrp}
          placeholder="Maximum retail price" className="w-full rounded border px-3 py-2" />
      </div>

      <div>
        <p>Selling Price</p>
        <input
          value={sellingPrice}
          onChange={changeSellingPrice}
          placeholder="Selling price" className="w-full rounded border px-3 py-2" />
      </div>

      <div>
        <p>Brand Name</p>
        <input
          value={brandName}
          onChange={changeBrandName}
          placeholder="Brand name" className="w-full rounded border px-3 py-2" />
      </div>

      <div>
        <p>Upload product images</p>
        <div className="mt-2 flex h-32 w-full items-center justify-center rounded border-2 border-dashed border-gray-400 bg-gray-50 text-center text-gray-600">
          <div>
            <p className="text-lg font-medium">Drag and drop images here</p>
            <p className="text-sm">or click to browse files</p>
          </div>
        </div>
      </div>

      <div>
        <p>Exchange or return eligibility</p>
        <select
          value={exchType}
          onChange={handleExchTypeChange}
          className="w-full rounded border px-3 py-2"
        >
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </div>

      <button className="bg-blue-700 p-2 text-white mr-4 rounded" onClick={handleCreateProduct}>Create</button>
      <button className="bg-black p-2 text-white rounded" onClick={changeIsAdding}>Cancel</button>
    </div>
  );
}