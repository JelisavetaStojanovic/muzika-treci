import React from 'react';
import PropTypes from 'prop-types';
import JednaPesma from "./JednaPesma";
import {ListGroup} from "react-bootstrap";

const Pesme = props => {

    const play = (pesma) => {
        props.playPesma(pesma);
    }

    const setPesma = (pesma) => {
        //console.log('usao Pemse, izabrana pesma je: ' + pesma.id);
        props.setPesma(pesma);
    }

    return (
        <>
            <ListGroup as="ol" numbered>
{
    props.pesme.map((pesma) => {
    return (
        <JednaPesma pesma={pesma} key={pesma.id} play={() => {play(pesma)}} setPesma={() => {setPesma(pesma)}} />
        );
    })
}
            </ListGroup>
        </>
    );
};

Pesme.propTypes = {
    pesme: PropTypes.array.isRequired,
    playPesma : PropTypes.func.isRequired,
    setPesma: PropTypes.func.isRequired
};

export default Pesme;