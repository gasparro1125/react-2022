import React from "react";
import { Link, generatePath } from "react-router-dom";
import {CharaceterListEntity} from "./models";

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