import { SearchBarProps } from "../interfaces/post";

function SearchBar({onSearch}: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder="Search post by title..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}

export default SearchBar;