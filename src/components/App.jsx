import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(info) {
  return (
    <Card
      key={info.id}
      emoji={info.emoji}
      name={info.name}
      description={info.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
