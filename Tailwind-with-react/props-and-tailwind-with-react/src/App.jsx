import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <Card
          name="Afifa"
          detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        />

        <Card
          name="Afifa"
          detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        />

        <Card
          name="Afifa"
          detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        />
      </div>
    </>
  );
}

export default App;
