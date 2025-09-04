import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTMxZDI4MWRmYTE1ZjA5MDdmMGEwYmMxNWU3NGI5NCIsIm5iZiI6MTc1NjkzMzM4NC43NjEsInN1YiI6IjY4YjhhZDA4MDQ1OWUzN2YxNzFiYjQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CZrT2AepLTY-Bb6M-7fEvNOXEou4l5DzAMUbUqsA7Xg";

export const DetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                // Endpoint principal do filme
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&append_to_response=credits`,
                    {
                        headers: {
                            Authorization: `Bearer ${BEARER_TOKEN}`,
                            "Content-Type": "application/json;charset=utf-8",
                        },
                    }
                );

                setMovie(data);
            } catch (err) {
                setError("Erro ao carregar detalhes do filme.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!movie) return null;

    // Pegar diretor
    const director = movie.credits.crew.find((c) => c.job === "Director");
    // Pegar principais atores
    const cast = movie.credits.cast.slice(0, 5);

    return (
        <div className="container mx-auto p-4 flex gap-6 text-white">
            <div className="w-1/3">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ""}
                    alt={movie.title}
                    className="w-full rounded-lg shadow"
                />
            </div>

            <div className="w-2/3">
                <h1 className="text-2xl font-bold mb-4">{movie.title} ({movie.release_date?.split("-")[0]})</h1>

                <div className="space-y-2">
                    <p><strong>Sinopse:</strong> {movie.overview}</p>
                    <p><strong>Diretor:</strong> {director ? director.name : "N/A"}</p>
                    <p><strong>Atores principais:</strong> {cast.map((a) => a.name).join(", ")}</p>
                    <p><strong>Avaliação:</strong> {movie.vote_average} / 10</p>
                </div>

            </div>

        </div>
    );
};
