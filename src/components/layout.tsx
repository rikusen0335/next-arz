export default function Layout({ children, home }) {
  return (
    <div>
      {home ? (
        <img className="jumbotron" src="/images/arz_header_with_logo.jpg"></img>
      ) : (
        <></>
      )}
      {children}
    </div>
  )
}