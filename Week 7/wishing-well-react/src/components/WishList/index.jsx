import Wish from '../Wish'

function WishList({wishes, setWishes}){
    console.log(wishes)
    return(
        <div className='wish-container'>
            {wishes.map((wishText, index) => <Wish key={index} wishText={wishText}/>)}
        </div>
    )
}

export default WishList;
