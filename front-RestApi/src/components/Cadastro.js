import React, { useState } from "react";
import * as yup from 'yup'
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";


var userSchema = yup.object().shape({
    nome: yup.string().required("O campo é obrigatório"),
    nome_mae: yup.string().required("O campo é obrigatório"),
    cpf: yup.string().required("O campo é obrigatório") ,
    rg: yup.string().required("O campo é obrigatório") ,
    data_de_nascimento: yup.string().required("O campo é obrigatório"),
    data_de_cadastro: yup.date().required("O campo é obrigatório")
});


export default function Cadastro(){

    const navigate = useNavigate()

    const { register, handleSubmit,  formState:{ errors } } = useForm({
        resolver: yupResolver(userSchema),
      });
    
    const[nome,setNome]=useState('')
    const[cpf,setCpf]=useState('')
    const[rg,setRg]=useState('')
    const[nome_mae,setNomeMae]=useState('')
    const[data_de_cadastro,setDataCadastro]=useState('')
    const[data_de_nascimento,setDataNascimento]=useState('')
   
    const handleClick = () => {
        var usuario = {nome, cpf, rg, nome_mae, data_de_cadastro, data_de_nascimento}
        fetch("http://localhost:8080/usuario/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(usuario)
        }).then(()=>{
            alert("Novo Usuario Cadastrado!")
            navigate('/')
        })
    }
 
    return(
        <div className="flex justify-center">
            <div className="w-96 bg-white border border-gray-200 rounded-md mb-6 shadow-lg max-w-sm text-center">
                <div className="bg-cyan-500 text-xl text-white py-4 font-semibold">
                    Cadastrar Usuário
                </div>
                <div className="w-full pt-6 px-8">
                    <form> 
                        <div className="mb-4">
                            <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-start" for="grid-first-name">
                                Nome
                            </label>
                            <input type="text" {...register('nome')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nome"  label="Nome" variant="outlined" fullWidth value={nome} onChange={(e)=>setNome(e.target.value)} />
                            {errors.nome?.message && <p className="text-red-500 text-sm">{errors.nome?.message}</p>}
                        </div>
                        
                        <div className="mb-4">
                            <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-start" for="grid-first-name">
                                CPF
                            </label>
                            <InputMask mask={"999.999.999-99"} type="text"  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...register('cpf')}  id="outlined-basic" label="CPF"variant="outlined" fullWidth  value={cpf} onChange={(e)=>setCpf(e.target.value)}/>
                            {errors.cpf?.message && <p className="text-red-500 text-sm">{errors.cpf?.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-start" for="grid-first-name">
                                RG
                            </label>  
                            <InputMask mask={"9999999999-9"} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  {...register('rg')} id="outlined-basic" label="RG" variant="outlined" fullWidth value={rg} onChange={(e)=>setRg(e.target.value)}/>
                            {errors.rg?.message && <p className="text-red-500 text-sm">{errors.rg?.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-start" for="grid-first-name">
                                Nome da Mãe
                            </label>               
                            <input type="text" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  {...register('nome_mae')}  id="outlined-basic" label="Nome da Mãe"variant="outlined" fullWidth value={nome_mae} onChange={(e)=>setNomeMae(e.target.value)}/>
                            {errors.nome_mae?.message && <p className="text-red-500 text-sm">{errors.nome_mae?.message}</p>}
                        </div>
                        <div className="mb-4"> 
                            <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-start" for="grid-first-name">
                                Data de Cadastro
                            </label>
                            <InputMask mask={"99/99/9999"} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...register('data_de_cadastro')} id="outlined-basic" label="Data de Cadastro"variant="outlined" fullWidth value={data_de_cadastro} onChange={(e)=>setDataCadastro(e.target.value)} /> 
                            {errors.data_de_cadastro?.message && <p className="text-red-500 text-sm">{errors.data_de_cadastro?.message}</p>}
                        </div>
                        <div className="mb-8">
                            <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-start" for="grid-first-name">
                                Data de Nascimento
                            </label>
                            <InputMask mask={"99/99/9999"} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...register('data_de_nascimento')} id="outlined-basic" label="Data de Nascimento" variant="outlined" fullWidth value={data_de_nascimento} onChange={(e)=>setDataNascimento(e.target.value)} /> 
                            {errors.data_de_nascimento?.message && <p className="text-red-500 text-sm">{errors.data_de_nascimento?.message}</p>}
                        </div>
                        <div className="mb-12"> 
                            <button className="px-3 py-2 bg-cyan-700 hover:bg-cyan-900 rounded-md text-white text-md mr-2 font-se" onClick={handleSubmit(handleClick)}> Cadastrar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}