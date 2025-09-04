import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export const MovieCard = ({ movie, onDetails }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some((m) => m.id === movie.id);

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/200x300?text=No+Image";

    return (
        <div className="movie-card">
            <img src={posterUrl} alt={movie.title} />
            <h3>{movie.title} ({movie.release_date?.split("-")[0]})</h3>
            <button onClick={() => (isFavorite ? removeFavorite(movie.id) : addFavorite(movie))}>
                {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            </button>
            <button onClick={() => onDetails(movie.id)}>Ver Detalhes</button>
        </div>
    );
};
