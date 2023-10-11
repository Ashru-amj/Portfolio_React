import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import './styles.scss';

const portfolioData = [
    {
        id: 1,
        name: 'GAME',
        image: ImageOne,
        category: 'Development',
        link: 'https://ashru-amj.github.io/Stone-Paper-Scissor/'
    },
    {
        id: 5,
        name: 'Page Design',
        image: ImageFive,
        category: 'Design',
        link: 'https://ashru-amj.github.io/Micro-Project-2/#'
    },
    {
        id: 2,
        name: 'Calculator',
        image: ImageTwo,
        category: 'Development',
        link: 'https://ashru-amj.github.io/calculator1/'
    },
    {
        id: 4,
        name: 'Weather app',
        image: ImageFour,
        category: 'Design',
        link: 'https://ashru-amj.github.io/Weather-app/'
    },
    {
        id: 3,
        name: 'Card Validation',
        image: ImageThree,
        category: 'Development',
        link: 'https://ashru-amj.github.io/React_Micro_Project1/'
    },
    
    
];

const filterData = [
    {
        filterId: 1,
        label: 'All',
    },
    {
        filterId: 2,
        label: 'Development',
    },
    {
        filterId: 3,
        label: 'Design',
    },
];

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null)

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index)
    }

    const filteredItems =
        filteredValue === 1
            ? portfolioData
            : portfolioData.filter((item) =>
                filteredValue === 2 ? item.category === 'Development' : item.category === 'Design'
            );

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent headerText="My portfolio" icon={<BsInfoCircleFill size={40} />} />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterData.map((item) => (
                        <li
                            className={item.filterId === filteredValue ? 'active' : ''}
                            onClick={() => handleFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="portfolio__content__cards">
                    {filteredItems.map((item, index) => (
                        <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="portfolio__content__cards__item__image-wrapper">
                                <a>
                                    <img alt="dummy data" src={item.image} />
                                </a>
                            </div>
                            <div className='overlay'>
                                {
                                    index === hoveredValue && (
                                        <div>
                                            <p>
                                                {item.name}
                                            </p>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button>Visit</button>
                        </a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

