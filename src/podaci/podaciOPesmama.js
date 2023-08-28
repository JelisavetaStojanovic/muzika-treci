import react from 'react';
import jedinaMoja from "../pesme/jedinamoja.mp3";
import izadjiMala from "../pesme/izadjiMala.mp3";
import gledamDrinu from "../pesme/gledamDrinu.mp3";
import poslednjiBoem from "../pesme/poslednjiBoem.mp3";
import ambisMogZivota from "../pesme/ambisMogZivota.mp3";
import nijeMeneDusoUbilo from "../pesme/nijeMeneDusoUbilo.mp3";
import nocMiTeDuguje from "../pesme/nocmiteduguje.mp3";

const podaci = [
    {
        id: 1,
        nazivPesme: "Jedina moja",
        autor: "Marinko Rokvic",
        pesma: jedinaMoja,
    },
    {
        id: 2,
        nazivPesme: "Izadji mala",
        autor: "Ferid Avdic",
        pesma: izadjiMala,
    },
    {
        id: 3,
        nazivPesme: "Gledam Drinu",
        autor: "Mitar Miric",
        pesma: gledamDrinu,
    },
    {
        id: 4,
        nazivPesme: "Poslednji boem",
        autor: "Seki Turkovic",
        pesma: poslednjiBoem,
    },
    {
        id: 5,
        nazivPesme: "Ambis mog zivota",
        autor: "Novica Zdravkovic",
        pesma: ambisMogZivota,
    },
    {
        id: 6,
        nazivPesme: "Nije mene duso ubilo",
        autor: "Goran Dimitrijadis Dima",
        pesma: nijeMeneDusoUbilo,
    },
    {
        id: 7,
        nazivPesme: "Noc mi te duguje",
        autor: "Zdravko Colic",
        pesma: nocMiTeDuguje,
    }
];

export default podaci;