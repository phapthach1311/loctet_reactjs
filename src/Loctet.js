import './Loctet.css';
import data from './data'
import React ,{useState, useEffect} from 'react'

function Loctet() {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  })
  useEffect(() => {
    let length = data.length;
    let newIndex = Math.floor(Math.random() * length);
    setIndex(newIndex);
  }, [])

  if(!loading){
    return <div className='loading'>
        <div className='spin'></div>
      </div>
  }
  return (
    <div className='bodys'>
      <img src={data[index].img} />
    </div>
  );
}

export default Loctet;
