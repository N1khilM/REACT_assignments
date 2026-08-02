/*

Password Generator

NEW: Multiple state variables

Requirements
Length slider
Uppercase
Lowercase
Numbers
Symbols
Copy button
Password strength indicator

*/
import { useState } from "react";

export default function PasswordGen() {
  const [password, setPassword] = useState("");
  const [numSet, setNumSet] = useState(false);
  const [specialSet, setSpecialSet] = useState(false);
  const [lCharSet, setLCharSet] = useState(false);
  const [uCharSet, setUCharSet] = useState(false);
  const [copy, setCopy] = useState("");
  const [strength, setStrength] = useState("");
  const [length,setLength]=useState(12);

  const generatePassword = () => {
    const lchar = "abcdefghijklmnopqrstuvwxyz";
    const uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Num = "0123456789";
    const Special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let genpassword = "";

    const checkStrength = () => {
      let strengthCount = 0;
      if (lCharSet) strengthCount++;
      if (uCharSet) strengthCount++;
      if (numSet) strengthCount++;
      if (specialSet) strengthCount++;

      if (strengthCount === 1) {
        setStrength("Weak");
      } else if (strengthCount === 2) {
        setStrength("Moderate");
      } else if (strengthCount === 3) {
        setStrength("Strong");
      } else if (strengthCount === 4) {
        setStrength("Stronger");
      } else {
        setStrength("LOL tick something");
      }
    };

    checkStrength();

    if (!lCharSet && !uCharSet && !numSet && !specialSet) {
      setPassword("Please tick at least one box");
      return;
    }

    let currentCharset = "";
    for (let i = 0; i < length; i++) {
      if (uCharSet) currentCharset += uchar;
      if (lCharSet) currentCharset += lchar;
      if (numSet) currentCharset += Num;
      if (specialSet) currentCharset += Special;
      const randomIndex = Math.floor(Math.random() * currentCharset.length);
      genpassword += currentCharset[randomIndex];
    }
    setPassword(genpassword);
    setCopy("COPY");
  };

  function copypass() {
    try {
      navigator.clipboard.writeText(password);
      setCopy("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
      setCopy("Failed to copy");
    }
  }

  return (
    <>
      <h1>PASSWORD GENERATOR</h1>
      <br />
      <input
        type="checkbox"
        onChange={(e) => {
          setLCharSet(e.target.checked);
        }}
      />
      Include Lowercase Letters <br />
      <input
        type="checkbox"
        onChange={(e) => {
          setUCharSet(e.target.checked);
        }}
      />
      Include Uppercase Letters <br />
      <input
        type="checkbox"
        onChange={(e) => {
          setNumSet(e.target.checked);
        }}
      />
      Include Numbers <br />
      <input
        type="checkbox"
        onChange={(e) => {
          setSpecialSet(e.target.checked);
        }}
      />
      Include Special Characters <br />
      <br/>
      <br/>
      This is a slider for characters in password and default is "12"..<br/> min="4" & max "16"<br/>
      <input type="range" min="4" max="16" onChange={(e)=>{setLength(e.target.value)}}/>
      <br/>
      <br/>
      <button
        onClick={() => {
          generatePassword();
        }}
      >
        Generate Password
      </button>
      <br />
      <p>{password}</p>
      {password && !password.includes("Please tick at least one box") && (
        <button onClick={copypass}>{copy}</button>
      )}
      <p> strength of password:{strength}</p>
    </>
  );
}
