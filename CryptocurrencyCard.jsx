import {Card} from "antd";
import React from "react";

function CryptocurrencyCard(props) {
    const {currency} = props

    const price: number = Math.round(currency.quote.USD.price)
    const averagePrice = currency.averagePrice
    const rank = currency.rank

    return (
        <div>
            <Card
                title={
                    <div className="flex items-center gap-3">
                        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt={}/>
                        <span>(currency.name)</span>
                    </div>
                }
                extra={<a href="#">More</a>}
                style={{
                    width: 300,
                }}
            >
                <p>Поточна ціна: {price}</p>
                <p>Середня ціна: {averagePrice}</p>
                <p>Рейтинг криптомонети: {rank}</p>
            </Card>
        </div>
    )
}

export default CryptocurrencyCard