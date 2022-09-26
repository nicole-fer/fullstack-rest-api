import { Button } from "@mui/material";
import postcss from "postcss";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Paginacao } from "./Paginacao";

function PaginaInicial() {

    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState('');
    const [loading, setLoading] = useState(true);
    const [currrentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5);

    useEffect(()=>{
        fetch("http://localhost:8080/usuario/getAll?page0&size2")
        .then( res => res.json())
        .then((resultado)=>{
            if(resultado != null){
                setLoading(false);
                setUsuarios(resultado)
            }
        })
    },[])

    /* Paginação */
    const lastIndex = currrentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;

    // Mudar as páginas

    const paginate = (numeroPagina) => setCurrentPage(numeroPagina)

    /* Pesquisa */

    const [search, setSearch] = useState('')

  return (
    <div>
        { loading && <div> Carregando </div>}
      {/* ------------------------------- Lista e busca ------------------------------------------ */}
    { !loading && <div className="flex flex-col mx-32">
    <div className="overflow-x-auto">
        <div className="py-3 pl-2 flex justify-between">
            <div className="relative max-w-xs">
                <label htmlFor="hs-table-search" className="sr-only">
                    Buscar
                </label>
                <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="block w-full p-3 pl-16 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-gray-200"
                    placeholder="Buscar..."
                    onChange={event => {setSearch(event.target.value)}}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                        className="h-3.5 w-3.5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>
            <div> 
                <p onClick={()=> navigate('/novoCadastro')} className="px-3 py-2 bg-cyan-700 hover:bg-cyan-900 rounded-md text-white text-sm mr-2 font-semibold cursor-pointer">
                        Cadastrar Novo Usuário
                </p>
            </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="flex items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                               Nome
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                               CPF
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                                Detalhes
                            </th>
                        </tr>
                    </thead>
                   { usuarios.filter((usuario)=>{
                        var rg = usuario.rg
                        var sliptRg = rg.replace(/-/g,"")
                        var cpf = usuario.cpf
                        var splitCpf = cpf.replace(/[^0-9]/g,"")
    
                        if(search === ''){
                            return usuario
                        } else if (usuario.nome.toLowerCase().includes(search.toLowerCase())) {
                            return usuario
                        }else if((sliptRg.includes(search))|| (usuario.rg.includes(search))){
                            return usuario
                        } else if((usuario.cpf.includes(search))||(splitCpf.includes(search))){
                            return usuario
                        }  
                   }).slice(firstIndex, lastIndex).map(usuario=>( <tbody className="divide-y divide-gray-200">
                        <tr  key={usuario.id}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 text-start">
                                {usuario.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 text-start">
                                {usuario.nome}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 text-start">
                                {usuario.cpf}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <Button onClick={()=> navigate('/detalhes', { state: { usuario } })}>
                                    Detalhes
                                </Button>
                            </td>
                        </tr>
                    </tbody> ))} 
                </table>
                <Paginacao postPerPage={postPerPage} totalPosts={usuarios.length} paginate={paginate} />
            </div>
        </div> 
    </div> 
</div>}
</div>
  );
}

export default PaginaInicial;