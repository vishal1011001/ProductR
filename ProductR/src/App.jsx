import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Headerbar from "./components/Headerbar";
import Sidebar from "./components/Sidebar";
import { AddProduct } from "./components/AddProduct";
import LoginPage from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  useEffect(() => {
    setPublished(products.filter(data => data.isPublished === true));
    setUnPublished(products.filter(data => data.isPublished === false));
  }, products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const pubunProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
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

  const changePage = (page) => {
    setPage(page);
  }

  const [isAdding, setIsAdding] = useState(false);
  const changeIsAdding = () => {
    setIsAdding(!isAdding);
  }

  return (
    !isLoggedIn ? (
      <LoginPage setIsLoggedIn={setIsLoggedIn}/>
    ) : (

      <div className='w-screen h-screen'>
        <Sidebar changePage={changePage} />
        <Headerbar products={products} />
        {(page === 'home') &&
          <Home published={published} UnPublished={UnPublished} />
        }
        {page === 'products' &&
          <>
            <p className='absolute top-4 left-60'>Products</p>
            <Products products={products} changeIsAdding={changeIsAdding} />
          </>
        }
  
        {isAdding && (
          <div className='w-screen h-screen z-10 absolute top-0 left-0 p-2 flex align-middle justify-center'>
            <div className='w-[30%] z-11 bg-white p-5 border'>
              <AddProduct API_URL={API_URL} changeIsAdding={changeIsAdding} setProducts={setProducts}/>
            </div>
          </div>
        )}
      </div>
    )
  )
}

export default App
