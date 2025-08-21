import { useState, useEffect } from "react";

function ViaCepFunctional({cep}) {
    const [endereco, setEndereco] = useState("")
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(null)


    useEffect(() => {
        setCarregando(true)
        setErro(null)

        console.log("Use Effect executado (montagem ou att do CEP)")

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            if(!res.ok) throw new Error("Erro na resposta da API")
                return res.json()
        })
        .then(data => setEndereco(data))
        .catch(err => {
            setErro(err.message)
        })
        .finally(() => setCarregando(false))
    }, [cep])

    return (
        <div>
            <h2>Endereco:</h2>
            <p><strong>Cep:</strong> {endereco.cep} </p>
            <p><strong>Logradouro:</strong> {endereco.logradouro} </p>
            <p><strong>Bairro:</strong> {endereco.bairro} </p>
            <p><strong>Localidade:</strong> {endereco.localidade} </p>
            <p><strong>UF:</strong> {endereco.uf} </p>
        </div>
    )
}

export default ViaCepFunctional