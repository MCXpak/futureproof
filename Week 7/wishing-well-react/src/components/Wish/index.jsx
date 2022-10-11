function Wish({wishText}){
    return (
        <div className="wish">
        <p className="wish-text">{wishText}</p>
            <button className="grant-wish">Grant</button>
            <button className="deny-wish">Deny</button>
        </div>
    )
}

export default Wish;
