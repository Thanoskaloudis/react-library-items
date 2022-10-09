import React from 'react';
import { ICard } from './Card.model';
import "./Card.scss";

export const Card = (props: ICard) => {
  return (
    <div className="card">
      <div className="card__image-holder">
        <img
          className="card__image"
          src={props.imgURL}
          alt=""
        />
      </div>
      <div className="card-title">
        <span className="card-title__subtitle">{props.type}</span>
        <span className="card-title__subtitle">{props.duration}</span>
        <h2>{props.title}</h2>
      </div>
      <div className="card-intro">
      {props.description}
      </div>
      <div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">View pathway</a>
      </div>
    </div>
  );
};
