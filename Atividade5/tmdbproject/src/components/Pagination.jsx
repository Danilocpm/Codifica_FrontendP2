export const Pagination = ({ currentPage, totalPages, onChangePage }) => {
    const pages = [];

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {currentPage > 1 && <button onClick={() => onChangePage(currentPage - 1)}>Prev</button>}
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onChangePage(p)}
                    style={{ fontWeight: p === currentPage ? "bold" : "normal" }}
                >
                    {p}
                </button>
            ))}
            {currentPage < totalPages && <button onClick={() => onChangePage(currentPage + 1)}>Next</button>}
        </div>
    );
};