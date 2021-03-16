import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabButton from './components/TabButton';
import RenderTab from './components/RenderTab';
import './App.css';

function App() {
  // Set State Properties
  const tabs = [
    {label: "Page One", content: "Content on Page One."},
    {label: "Page Two", content: "Content on Page Two."},
    {label: "Page Three", content: "Content on Page Three."}
  ];
  const [tab, setTab] = useState(tabs[0]);

  const handleTabClick = (idx) => {
    console.log(tabs[idx]);
    setTab(tabs[idx]);
  }

  return (
    <div className="App">
      <header className="bg bg-primary">
        <div className="d-flex flex-row justify-content-around">
        {
          tabs.map((t, i) => <TabButton 
          key={i}
          idx={i}
          handleClick={handleTabClick}
          />)
        }
        </div>
      </header>
      <div className="container">
        <RenderTab 
          label={tab.label}
          content={tab.content}
        />
      </div>
    </div>
  );
}

export default App;
