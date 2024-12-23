import Card from 'antd/es/card';
import React from 'react';
import * as PropTypes from 'prop-types';

interface Cryptocurrency {
  id: number;
  name: string;
  rank: number;
  averagePrice: number;
  quote: {
    USD: {
      price: number;
    };
  };
}

interface CryptocurrencyCardProps {
  currency: Cryptocurrency;
}

const CryptocurrencyCard: React.FC<CryptocurrencyCardProps> = ({ currency }) => {
  const price = Math.round(currency.quote.USD.price);
  const { averagePrice, rank } = currency;
  
// function CryptocurrencyCard({ currency }: CryptocurrencyCardProps) {
//   const price = Math.round(currency.quote.USD.price);
//   const { averagePrice, rank } = currency;

  return (
    <div>
      <Card
        title={
          <div className="flex items-center gap-3">
            <img
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
              alt={currency.name}
            />
            <span>{currency.name}</span>
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
  );
}

CryptocurrencyCard.propTypes = {
  currency: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    averagePrice: PropTypes.number.isRequired,
    quote: PropTypes.shape({
      USD: PropTypes.shape({
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CryptocurrencyCard;





// function CryptocurrencyCard(props) {
//     const { currency } = props;

//     const price: number = Math.round(currency.quote.USD.price);
//     const averagePrice = currency.averagePrice;
//     const rank = currency.rank;

//     return (