function TopNavBar() {
  return (
    <div className="border-b border-gray-400 p-2 items-center flex absolute top-0 left-0  h-15 w-[85.7vw] ">
      <button className="p-4 hover:bg-gray-200">Published</button>
      <button className="p-4 hover:bg-gray-200" >Unpublished</button>
    </div>
  );
}

export default TopNavBar;