import { useState } from "react";
import Headerbar from "../components/Headerbar";
import Sidebar from "../components/Sidebar";
import TopNavBar from "../components/TopNavBar";
import { RenderProducts } from "../components/RenderProducts";

function Home({ published, UnPublished }) {
  const [page, setPage] = useState('published');

  const changePage = (page) => {
    setPage(page);
  }

 return (
  <div className="absolute top-15 left-55 w-[calc(100%-13.75rem)] h-[calc(100vh-3.75rem)] overflow-y-auto">
    <TopNavBar changePage={changePage} />
    
    <div className="h-full flex flex-col">
      {page === 'published' && (
        published.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-5">
            <img 
              src="./add-pro-img.png" 
              alt="No products" 
              className="h-20 w-20 mb-4 opacity-80" 
            />
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              No Published Products
            </h3>
            <p className="text-gray-500 text-sm">
              Your Published Products will appear here
            </p>
            <p className="text-gray-500 text-sm">
              Create your first product to publish
            </p>
          </div>
        ) : (
          <div className="pt-20 p-5">
            <RenderProducts products={published} />
          </div>
        )
      )}

      {page === 'unPublished' && (
        UnPublished.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-5">
            <img 
              src="./add-pro-img.png" 
              alt="No products" 
              className="h-20 w-20 mb-4 opacity-80" 
            />
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              No Unpublished Products
            </h3>
            <p className="text-gray-500 text-sm">
              Your Unpublished Products will appear here
            </p>
            <p className="text-gray-500 text-sm">
              Create your first product to publish
            </p>
          </div>
        ) : (
          <div className="pt-20 p-5">
            <RenderProducts products={UnPublished} />
          </div>
        )
      )}

    </div>
  </div>
);
}

export default Home;