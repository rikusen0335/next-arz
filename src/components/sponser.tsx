type SponserProp = {
  website: string
  logo: string
}

const Sponser: React.FC<SponserProp> = (props) => {
  return (
    <>
      <div className="sponser">
        <img src={props.logo}></img>
      </div>
    </>
  )
}

export default Sponser