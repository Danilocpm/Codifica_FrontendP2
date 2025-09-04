import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const MovieCard = ({ movie, onDetails }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some((m) => m.id === movie.id);

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/200x300?text=No+Image";

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-white flex flex-col">
            <img src={posterUrl} alt={movie.title} className="w-full h-auto max-h-128 object-cover" />
            <div className="p-2 flex flex-col flex-grow justify-between min-h-[120px]">
                <h3 className="text-lg font-bold text-center line-clamp-2">{movie.title} ({movie.release_date?.split("-")[0]})</h3>
                <div className="flex justify-start mt-4 gap-2">
                    <button onClick={() => (isFavorite ? removeFavorite(movie.id) : addFavorite(movie))} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        {isFavorite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button onClick={() => onDetails(movie.id)} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    );
};
