import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Headerbar from "./components/Headerbar";
import Sidebar from "./components/Sidebar";

function App() {
  const API_URL = 'http://localhost:5000';
  const [page, setPage] = useState('products');

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if(response.ok) {
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='w-screen h-screen'>
      <Sidebar />
      <Headerbar products={products}/>
      {(page === 'home') &&
        <Home />
      }
      {page === 'products' &&
        <>
          <p className='absolute top-4 left-60'>Products</p>
          <Products products={products}/>
        </>
      }
    </div>
  )
}

export default App
