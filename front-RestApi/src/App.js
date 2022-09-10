//import './App.css';
import React, { useEffect, useState } from "react";
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './components/PaginaInicial';
import Cadastro from './components/Cadastro';
import Navbar from './components/NavBar';
import Detalhes from './components/Detalhes';


function App() {

  const [usuarios, setUsuarios] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("http://localhost:8080/usuario/getAll")
    .then( res => res.json())
    .then((resultado)=>{
        if(resultado != null){
          setLoading(false);
          setUsuarios(resultado.id)
        }
    })
},[])

console.log(usuarios)

  return (
    <div>
      <div>
          { loading && <div> Carregando </div>}
      </div>
      <div>
        <Router> 
          <Navbar/>
            <Routes> 
                <Route path='/' element={ <PaginaInicial /> }/>
                <Route path='/novoCadastro' element={ <Cadastro /> }/>
                <Route path='/detalhes' element={ <Detalhes /> }/>
            </Routes>
        </Router>
      </div>
    </div>


  );
}

export default App;
