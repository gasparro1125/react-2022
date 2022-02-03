import React from "react";
import { Link, generatePath } from "react-router-dom";
import {MembersListEntity} from "./models";

interface Props{
    members : MembersListEntity[]
}

export const ListRow: React.FC<Props> = (props) => {

    const {members} = props
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
                {members?.map((member) => (
                    <tr key={member.id}>
                    <td>
                        <img src={member.avatar_url} style={{ width: "5rem" }} />
                    </td>
                    <td>
                        <span>{member.id}</span>
                    </td>
                    <td>
                        <Link to={generatePath("/detail/:id", { id: member.login })}>
                        {member.login}
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
  );
};