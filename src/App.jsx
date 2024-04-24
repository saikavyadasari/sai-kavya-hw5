import React, { useState } from 'react'
import './App.css'
import { fetchData } from './controller';

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    const res = await fetchData();

    setData(res);
  }

  return (
    <div className="card">
      <p>
        Activity Name: {data && data.activity}
      </p>

      <p>
        Activity Price: {data && data.price}
      </p>

      <p>
        Activity Type: {data && data.type}
      </p>
      <button onClick={onClick}>
        Request Activity
      </button>
    </div>
  )
}

export default App
