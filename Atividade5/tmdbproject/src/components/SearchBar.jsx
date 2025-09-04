import { useState, useEffect } from "react";

export const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(term);
        }, 500);

        return () => clearTimeout(handler);
    }, [term, onSearch]);

    return (
        <input
            type="text"
            placeholder="Buscar filmes..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
        />
    );
};
