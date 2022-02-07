import React from "react";
import {CharaceterListEntity} from "./models";
import {ListRow} from "./list-rows"
import {MyContext} from "../context"
import { useNavigate } from "react-router-dom";
import { useDebounce } from 'use-debounce';



const getMembersPagebyPage = (page:number):Promise<CharaceterListEntity>=> {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then((response) =>{
    if(response.ok){
      return response.json()
    }else return []
  })
}


const getMembersAllmmemberFiltered = (filter:string):Promise<CharaceterListEntity>=> {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`).then((response) =>{
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
  const {text, setText} = React.useContext(MyContext);
  const [debouncedFilter] =   useDebounce(text, 2000);
  let visible = true

  if(text==""){
    visible = false;
    React.useEffect(() => {
      getMembersPagebyPage(page).then((data) => setList(data));
    }, [page,debouncedFilter]);

  }else{ 
    visible = true;
    React.useEffect(() => {
    getMembersAllmmemberFiltered(debouncedFilter).then((data) => setList(data));
  }, [page,debouncedFilter]);}
 

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
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>

      <ListRow list={list}  debouncedFilter={debouncedFilter}/>

      <button onClick={handleBackPage} hidden={visible}>pagina anterior</button>
      <button onClick={handleNextPage} hidden={visible}>siguiente sigueinte</button>
      <br />
      <button onClick={handleNavigationBack}>Volver al menu</button>
    </>
  );
};