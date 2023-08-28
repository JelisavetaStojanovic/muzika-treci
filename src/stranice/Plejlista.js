import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "react-bootstrap";
import podaci from "../podaci/podaciOPesmama.js";
import {Form} from "react-bootstrap";
import Pesme from "../komponente/Pesme";
import Kontrole from "../komponente/Kontrole";


const Plejlista = props => {

    const refPretraga = useRef();

    const [pesme, setPesme] = useState(podaci);
    const [trenutnaPesma, setTrenutnaPesma] = useState(podaci[0]);
    const [indexPesme, setIndexPesme] = useState(1);
    const [audio, setAudio] = useState(new Audio(trenutnaPesma.pesma));

    const pretrazi = () => {
        console.log(refPretraga.current.value);
        const novaListaPesama = podaci.filter((pesma) => {
            return pesma.nazivPesme.toLowerCase().includes(refPretraga.current.value.toLowerCase());
        });
        setPesme(novaListaPesama);
        resetujPlaylistu(novaListaPesama);
    }

    const resetujPlaylistu = (novaListaPesama) => {
        pauza();
        setTrenutnaPesma(novaListaPesama[0]);
        setIndexPesme(1);
        setAudio(new Audio(novaListaPesama[0].pesma));
    }


    const playPesma = (pesma) => {
        let pesmaZaPustanje = pesma;
        let audioZaPustanje = new Audio(pesmaZaPustanje.pesma);
        if (audio !== null) {
            console.log('audio je razlicit od null');
            audio.pause();
        }
        setAudio(audioZaPustanje);
        audioZaPustanje.play();
    }

    const setPesma = (pesma) => {
        console.log('usao ovde, izabrana pesma je: ' + pesma.id);
        setTrenutnaPesma(pesma);
        setIndexPesme(pesma.id);
    }

    const sledecaPesma = () => {
        console.log('sledeca pesma');
        let trenutnaPesma = pesme[indexPesme];
        if (indexPesme < pesme.length) {
            trenutnaPesma = pesme[indexPesme]
            setTrenutnaPesma(trenutnaPesma);
            setIndexPesme(indexPesme + 1);
        } else {
            trenutnaPesma = pesme[0];
            setTrenutnaPesma(trenutnaPesma);
            setIndexPesme(1);
        }
        playPesma(trenutnaPesma);
    }

    const prethodnaPesma = () => {
        console.log('prethodna pesma');
        let trenutnaPesma = pesme[indexPesme];
        if (indexPesme > 1) {
            trenutnaPesma = pesme[indexPesme - 2]
            setTrenutnaPesma(trenutnaPesma);
            setIndexPesme(indexPesme - 1);
        } else {
            trenutnaPesma = pesme[pesme.length - 1];
            setTrenutnaPesma(trenutnaPesma);
            setIndexPesme(pesme.length);
        }
        playPesma(trenutnaPesma);
    }

    const pauza = () => {
        console.log('pauza');
        audio.pause();
    }

    const play = () => {
        console.log('play');
        audio.play();
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Moja plejlista</h1>
                        <Form.Control className="mb-2" type="text" placeholder="Pretraga" ref={refPretraga} onChange={() => {pretrazi()}} />
                        <Pesme pesme={pesme} playPesma={playPesma} setPesma={setPesma}/>
                    </Col>
                    <Col>
                        <h1 className="text-center">Kontrole playera</h1>
                        <p className="text-center">Trenutna pesma: </p>
                        <h3 className="text-center">{trenutnaPesma.nazivPesme} </h3>
                        <p className="text-center">{trenutnaPesma.autor} </p>
                        <Kontrole prethodnaPesma={prethodnaPesma} play={play} pauza={pauza} sledecaPesma={sledecaPesma}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

Plejlista.propTypes = {

};

export default Plejlista;