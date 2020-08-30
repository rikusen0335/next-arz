export const PlayerCard = () => {
    const image = '/images/arz_logo_tranparent_red.png'

    return (
        <div className="player-card relative w-full h-full">
            <div className="absolute background w-full h-full"></div>
            <img className="absolute profile-pic object-cover" src={image} width="auto" height="auto" />
            <div className="contents mt-auto">
                <div className="name"></div>
            </div>
        </div>
    )
}