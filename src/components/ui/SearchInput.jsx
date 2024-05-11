import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../../features/shopping/shoppingSlice";

const SearchInput = () => {
  const value = useSelector((store) => store.shopping.value);
  const dispatch = useDispatch();

  function searchKeyword(e) {
    dispatch(searchItem(e.target.value));
  }

  return (
    <div className="mt-6 mb-2 md:mb-0">
      <input
        type="text"
        id="voice-search"
        className="bg-gray-50 max-w-sm border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2"
        placeholder="Search Item..."
        onChange={searchKeyword}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
