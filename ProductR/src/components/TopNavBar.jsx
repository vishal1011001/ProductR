function TopNavBar({changePage}) {
  return (
    <div className="border-b border-gray-400 p-2 items-center flex absolute top-0 left-0  h-15 w-[85.7vw] ">
      <button className="p-4 hover:bg-gray-200"
        onClick={()=>changePage('published')}
        >Published</button>
      <button className="p-4 hover:bg-gray-200" 
        onClick={()=>changePage('unPublished')}
      >Unpublished</button>
    </div>
  );
}

export default TopNavBar;