import Header from "./header";

export default function Layout({
  children,
  home = false
}) {
  return (
    <>
      <Header />
      <div>
        {home ? (
          <img className="jumbotron" src="/images/arz_header.jpg"></img>
        ) : (
            <></>
          )}
        {children}
      </div>
    </>
  )
}
