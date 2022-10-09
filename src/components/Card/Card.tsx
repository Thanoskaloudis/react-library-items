import React from 'react';
import { ICard } from './Card.model';
import { RiBook2Fill } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';
import "./Card.scss";

export const Card = (props: ICard) => {
  return (
    <div className="card">
      <div className="card--image"> 
        <img
          src={props.imgURL}
          alt=""
        />
      </div>
      <div className="card--title">
        <span className="card--title__subtitle"> <RiBook2Fill /> {props.type} • {props.duration}</span>
        <h2 className="card--title__title">{props.title}</h2>
      </div>
      <div className="card--description">
      {props.description}
      </div>
      <div className="card--link">
        <a className="card--link__href" href={props.link} target="_blank" rel="noopener noreferrer">View pathway</a>
        <FaArrowRight />
      </div>
    </div>
  );
};
