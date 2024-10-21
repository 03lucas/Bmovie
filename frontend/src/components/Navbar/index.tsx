import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="bmovie-nav-content">
                    <h1>BMovie</h1>
                    <a href="https://github.com/03lucas">
                        <div className="bmovie-contact-container">
                            <GithubIcon />
                            <p className="bmovie-contact-link">/03lucas</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;