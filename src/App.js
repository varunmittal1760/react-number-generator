import { useEffect, useState } from "react";

function App() {
  const [on, setOn] = useState(false);
  const [arr, setArr] = useState([]);

  console.log(on, arr);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100);
    setArr([...arr, newRandomNumber]);
  };

  useEffect(() => {
    if (on) {
      const startRandomNumberGeneration = () => {
        setInterval(generateRandomNumber, 2000);
      };

      startRandomNumberGeneration();
    }
  });

  return (
    <div>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        Generate Random Number
      </button>
      {console.log(arr)}
      {arr.map((num) => {
        return <p>{num}</p>;
      })}
    </div>
  );
}

export default App;