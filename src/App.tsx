import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.scss';

import { Sidebar } from './components/Sidebar/Sidebar.component';
import { SkiMap } from './components/SkiMap/SkiMap.component';

import { Mountain } from './types';

const App: React.FC = () => {
  const [mountains, setMountains] = useState<Mountain[]>([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_HOST}/mountains/operating`).then((response: AxiosResponse) => {
      const mountains = response.data;
      setMountains(mountains);
    });
  }, []);

  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar mountains={mountains} />
      </div>
      <div className="SkiMap">
        <SkiMap mountains={mountains} />
      </div>
    </div>
  );
};

export default App;
