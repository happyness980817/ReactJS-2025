import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const apiCaller = async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/tickers");
    const data = await response.json();
    // console.log(data);
    setCoins(data);
    setLoading(false);
  };
  useEffect(() => {
    apiCaller();
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length} coins total)`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
