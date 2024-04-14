import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';

const ExploreCards = (props: { immageSrc: string, text: string, to: string, paddingBottom: string, paddingTop: string }) => {
    return (
        <>
            <Nav.Link className='h-100' href={props.to}>
                <Row >
                    <Col><img className='exploreRowCard' alt={props.text} src={require(`../pictures/explore/${props.immageSrc}`)}></img></Col>
                    <Col className='pt-2 d-flex justify-content-center align-items-center'><p className='exploreP' style={{ paddingBottom: props.paddingBottom, paddingTop: props.paddingTop }}>{props.text}</p></Col>
                </Row>
            </Nav.Link>
        </>
    );
}

export default ExploreCards;