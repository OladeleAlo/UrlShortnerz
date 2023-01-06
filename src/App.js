import BackgrounImage from "./BackgrounImage";
import InputShortner from "./InputShortner";
import LinkResult from "./LinkResult";
import { useState } from "react";

function App() {
  const [inputValue,setInputValue] = useState("")

  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue}/>
      <BackgrounImage />
      <LinkResult  inputValue={inputValue}/>
    </div>
  );
}

export default App;
