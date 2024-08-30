import React from 'react'
import millify from 'millify'
import {Typography, Row, Col, Statistic} from 'antd'
import { Link, NavLink } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import './LoadingAnimation.css' 
import {Cryptocurrencies} from './index'

function Homepage() {

    const {Title} = Typography
    const { data, isFetching } = useGetCryptosQuery(10)
    // console.log(data);
    const globalStats = data ?.data?.stats

    if (isFetching) return (
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    )


    return (
        <>
            <div>
                <Title level={2} className='heading'>Gobal Crypto Stats</Title>
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                    <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                    <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                    <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
                </Row>
            </div>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Cryptocurrensies in the World</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
        </>
    )
}

export default Homepage