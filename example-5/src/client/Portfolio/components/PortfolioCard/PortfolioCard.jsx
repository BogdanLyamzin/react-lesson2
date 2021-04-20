import React from 'react';

import {styles} from "./styles";

const PortfolioCard = ({src, name})=> {
    return (
        <div style={styles.item}>
            <img style={styles.img} src={src} alt="#"/>
            <h4 style={styles.name}>{name}</h4>
        </div>
    )
};

export default PortfolioCard;