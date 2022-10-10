import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { ICardItem, ICardItems } from './CardItems.model';
import "./CardItems.scss";

export const CardItems = (props: ICardItems) => {
  const [query, setQuery] = useState("");
  const [sortState, setSortState] = useState("");
  const [showingItems, setshowingItems] = useState<ICardItem[]>([]);

  useEffect(() => {
    setshowingItems(props.items);
  }, [props])

  const updateQuery = (query: string) => {
    setQuery(query.trim());

    if(query === "") {
      setshowingItems(props.items);
    } else {
      setshowingItems(
        props.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ))
    }
  };

  const updateSortState = (event: string) => {
    setSortState(event);

    if(event === "duration") {
      setshowingItems(sortItemsByDuration());
    } else if(event === "alphabetical") {
      setshowingItems(sortItemsByTitle());
    }
  };

  const sortItemsByDuration = (): ICardItem[] => {
    return showingItems.sort((a, b) => +a.duration.replace(/\D/g, "") - +b.duration.replace(/\D/g, ""));
  }

  const sortItemsByTitle = (): ICardItem[] => {
    return showingItems.sort((a, b) => {
      if (a.title > b.title) {
          return 1;
      }
      if (b.title > a.title) {
          return -1;
      }
      return 0;
    });
  }

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
          <div className="cards--top__sort">
            <label className="cards--top__sort__label">Sort By</label>
            <select className="cards--top__sort__select" data-testid='select'
             defaultValue={'DEFAULT'} onChange={(e) => updateSortState(e.target.value)}>
              <option value="DEFAULT" disabled>None</option>
              <option value="duration">Duration</option>
              <option value="alphabetical">Alphabetical</option>
          </select>
          </div>
      </div>
      {showingItems.map((cardItem) => (
        <div className="cards--item" key={cardItem.id} data-testid='card'>
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
