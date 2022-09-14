import {Link} from 'react-router-dom';

const CoinTrending = ({ coin }) => {

    return (
        <Link to={`/coin/${coin.id}`}>
            <div className='font-light mb-2 p-2  border-blue-400 border-2-rounded border-2 hover:bg-blue-400'>
                <div className="flex justify-between">
                    <div className='flex items-center gap-1'>
                        <span className='font-bold'>{coin.score + 1}.</span>
                        <img src={coin.small} alt={coin.name} className="w-6" />
                        <span className='font-semibold'>{coin.name}</span><small className='text-xs'>({coin.symbol})</small>
                    </div>
                    <span>Rank {coin.market_cap_rank}</span>
                </div>
            </div>
        </Link>
    )
}

export default CoinTrending