import { useEffect, useState, useCallback } from 'react';
import { Menu, Spin } from 'antd';
import axios from "axios";
import CryptocurrencyCard from './CryptocurrencyCard';

// import React from 'react'
// import './App.css'


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const App = () => {
    const [currencies, setCurrencies] = useState([]);
    const [currencyId, setCurrencyId] = useState(1);
    const [currencyData, setCurrencyData] = useState(null);


    const fetchCurrencies = useCallback(() => {
        axios.get('http://127.0.0.1:3000/cryptocurrencies')
            .then((response) => {
                const currenciesResponse = response.data;
                const menuItems = [
                    getItem('Список криптовалют', 'g1', null,
                        currenciesResponse.map(c => {
                            return { label: c.name, key: c.id };
                        }),
                        'group'
                    )
                ];
                setCurrencies(menuItems);
            })
            .catch(error => console.error('Error fetching currencies:', error));
    }, []);

    const fetchCurrency = useCallback(() => {
        axios.get(`http://127.0.0.1:3000/cryptocurrencies/${currencyId}`)
            .then((response) => {
                setCurrencyData(response.data);
            })
            .catch(error => console.error('Error fetching currency:', error));
    }, [currencyId]);

    useEffect(() => {
        fetchCurrencies();
    }, [fetchCurrencies]);

    useEffect(() => {
        setCurrencyData(null);
        fetchCurrency();
    }, [currencyId, fetchCurrency]);

    const onClick = (e) => {
        setCurrencyId(e.key);
    };

    return (
        <div className="flex">
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['g1']}
                mode="inline"
                items={currencies}
                className="h-screen overflow-scroll"
            />
            <div className='mx-auto my-auto'>
                {currencyData ? <CryptocurrencyCard currency={currencyData} /> : <Spin size="large" />}
            </div>
        </div>
    );
};

export default App;
