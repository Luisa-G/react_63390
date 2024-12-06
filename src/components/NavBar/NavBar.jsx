import {Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Lombricultura GDL</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/lombrices">Lombrices</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/accesorios">Accesorios</Link>
                    </li>
                </ul>
                <CartWidget cartCount={1}/>
                </div>
            </div>
        </nav>
    )
}