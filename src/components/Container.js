import Navbar from "./Navbar";

export default function Container({ children, title }) {
  return (
    <div className="container">
      <h1>{ title }</h1>
      <Navbar />
      { children }
    </div>
  )
}