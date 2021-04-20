import React from 'react';
import PortfolioCard from "../PortfolioCard";

// const div = document.createElement("div")
// div.id = "portfolio-list";
// div.style.fontSize = "24px";
const Portfolio = ({list})=> {
    const portfolioElements = list.map(item => <PortfolioCard {...item} />);

    return (
        <div id="portfolio-list" style={{display: "flex"}}>
            {portfolioElements}
        </div>
    )
}

export default Portfolio;