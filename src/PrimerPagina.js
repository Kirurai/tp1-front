import React, { useEffect, useState } from 'react';
import Axios from './axios';
import './App.css';
import { home } from './home';


function PrimerPagina() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios({url: "http://localhost:8080/api/empresas" })
    .then ((response) => {
      setList(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [setList]);


const id = list.map(dato => dato.id);
  // list.map(item => console.log(item.id),
  // console.log(item.title))


  return (
    <table width="50%" align="center">
    <tr>
    <td width="50%">
    <b>EMPRESA</b>
    </td>
    <td>
    <b>VER PAGINA</b>
    </td>
    </tr>
    
    {list.map(((dato) => 
    (<tr>
    <td>{dato.denominacion}</td>
    <td>      
   <a href={"home?id="+dato.id}>URL PAGINA HOME</a>
    </td>
    </tr>
        )))}
    </table>
  );
}

export default PrimerPagina;
