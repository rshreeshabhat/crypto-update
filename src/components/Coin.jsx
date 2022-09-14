import React from 'react'
import { DownArrow, UpArrow } from '../icons/icons'
import { Link } from 'react-router-dom'

function currencyFormat(num) {
    return '₹' + num.toString()
}

function plusOrMinus(num) {
    if (num >= 0) {
        return (<>
            <div className="flex items-center gap-1 cursor-pointer">
                <UpArrow /> <span className='font-medium text-green-900'>{num}</span>
            </div>
        </>);
    }
    else {
        return (<>
            <div className="flex items-center gap-1 cursor-pointer">
                <DownArrow /> <span className='font-medium text-red-500'>{num}</span>
            </div>
        </>);
    }
}

const Coin = ({ coin }) => {
    return (
    
        <Link to={`/coin/${coin.id}`}>
            <div className="grid grid-cols-3 sm:grid-cols-4 font-light p2 rounded border-blue-400 border-b  hover:bg-blue-400">
                <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={coin.image} alt={coin.name} />
                    <p className='font-semibold'>{coin.name}</p><small className="font-xs"> ({coin.symbol})</small>
                </div>
                <span className="font-medium">{currencyFormat(coin.current_price)}</span>
                <span className="font-medium">{plusOrMinus(coin.price_change_percentage_24h)}</span>
                <div className='hidden sm:block'>
                    <p className='font-semibold'>Market Cap</p>
                    <span>{currencyFormat(coin.market_cap)}</span>
                </div>
            </div>
        </Link>
    )
}

export default Coin