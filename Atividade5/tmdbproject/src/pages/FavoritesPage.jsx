import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { MovieCard } from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

export const FavoritesPage = () => {
    const { favorites } = useContext(FavoritesContext);
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    };

    if (favorites.length === 0) return <p className="text-white text-center mt-8">Você não adicionou nenhum favorito ainda.</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-white mb-8">Meus Favoritos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onDetails={handleDetails} />
                ))}
            </div>
        </div>
    );
};
