import { SearchBar } from "./Searchbar"

export const Appbar = () => {
    return (
        <div className="flex justify-between items-center px-3 py-1">
            <div className="text-md inline-flex items-center pb-2">
                Youtube
            </div>
            <div className="flex-1 flex justify-center px-2">
                <SearchBar />
            </div>
            <div className="text-md inline-flex items-center pb-2">
                Logout
            </div>
        </div>
    );
}