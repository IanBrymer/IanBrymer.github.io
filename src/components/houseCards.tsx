import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const HouseCards = (props: { imageSrc: string, houseName: string, paragraph: string, paddingTop: string, width?: string }) => {
    // Create a new variable to hold the adjusted width
    const adjustedWidth = props.width || '28rem'; // Default to '28rem' if props.width is empty

    return (
        <Col loading='lazy' className='d-flex justify-content-center' style={{ paddingTop: props.paddingTop }}>
            <Card style={{ width: adjustedWidth, height: 'min-content', borderRadius: '0 0 0 0' }}>
                <Card.Img loading='lazy' style={{ overflow: 'hidden', borderRadius: '0 0 0 0' }} variant="top" src={require(`../pictures/${props.imageSrc}`)} />
                <Card.Body style={{ backgroundColor: '#E4ECF5' }}>
                    <Card.Title className='houseCardHeadings'>{props.houseName}</Card.Title>
                    <Card.Text className='houseCardParagraphs'>
                        {props.paragraph}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default HouseCards;
