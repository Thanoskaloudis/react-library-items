import React, { useEffect, useState } from 'react';
import * as LibraryAPI from "./utils/LibraryAPI";
import { ICardItem } from './components/CardItems/CardItems.model';
import { CardItems } from './components/CardItems/CardItems';
import './App.scss';

function App() {
  const [libraryItems, setLibraryItems] = useState<ICardItem[]>([]);

  useEffect(() => {
    const getLibraryItems = async () => {
      const res: ICardItem[] = await LibraryAPI.getAll();
      setLibraryItems(res);
    };

    getLibraryItems();
  }, []);

  return (
    <div className="app">
      <CardItems items={libraryItems}/>
    </div>
  );
}

export default App;
