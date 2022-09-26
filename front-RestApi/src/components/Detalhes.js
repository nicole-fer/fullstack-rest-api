import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Detalhes(){

    const navigate = useNavigate()

    const { state } = useLocation();
    const { usuario }= state;

    const [status, setStatus] = useState()

    const remove = () => {
        var id = usuario.id
        let text = prompt("Digite o cpf ou rg");
        if ((text === usuario.rg) || (text === usuario.cpf)) {
            fetch(`http://localhost:8080/usuario/${id}`, { 
                method: 'DELETE' 
            })
            .then(() => setStatus('Delete successful'));
            alert("Usuário deletado!")
            navigate('/')
          }
        else {
            alert("O dado inserido esta incorreto")
        }
       
    }

    return(
        <div className="mx-6 flex justify-center pt-8 w-full"> 
            <div className="flex flex-colbg-white rounded-lg border shadow-md md:flex-row md:max-w-xl">
                <div className="border-r">
                    <p className="text-black text-2xl mx-6 font-bold pt-8 items-start">{usuario.nome}</p>
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal px-8">
                    <div className="pb-4 pt-4">
                        <p className="mb-3 font-medium text-gray-700">Data de Nascimento:  {usuario.data_de_nascimento}</p>
                        <p className="mb-3 font-medium text-gray-700">CPF: {usuario.cpf}</p>
                        <p className="mb-3 font-medium text-gray-700">RG: {usuario.rg}</p>
                        <p className="mb-3 font-medium text-gray-700">Nome da Mãe: {usuario.nome_mae}</p>
                        <p className="mb-3 font-medium text-gray-700">Data de Cadastro: {usuario.data_de_cadastro}</p>
                    </div>
                    <div className="flex justify-end pt-12">
                        <p className="px-5 py-3 text-md font-medium text-right whitespace-nowrap bg-red-500 text-white rounded-lg">
                            <button onClick={remove}> Remover </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}