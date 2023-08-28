import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeft, BsPause, BsPlay, BsArrowRight } from "react-icons/bs";
import {Button} from "react-bootstrap";

const Kontrole = props => {

    const prethodnaPesma = () => {
        console.log('prethodna pesma');
        props.prethodnaPesma();
    }
    const sledecaPesma = () => {
        console.log('sledeca pesma');
        props.sledecaPesma();
    }
    const pauza = () => {
        console.log('pauza');
        props.pauza();
    }
    const play = () => {
        console.log('play');
        props.play();
    }


    return (
        <div style={
            {
                textAlign: 'center'
            }
        }>
            <Button className="m-1" onClick={() => {prethodnaPesma()}} variant="primary"><BsArrowLeft/></Button>
            <Button className="m-1" onClick={() => {play()}} variant="primary"><BsPlay/></Button>
            <Button className="m-1" onClick={() => {pauza()}} variant="primary"><BsPause/></Button>
            <Button className="m-1" onClick={() => {sledecaPesma()}} variant="primary"><BsArrowRight/></Button>

        </div>
    );
};

Kontrole.propTypes = {
    prethodnaPesma: PropTypes.func.isRequired,
    sledecaPesma: PropTypes.func.isRequired,
    pauza: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired
};

export default Kontrole;