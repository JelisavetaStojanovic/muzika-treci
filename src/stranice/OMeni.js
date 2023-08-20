import React from 'react';
import jelisaveta from '../slike/jelisaveta.png';
import {Col, Container, Row} from "react-bootstrap";

const OMeni = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={jelisaveta} alt="Jelisaveta" className="img-fluid" />
                    </Col>
                    <Col>
                        <h1>O meni</h1>
                        <p>
                            Jelisaveta Stojanović je izuzetno talentovana umetnica elektronske muzike, poznata pod imenom DJ Saveta. Njeno prisustvo na muzičkoj sceni je neizostavno, jer svojim veštim miksovanjem i izražajnim senzibilitetom za ritam, osvaja publiku širom sveta.</p>

                        <p> Rođena i odrasla u okruženju bogatom muzikom, Jelisaveta je razvila svoju strast prema muzici još u ranom uzrastu. Inspiraciju crpeći iz različitih žanrova, započela je svoj put kao DJ, istražujući svet elektronske plesne muzike. Njen instinktivan odnos s publikom i sposobnost da kreira besprekorne setove stekli su joj status traženog DJ-a kako na lokalnim, tako i na internacionalnim događajima.</p>

                        <p> Jelisavetin prepoznatljiv zvuk je spoj dubokih i progresivnih ritmova, vešto pomešanih sa melodičnim i atmosferskim elementima. Njeni setovi često vode slušaoce na transformišuće putovanje, stvarajući uronjeničko iskustvo na plesnom podijumu. Njena posvećenost izoštravanju svoje veštine i istraživanju muzičkih granica donela joj je vernu publiku i poštovanje kolega umetnika unutar elektronske muzičke zajednice.</p>

                        <p>   Van svojih nastupa, DJ Saveta je snažan zagovornik razvoja kulture elektronske muzike. Aktivno se uključuje u saradničke projekte, promoviše nove talente i doprinosi rastu elektronske muzičke scene svojom jedinstvenom umetničkom vizijom.</p>

                           <p> S izuzetnim talentom, neiscrpnom kreativnošću i nepokolebljivom posvećenošću veštini miksovanja, Jelisaveta Stojanović nastavlja da se razvija kao istaknuta figura u svetu elektronske muzike, ostavljajući neizbrisiv trag u srcima ljubitelja muzike širom sveta.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default OMeni;