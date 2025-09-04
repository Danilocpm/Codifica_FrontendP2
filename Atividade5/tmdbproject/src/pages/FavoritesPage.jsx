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

    if (favorites.length === 0) return <p>Você não adicionou nenhum favorito ainda.</p>;

    return (
        <div>
            <h2>Meus Favoritos</h2>
            <div className="movie-list">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onDetails={handleDetails} />
                ))}
            </div>
        </div>
    );
};
