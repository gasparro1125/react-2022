import React from "react";
import {MembersListEntity} from "./models";
import {ListRow} from "./list-rows"
import {MyContext} from "../context"
import { useNavigate } from "react-router-dom";


const getMembers = (org:string):Promise<MembersListEntity[]>=> {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>{
    if(response.ok){
      return response.json()
    }else return []
  })
}

export const ListPage:React.FC= () => {
  const navigate = useNavigate();
  const [members, setMembers] = React.useState<MembersListEntity[]>([]);
  const {company, setCompany} = React.useContext(MyContext)

  React.useEffect(() => {
      getMembers(company).then((data) => setMembers(data));
  }, []);


  const handleClick = ()=>{
    getMembers(company).then((data)=>setMembers(data))  
  }

  const handleNavigationBack= () => {
    navigate("/chooseList");
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <input type="text" value={company}  onChange={(e)=> setCompany(e.target.value)}/>
      <button onClick={handleClick}>Search</button>

      <ListRow members={members}/>


      <button onClick={handleNavigationBack}>Volver</button>
    </>
  );
};