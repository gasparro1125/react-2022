import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import {CharaceterListEntity,CharacterDetailResponse} from "./models";

interface Props{
    list : CharaceterListEntity,
    debouncedFilter:string,
}


export const ListRow: React.FC<Props> = (props) => {
    const {list,debouncedFilter} = props
    let [characters, setcharacters] = React.useState<CharacterDetailResponse[]>(list.results);

    useEffect(()=>{
        setcharacters(list.results)
    })

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {characters?.filter(character => character.name.includes(debouncedFilter) ).map((character) => (
                    <tr key={character.id}>
                    <td>
                        <img src={character.image} style={{ width: "5rem" }} />
                    </td>
                    <td>
                        <span>
                        {character.id}
                        </span>
                    </td>
                    <td>
                        <Link to={generatePath("/character/:id", {id:(character.id).toString() })}>
                            {character.name}
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
  );
};