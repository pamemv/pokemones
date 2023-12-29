import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";


function Pokemones() {
    const [id, setId] = useState("");
    const [opciones, setOpciones] = useState([])
    const navigate = useNavigate();

    const irAPokemones = () => {
        navigate(`/pokemones/${id}`);
    };

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
          .then((response) => response.json())
          .then((data) => {
            setOpciones(data.results);
          })
          .catch((error) => {
            console.error('Error al cargar los datos:', error);
          });
    }, []);
 
    return (
        <Stack gap={3} className="mt-5 col-md-4 mx-auto">     
            <div className="mx-auto"> Selecciona un pókemon</div>
            <div className="col-md-8 mx-auto">
                <Form.Select onChange={({ target }) => setId(target.value)}>
                    <option >Pókemones</option>
                    {opciones.map(({ name }, index) => {
                        return <option key={index} value={name}>{name}</option>
                    })}
                </Form.Select>
            </div>
            <div className="mx-auto">
                <Button variant="dark" onClick={ irAPokemones }>Ver detalle</Button>{' '}
            </div>
        </Stack>
    );
}

export default Pokemones;