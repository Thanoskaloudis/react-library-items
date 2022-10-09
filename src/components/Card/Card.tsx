import React from 'react';
import { ICard } from './Card.model';

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
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};
