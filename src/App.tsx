import React, { useEffect } from 'react';
import * as LibraryAPI from "./utils/LibraryAPI";
import './App.scss';

function App() {

  useEffect(() => {
    const getLibraryItems = async () => {
      const res: any = await LibraryAPI.getAll();
      console.log(res);
    };

    getLibraryItems();
  }, []);
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
