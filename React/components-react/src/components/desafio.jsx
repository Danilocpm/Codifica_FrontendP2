import { useState, useEffect } from "react";

function SearchComponent() {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    useEffect(() => {
        console.log("Componente montado");
        return () => {
            console.log("Componente desmontado");
        };
    }, []);


    useEffect(() => {
        console.log("query mudou:", query);
    }, [query]);


    useEffect(() => {
        console.log("result mudou:", result);
    }, [result]);


    useEffect(() => {
        console.log("loading mudou:", loading);
    }, [loading]);


    useEffect(() => {
        console.log("error mudou:", error);
    }, [error]);


    useEffect(() => {
        if (!query) return


        const fetchData = async () => {
            setLoading(true)
            setError(null)


            try {
                const response = await fetch(`https://viacep.com.br/ws/${query}/json/`)
                if (!response.ok) throw new Error("Erro na request")
                const data = await response.json()
                setResult(data)

            }

            catch (err) {
                setError(err.message)
            }

            finally {
                setLoading(false)
            }


        }

        fetchData()


    }, [query])

    return (
        <div>
            <input
                type='text'
                placeholder='Digite a sua busca...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {result && (
                <div>
                    <h3>Resultado:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}


        </div>
    )


}

export default SearchComponent