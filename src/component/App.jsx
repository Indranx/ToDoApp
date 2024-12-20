import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createCard(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createCard)}
      <Footer />
    </div>
  );
}

export default App;
