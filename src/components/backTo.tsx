import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/navbar.css';
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackTo = (props: { text: string, link: string }) => {
    return (
        <div style={{ zIndex: '1500' }} className="position-fixed start-0 px-2">
            <div className="backTo-group-flush">
                <Nav.Link style={{ display: 'flex', verticalAlign: 'middle', justifyContent: 'center' }} className="list-group-item-backTo list-group-item-action list-group-item-light-backTo" href={props.link}><AiOutlineArrowLeft style={{ color: '#FAD157', height: '100%', width: '20' }}></AiOutlineArrowLeft><p className='backTo' style={{ height: '100%', width: 'auto', fontSize: '100%' }}>{props.text}</p></Nav.Link>
            </div>
        </div>
    );
}

export default BackTo;