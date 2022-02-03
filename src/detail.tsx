import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetails } from "./models";

const DefaultDetails = (): MemberDetails => {
  return {
    id: "",
    login: "",
    avatar_url: "",
    company: "",
    type: "",
    public_repos: "",
    followers: "",
  };
};

export const DetailPage: React.FC = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState<MemberDetails>(DefaultDetails());

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setDetails(json));
  }, []);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>IDs</th>
            <th>Name</th>
            <th>Compañia</th>
            <th>Nivel</th>
            <th>Seguidores</th>
            <th>Repositorios Publicas</th>
          </tr>
        </thead>
        <tbody>
          <tr key={details.id}>
            <td>
              <img src={details.avatar_url} style={{ width: "6rem" }} />
            </td>
            <td>
              <span>{details.id}</span>
            </td>
            <td>
              <span>{details.login}</span>
            </td>
            <td>
              <span>{details.company}</span>
            </td>
            <td>
              <span>{details.type}</span>
            </td>
            <td>
              <span>{details.followers}</span>
            </td>
            <td>
              <span>{details.public_repos}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
