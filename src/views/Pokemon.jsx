import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';


export default function Pokemon() {
    const [pokemonStats, setPokemonStats] = useState(null)
    const [types, setTypes] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.types)
            setTypes(data.types.map(({ type }) => type.name))
            setPokemonStats(data);
          })
          .catch((error) => {
            console.error('Error al cargar los datos:', error);
          });
    }, []);

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center md-4">
                <Col md={6} style={{ border: '1px solid grey'}} className="p-5">
                    <Row>
                        <Col md="6" style={{ display: 'flex', justifyContent: 'center' }}>
                            {pokemonStats && <Image style={{ height: 250, width: 250 }} src={pokemonStats.sprites.other.dream_world.front_default} />}
                        </Col>
                        <Col md="6">
                            <Stack gap={3}>
                                <div>Nombre pokemon</div>
                                {pokemonStats && <ul>
                                    {pokemonStats.stats.map((stat, index) => {
                                        return <li key={index}>{stat.stat.name}: {stat.base_stat} </li>
                                    })}
                                </ul>}
                                <div>
                                    {types && types.join(',')}
                                </div>
                            </Stack>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}