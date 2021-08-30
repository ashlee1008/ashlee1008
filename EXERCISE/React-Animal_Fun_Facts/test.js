import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom'

const title = "";
const background = <img alt="ocean" src="/images/ocean.jpg" className="background" />
const animalsElement = []
const showBackground = true
const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
        {showBackground && background}
        <div className="animals">
            {animalsElement}
        </div>
        <p id="fact"></p>
    </div>
);

function displayFact(e) {
    const optionIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length);
    document.getElementById('fact').innerHTML = animals[e.target.alt].facts[optionIndex]
}

for (const animal in animals) {
    animalsElement.push(<img
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
        onClick={displayFact}
    />)
}

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
)



