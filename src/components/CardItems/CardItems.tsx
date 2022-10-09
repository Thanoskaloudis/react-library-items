import React from 'react';
import { Card } from '../Card/Card';
import { ICardItems } from './CardItems.model';
import "./CardItems.scss";

export const CardItems = (props: ICardItems) => {
  return (
    <div className="cards">
      {props.items.map((cardItem) => (
        <div className="cards-item" key={cardItem.id}>
          <Card
            title={cardItem.title}
            imgURL={cardItem.image}
            duration={cardItem.duration}
            type={cardItem.type}
            link={cardItem.url}
            description={cardItem.intro}
          />
        </div>
      ))}
    </div>
  );
};
