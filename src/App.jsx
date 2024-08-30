import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies} from './components/index.js';
import './App.css';
import {Button, Menu, Typography, Space, Avatar} from 'antd'


function App() {
  return (
      <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/exchanges' element={<Exchanges />} />
                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              </Routes>
            </div>
          </Layout>
          <div className='footer'>
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
              MyCryptoHub <br />
              All right reserved
            </Typography.Title>
            <Space >
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/cryptocurrencies'>CryptoCurrencies</Link>
            </Space>
          </div>
        </div>
      </div>
  );
}

export default App;
