import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {CharacterDetails}  from "./models";

const DefaultDetails = (): CharacterDetails => {
  return {
    id: 0,
    name: "",
    status:"" ,
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
  };
};

export const RickAndMortyDetailPage: React.FC = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<CharacterDetails>(DefaultDetails());

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
            <th>status</th>
            <th>type</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          <tr key={details.id}>
            <td>
              <img src={details.image} style={{ width: "6rem" }} />
            </td>
            <td>
              <span>{details.id}</span>
            </td>
            <td>
              <span>{details.name}</span>
            </td>
            <td>
              <span>{details.status}</span>
            </td>
            <td>
              <span>{details.type}</span>
            </td>
            <td>
              <span>{details.gender}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/rickAndMorty-list">Back to list page</Link>
    </>
  );
};
