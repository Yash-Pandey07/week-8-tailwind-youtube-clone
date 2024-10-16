export const SearchBar = () => {
    return (
        <div className="w-full sm:w-3/4 lg:w-1/2 px-2">
            <form>
                <div className="flex items-center border border-gray-500 rounded-full p-1 pl-3 text-sm pr-2 bg-white">
                    <input
                        id="default-search"
                        className="w-full bg-transparent text-gray-900 border-none outline-none hidden sm:block sm:flex-grow lg:w-full"
                        placeholder="Search"
                        
                    />
                    <button className="bg-gray-100 p-2 rounded-full sm:bg-transparent">
                        <svg className="w-6 h-6 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
