import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export const MovieCard = ({ movie, onDetails }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some((m) => m.id === movie.id);

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/200x300?text=No+Image";

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-white">
            <img src={posterUrl} alt={movie.title} className="w-full h-auto" />
            <div className="p-4">
                <h3 className="text-lg font-bold text-center">{movie.title} ({movie.release_date?.split("-")[0]})</h3>
                <div className="flex justify-between mt-4">
                    <button onClick={() => (isFavorite ? removeFavorite(movie.id) : addFavorite(movie))} className="bg-custom-red text-white px-4 py-2 rounded-md hover:bg-red-700">
                        {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                    </button>
                    <button onClick={() => onDetails(movie.id)} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    );
};
