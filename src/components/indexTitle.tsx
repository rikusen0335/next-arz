type title = {
  title: string
}

const IndexTitle: React.FC<title> = (props) => {
  return (
    <h2 className="text-center">{props.title}</h2>
  )
}

export default IndexTitle