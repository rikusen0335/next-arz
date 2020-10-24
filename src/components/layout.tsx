

export default function Layout({
  children,
  home = false
}) {
  return (
    <div>
      {home ? (
        <img className="jumbotron" src="/images/arz_header.jpg"></img>
      ) : (
          <></>
        )}
      {children}
    </div>
  )
}
