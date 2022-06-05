import './header.css'

const Header = () =>{
    return(
    <div className="header">
<nav className="navbar navbar-dark bg-dark justify-content-between">
<a className="navbar-brand">Marvel</a>
<form className="form-inline">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Все</button>
  </form>
</nav>
</div>
    )
}

export default Header;