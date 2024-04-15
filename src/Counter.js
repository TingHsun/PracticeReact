import { useState,useEffect } from 'react';

function Counter(prop) {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(null);
  const info = '無資料';

  useEffect(() => {
    const info = prop.data[0].seq + ":" + prop.data[0].name;
    setName(info);
  }, []);

  function AddCount() {
    let newIndex = index + 1;
    setIndex(newIndex);
    if(prop.data[newIndex] === undefined)
    {
      setName(info);
    }
    else
    {
      setName(prop.data[newIndex].seq + ":" + prop.data[newIndex].name);
    }
  }

  return (
    <div>
      <button onClick={AddCount}>
        增加按鈕
      </button>
      <h1>{name}</h1>
      {/* <h2>{index}</h2> */}
      {/* <h3>{info}</h3> */}
    </div>
  );
}

export default Counter;
