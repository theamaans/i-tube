import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, iTube, menu } from "../utils/constants";

export const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          src={menu}
          alt="menu"
        />
        <img className="h-14 w-auto" src={iTube} alt="iTube-logo" />
        <span className="text-3xl text-black-600 font-bold ml-0.5">iTube</span>
      </div>
      <div className="flex col-span-10 justify-center items-center px-10">
        <div className="flex flex-grow justify-center">
          {" "}
          {/* Add flex class */}
          <input
            className="flex-grow-0 w-2/3 px-3 py-2 border border-gray-400 rounded-l-full focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="flex-shrink-0 border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 mt-60 mb-8 mr-60 shadow-lg w-96 rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
          alt="user-icon"
        />
      </div>
    </div>
  );
};
