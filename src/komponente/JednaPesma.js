import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from "react-bootstrap";

const JednaPesma = props => {

    const kliknutaPesma = () => {
        props.setPesma(props.pesma);
        props.play(props.pesma);
        console.log(props.pesma);
    }

    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                onClick={() => {kliknutaPesma()}}
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.pesma.nazivPesme}</div>
                    {props.pesma.autor}
                </div>
            </ListGroup.Item>
        </>
    );
};

JednaPesma.propTypes = {
    pesma: PropTypes.object.isRequired,
    play: PropTypes.func.isRequired,
    setPesma: PropTypes.func.isRequired
};

export default JednaPesma;