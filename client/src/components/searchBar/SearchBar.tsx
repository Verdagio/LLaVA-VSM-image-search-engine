import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { searchBar } from "../../style";

import './SearchBar.css';

interface SearchBarProps {
    onSearch: (query: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {

    const [query, setQuery] = useState('');
    
    const onSearchClicked = async (query: string) => {
        await onSearch(query);
    }
    
    return ( <>
    <div className="search-bar">
        <input
        className={`input ${searchBar.input}`}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        >
        </input>
        <button className={searchBar.btn} onClick={() => onSearchClicked(query)} disabled={query.length < 3}><MagnifyingGlassIcon className="w-6 h-6" /></button>
    </div>
    </> );
}

export default SearchBar;