import React, {useState} from 'react'
import Checkbox from './Components/Checkbox'
import './App.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Navbar from './Components/Navbar'
import { Input } from '@mui/material';
import { Container } from '@mui/system'
import Footer from './Components/Footer'

function App() {
  const [passwordGen, setPasswordGen] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const [idioma, setIdioma] = useState(true)

  const [handleText, setHandleText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChangeUppercase = () => {
    setPasswordGen({
      ...passwordGen,
      uppercase: !passwordGen.uppercase,
    });
  };

  const handleChangeLowercase = () => {
    setPasswordGen({
      ...passwordGen,
      lowercase: !passwordGen.lowercase,
    });
  };

  const handleChangeNumbers = () => {
    setPasswordGen({
      ...passwordGen,
      numbers: !passwordGen.numbers,
    });
  };

  const handleChangeSymbols = () => {
    setPasswordGen({
      ...passwordGen,
      symbols: !passwordGen.symbols,
    });
  };

  const setPasswordLength = (val) => {
    setPasswordGen({
      ...passwordGen,
      length: val,
    });
  };

  function generatePassword() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>String.fromCharCode(code));
    const upperCaseLetters = lowerCaseLetters.map((letter) =>letter.toUpperCase());

    const { length, uppercase, lowercase, numbers, symbols } = passwordGen;

    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandleText(characters.join(''));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }

  return (
    
      <>
      <Navbar/>
    <div className="wrapper">
        <div className="container wrapper-box">
          <div className='divImg'>
          <img className='imgHome' src={"https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7966.jpg?w=740&t=st=1667168608~exp=1667169208~hmac=d9d651a4663b6dc52f224aeba119f01e3ce3f404cdde70cbf04ae81eb3f3f8ed"} alt="" />
          </div>
                       <Button variant="contained" color="action" sx={{m: 3}} className='btnLanguage' onClick={()=> setIdioma(!idioma)}>
          Cambiar idioma / Switch language        
        </Button>
          
        <div className="password-box">
        <input
            type="text"
            value={handleText}
            placeholder=""
            autoComplete="off"
            onChange={(e) => setHandleText(e.target.value)}/>
        <Button variant="contained" color="primary" sx={{m:2}}
            onClick={() => {
              if (handleText.length > 0) {
                navigator.clipboard.writeText(handleText);
                setCopied(true);
                setInterval(() => {
                  setCopied(false);
                }, 2000);
              }
            }}>
           {copied ? 'Copiado!' : 'Copiar'}
        </Button>
        </div>
        <br/>
          <div className='reminder'>
          <Typography variant="h6" sx={{textAlign:'center', color:'#4dabf5'}}>
           {idioma? "Recordatorio: para crear tu contraseña, necesitas seleccionar al menos una opción " : "Reminder: to create your password you need to select at least one option"  } 
          </Typography>
          </div>
        <div className="word-crieteria__box">
        <div>
        <label>{idioma? "Largo de la contraseña" : "Password length"}</label>
        </div>
        <div>
        <Input placeholder=""
              type="number"
              min="4"
              max="20"
              sx={{ml: 2}}
              value={passwordGen.length}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
        </div>
        </div>
        <div className="word-crieteria__box">
        <div>
        <label>{idioma? "Incluir mayúsculas" : "Include uppercase letters"} </label>
        </div>
        <div>
        <Checkbox value={passwordGen.uppercase} onChange={handleChangeUppercase}/>
        </div>
        </div>
        <div className="word-crieteria__box">
        <div>
        <label>{idioma? "Incluir minúsculas" : "Include lowercase letters"} </label>
        </div>
        <div>
        <Checkbox
              value={passwordGen.lowercase}
              onChange={handleChangeLowercase}/>
        </div>
        </div>
        <div className="word-crieteria__box">
        <div>
        <label>{idioma? "Incluir numeros" : "Include numbers"}</label>
        </div>
        <div>
            <Checkbox
              value={passwordGen.numbers}
              onChange={handleChangeNumbers}/>
        </div>
        </div>
        <div className="word-crieteria__box">
        <div>
        <label> {idioma? "Incluir símbolos" : "Include symbols"}</label>
        </div>
        <div>
        <Checkbox
              value={passwordGen.symbols}
              onChange={handleChangeSymbols}/>
        </div>
        </div>
        <div>
    <Button variant="contained" color="primary" onClick={generatePassword}> {idioma? "Generar contraseña" : "Generate password"} </Button>
    </div>
    </div>
    </div>
  <Footer/>
    </>
  );
}

export default App
