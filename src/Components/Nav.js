import { NavLink } from 'react-router-dom'

export default function Nav(){
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="/" style={{color : 'red'}}><b>News</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav" >
                                <li className="nav-item">
                                  <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/business" >Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/entertainment" >Entertainment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/general" >General</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/health" >Health</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/science" >Science</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/sports" >Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/technology" >Technology</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}
