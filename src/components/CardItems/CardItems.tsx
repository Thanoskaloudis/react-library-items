import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { ICardItems } from './CardItems.model';
import "./CardItems.scss";

export const CardItems = (props: ICardItems) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query: string) => {
    setQuery(query.trim());
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showingItems =
  query === ""
    ? props.items
    : props.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="cards">
        <div className="cards--top">
          <input
            className="cards--top__search"
            type="text"
            placeholder="Search Library"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
      </div>
      {showingItems.map((cardItem) => (
        <div className="cards--item" key={cardItem.id}>
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
