import React from "react";

export default function StockContainer({ user }) {
  const [userStocks, setUserStocks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9393/mystocks/?=${user.id}`)
      .then(res => res.json())
      .then(console.log);
  }, []);

  return <div>StockContainer</div>;
}
