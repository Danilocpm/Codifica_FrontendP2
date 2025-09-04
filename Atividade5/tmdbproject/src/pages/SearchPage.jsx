import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { MovieCard } from "../components/MovieCard";
import { Pagination } from "../components/Pagination";
import { SearchBar } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTMxZDI4MWRmYTE1ZjA5MDdmMGEwYmMxNWU3NGI5NCIsIm5iZiI6MTc1NjkzMzM4NC43NjEsInN1YiI6IjY4YjhhZDA4MDQ1OWUzN2YxNzFiYjQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CZrT2AepLTY-Bb6M-7fEvNOXEou4l5DzAMUbUqsA7Xg";

export const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const fetchMovies = useCallback(async () => {
        setLoading(true);
        setError(null);

        const url = query
            ? `https://api.themoviedb.org/3/search/movie?language=pt-BR&query=${encodeURIComponent(query)}&page=${page}`
            : `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`;

        try {
            const { data } = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${BEARER_TOKEN}`,
                    "Content-Type": "application/json;charset=utf-8",
                },
            });

            setMovies(data.results || []);
            setTotalPages(data.total_pages || 1);
        } catch (err) {
            setError("Erro ao buscar filmes.");
        } finally {
            setLoading(false);
        }
    }, [query, page]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const handleSearch = (term) => {
        setQuery(term);
        setPage(1); // reset da página ao buscar
    };

    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onDetails={handleDetails} />
                ))}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} onChangePage={setPage} />
        </div>
    );
};
