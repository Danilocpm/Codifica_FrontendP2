export const Pagination = ({ currentPage, totalPages, onChangePage }) => {
    const pages = [];

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center items-center space-x-2 mt-8 text-white">
            {currentPage > 1 && <button onClick={() => onChangePage(currentPage - 1)} className="bg-gray-800 px-4 py-2 rounded-md hover:bg-custom-red">Prev</button>}
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onChangePage(p)}
                    className={`px-4 py-2 rounded-md ${p === currentPage ? "bg-custom-red font-bold" : "bg-gray-800 hover:bg-custom-red"}`}>
                    {p}
                </button>
            ))}
            {currentPage < totalPages && <button onClick={() => onChangePage(currentPage + 1)} className="bg-gray-800 px-4 py-2 rounded-md hover:bg-custom-red">Next</button>}
        </div>
    );
};
