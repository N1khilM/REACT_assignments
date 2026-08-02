/*
Character Counter

NEW: Controlled Inputs

Requirements
Live count
Word count
Reading time
Maximum 250 characters
Progress bar
Show remaining characters
*/
import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const count = text.length;
  const wordcount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const maxLength = 10;
  const progress = (count / maxLength) * 100;
  const readingTime = Math.ceil((wordcount / 200) * 60); // Assuming average reading speed of 200 words per minute and to convert to second we just multify by 60

  function handleChange(e) {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  }

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea value={text} onChange={handleChange} />
      <p>Character Count: {count}</p>
      <p>Word Count: {wordcount}</p>
      <p>Estimated Reading Time: {readingTime} seconds</p>
      <p>Remaining Characters: {maxLength - count}</p>
      <div style={{ width: '50%', backgroundColor: 'silver', height: '8px', borderRadius: '4px', margin: '10px 0' }}>
      <div 
          style={{ 
            width: `${progress}%`, 
            backgroundColor: progress > 90 ? 'red' : 'blue', 
            height: '100%', 
            borderRadius: '4px',
            transition: 'width 0.1s ease'
          }} 
        />
        <p>Progress: {progress.toFixed(2)}%</p>
        
      </div>
    </div>
  );
}
