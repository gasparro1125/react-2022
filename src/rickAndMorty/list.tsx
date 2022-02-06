import React from "react";
import {CharaceterListEntity} from "./models";
import {ListRow} from "./list-rows"
import {MyContext} from "../context"
import { useNavigate } from "react-router-dom";


const getMembers = (page:number):Promise<CharaceterListEntity>=> {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then((response) =>{
    if(response.ok){
      return response.json()
    }else return []
  })
}



const  empty: CharaceterListEntity =  {
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: ""
  },
  results:[]
}

export const RickAndMortyListPage:React.FC= () => {
  const navigate = useNavigate();
  let [list, setList] = React.useState<CharaceterListEntity>(empty);
  const {page, setPage} = React.useContext(MyContext)

  React.useEffect(() => {
    getMembers(page).then((data) => setList(data));
  }, [page]);


  const handleNavigationBack= () => {
    navigate("/chooseList");
  };

  const handleNextPage= () => {
    page <20 ?setPage(page+1) : alert("no puedes ir para adelante")
  };

  const handleBackPage= () => {
    page >1 ?setPage(page-1) : alert("no puedes ir para atras")
  };

  return (
    <>
      <h1>Rick and morty List</h1>

      <ListRow list={list}/>
      <button onClick={handleBackPage}>pagina anterior</button>
      <button onClick={handleNextPage}>siguiente sigueinte</button>
      <br />
      <button onClick={handleNavigationBack}>Volver al menu</button>
    </>
  );
};