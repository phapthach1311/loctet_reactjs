import './Home.css';
import data from './data'
import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Home() {
  
  
  return (
    <div className='body'>
      <h1>Kính mời cả nhà mình nhập Tên Thánh, Họ Tên để nhận Lộc Thánh Lời Chúa cho năm Nhâm Dần 2022:</h1>
      <form className='form' action='/loctet'>
        <div className='formx'>
          <div className='form1'>
            <label>Tên Thánh </label>
            <input type="text" required></input>
          </div>
          <div className='form2'>
            <label>Họ Tên </label>
            <input type="text" required></input>
          </div>
        </div>
        
      </form>
      <button><Link to='/loctet' className='lala'>HÁI LỘC THÁNH</Link></button>
    </div>
  );
}

export default Home;
