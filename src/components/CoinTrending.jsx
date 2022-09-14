import React from 'react'

const CoinTrending = ({coin}) => {

    return (
    <>
        <div className='font-light mb-2 p-2 border-gray-200 border-2-rounded hover:bg-gray-200'>
            <div className='flex items-center gap-1'>
                <span className='font-bold'>{coin.score+1}.</span>
                <img src={coin.small} alt={coin.name} className="w-6"/>
                <span className='font-semibold'>{coin.name}</span><small className='text-xs'>({coin.symbol})</small>
                <span>Rank {coin.market_cap_rank}</span>
            </div>
        </div>
    </>
  )
}

export default CoinTrending