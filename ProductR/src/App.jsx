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

  const [published, setPublished] = useState([]);
  const [UnPublished, setUnPublished] = useState([]);

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
        setPublished(data.filter(data => data.isPublished === true));
        setUnPublished(data.filter(data => data.isPublished === false));
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


  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className='w-screen h-screen'>
      <Sidebar changePage={changePage}/>
      <Headerbar products={products}/>
      {(page === 'home') &&
        <Home published={published} UnPublished={UnPublished}/>
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
