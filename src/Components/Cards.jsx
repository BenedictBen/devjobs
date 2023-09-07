import React from 'react'
import data from '../data/data.json'
import Navbar from './Navbar';

const Cards = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className='grid-container'>
        {data.map((list) => {
          return (
            <div key={list.id} className="cards">
              <img
                style={{ backgroundColor: list.logoBackground }}
                src={list.logo}
                background={list.logoBackground}
                className="logos"
                alt="logos"
              />
              <span className="flex">
                <p>{list.postedAt}</p>
                <p>.</p>
                <p>{list.contract}</p>
              </span>
              <span>
                <h2 style={{ marginBottom: "3px" }}>{list.position}</h2>
                <p>{list.company}</p>
              </span>
              <h5 style={{ marginTop: "32px", color: 'blue' }}>{list.location}</h5>
            </div>
          );
        })}
      </div>
      <div className='btn'>
      <button>Load More</button>
      </div>
    </div>
  );
}

export default Cards