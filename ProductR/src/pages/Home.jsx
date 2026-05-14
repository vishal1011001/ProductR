import { useState } from "react";
import Headerbar from "../components/Headerbar";
import Sidebar from "../components/Sidebar";
import TopNavBar from "../components/TopNavBar";
import { RenderProducts } from "../components/RenderProducts";

function Home({ published, UnPublished }) {
  const [page, setPage] = useState('published');

  return (
    <div className="absolute top-15 left-55 ">
      <TopNavBar />
      <div className="pt-20 p-5">
        {page === 'published' &&
          <RenderProducts products={published} />
        }
        {page === 'unPublished' &&
          <RenderProducts products={UnPublished} />
        }
      </div>
    </div>
  );
}

export default Home;