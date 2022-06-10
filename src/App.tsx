import './App.css';
import React, { useState, useEffect } from "react";
import { BIBLE_DATA } from "./bible-data";


function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [chapter, setChapter] = useState(1);
  const [verseNumber, setVerseNumber] = useState(1);
  const [verseText, setVerseText] = useState("");
  
  const randomNumber = (arr: Array<any>) => {
    return Math.floor(Math.random() * arr.length)
  }
  
  
  
  const getRandomVerse = () => {
    const theBook = BIBLE_DATA.books[randomNumber(BIBLE_DATA.books)];
    setBookTitle(theBook.title);
    
    console.log("the book: "+theBook.title);
    
    const theChapter = theBook.chapters[randomNumber(theBook.chapters)];
    setChapter(theChapter.chapter);
    
    console.log("the chapter: "+theChapter.chapter);
    console.log("the chapter length: "+ theChapter.verses.length);
    
    const theVerse = theChapter.verses[randomNumber(theChapter.verses)];
    
    const theVerseText = theVerse.verseText;
    const theVerseNumber = theVerse.verseNumber;

    setVerseText(theVerseText);
    setVerseNumber(theVerseNumber);
    
    console.log({theVerseText});
    
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Bible Verse</h1>
      </header>
      
      <div className='content'>
        <button style={{
          width: "200px",
          height: "100px"
        }} onClick={() => {
          getRandomVerse()
        }}>Get Random Book</button>
        <p>Book: {bookTitle}</p>
        <p>Chapter: {chapter}</p>
        <p>Verse: {verseText}</p>
        <p>Verse Number: {verseNumber}</p>
      </div>
    </div>
  );
}

export default App;
