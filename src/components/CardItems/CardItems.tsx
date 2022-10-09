import React from 'react';
import { Card } from '../Card/Card';
import { ICardItems } from './CardItems.model';

export const CardItems = (props: ICardItems) => {
  return (
    <div className="cards">
      {props.items.map((cardItem) => (
        <div className="card-item" key={cardItem.id}>
          <Card
            title={cardItem.title}
            imgURL={cardItem.image}
          />
        </div>
      ))}
    </div>
  );
};
