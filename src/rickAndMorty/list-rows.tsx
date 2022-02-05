import React, { Children } from "react";
import { Link, generatePath } from "react-router-dom";
import {CharaceterListEntity,CharacterDetailResponse} from "./models";

interface Props{
    list : CharaceterListEntity
}


export const ListRow: React.FC<Props> = (props) => {
    const {list} = props
    let [characters, setcharacters] = React.useState<CharaceterListEntity>(list);

    
    const chararters = list.results
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
                {chararters?.map((character) => (
                    <tr key={character.id}>
                    <td>
                        <img src={character.image} style={{ width: "5rem" }} />
                    </td>
                    <td>
                        <span>{character.id}</span>
                    </td>
                    <td>
                        <span>{character.name}</span>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
  );
};