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
                <UpArrow /> <span className='font-semibold text-green-900'>{num.toFixed(4)}</span>
            </div>
        </>);
    }
    else {
        return (<>
            <div className="flex items-center gap-1 cursor-pointer">
                <DownArrow /> <span className='font-semibold text-red-800'>{num.toFixed(4)}</span>
            </div>
        </>);
    }
}
function plusOrMinusInr(num) {
    if (num >= 0) {
        return (<>
            <div className="flex items-center gap-1 cursor-pointer">
                <UpArrow /> <span className='font-semibold text-green-900'>₹{num.toFixed(4)}</span>
            </div>
        </>);
    }
    else {
        return (<>
            <div className="flex items-center gap-1 cursor-pointer">
                <DownArrow /> <span className='font-semibold text-red-800'>₹{num.toFixed(4)}</span>
            </div>
        </>);
    }
}

const Coin = ({ coin }) => {
    return (
    
        <Link to={`/coin/${coin.id}`}>
            <div className="grid grid-cols-3 sm:grid-cols-5 font-light p2 rounded border-blue-400 border-b  hover:bg-blue-400">
                <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={coin.image} alt={coin.name} />
                    <p className='font-semibold'>{coin.name}</p><small className="font-xs"> ({coin.symbol})</small>
                </div>
                <span className="font-medium items-center">{currencyFormat(coin.current_price)}</span>
                <span className="font-medium items-center">{plusOrMinus(coin.price_change_percentage_24h)}%</span>
                <div className='hidden sm:block items-center'>
                    <p className='font-semibold'>Price Change In 24h</p>
                    <span>{plusOrMinusInr(coin.price_change_24h)}</span>
                </div>
                <div className='hidden sm:block items-center'>
                    <p className='font-semibold'>Market Cap</p>
                    <span>{currencyFormat(coin.market_cap)}</span>
                </div>
            </div>
        </Link>
    )
}

export default Coin