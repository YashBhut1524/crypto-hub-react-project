import React, {useEffect, useState} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'
import { useGetCryptosQuery, useGetCryptoDetailsQuery } from '../services/cryptoApi'
import './LoadingAnimation.css' 


function Cryptocurrencies({simplified}) {


  const count = simplified ? 10 : 100;
  const {data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  // console.log(cryptos);
  const [searchTearm, setSearchTerm] = useState('')


  useEffect(()=>{
    const filteredData = cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTearm.toLowerCase()));
    setCryptos(filteredData)
  }, [cryptoList, searchTearm])


  if(isFetching) return (
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    )


  return (
    <div>
      {!simplified && (
        <div className='search-crypto'>
          <Input placeholder='Search Cryprocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      )}

      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl}></img>}
                hoverable
                >
                <p style={{fontWeight: 500}}>Price: {millify(currency.price)}</p>
                <p style={{fontWeight: 500}}>Market Cap: {millify(currency.marketCap)}</p>
                <p style={{color: currency.change > 0 ? 'Green' : 'Red', fontWeight: 600}}>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies