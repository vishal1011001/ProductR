function Sidebar() {
  return (
    <div className="bg-slate-900 w-55 text-white h-screen p-2">
      <div className='*:mb-2 border-b border-gray-600'>
        <h1 className="text-2xl font-bold">Productr</h1>
        <input placeholder="Search" className="bg-gray-800 p-1.5 rounded"/>
      </div>

      <div className="flex flex-col *:w-40 *:rounded *:p-1.5 *:text-left *:mt-2 *:hover:bg-slate-700">
        <button>Home</button>
        <button>Products</button>
      </div>
    </div>
  );
}

export default Sidebar;