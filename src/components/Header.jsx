import logo from "../assets/30.svg"

function Header () {
    return (
        <header>
            <img src={logo} class="logo" />
            <nav>
                <a href="" class="itens-menu">Promoções</a>
                <a href="" class="itens-menu">Blog</a>
                <a href="" class="itens-menu">Programação</a>
                <a href="" class="itens-menu">Anuncie</a>
            </nav>
            <div class="relogio">
                10:21
            </div>
        </header>
    )
}

export default Header