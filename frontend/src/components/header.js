import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top py-3">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#" style={{ color: 'var(--primary-color)' }}>
                    <i className="fas fa-water me-2"></i><span style={{ color: 'black' }}>LEYTEXPLORE</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home" style={{ color: 'black' }}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="destinationsDropdown" role="button" data-bs-toggle="dropdown" style={{ color: 'black' }}>
                                Destinations
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="destinationsDropdown">
                                <li><a className="dropdown-item" href="#beaches">Beaches</a></li>
                                <li><a className="dropdown-item" href="#islands">Islands</a></li>
                                <li><a className="dropdown-item" href="#mountains">Mountains</a></li>
                                <li><a className="dropdown-item" href="#historical">Historical Sites</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" style={{ color: 'black' }}>
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="communityDropdown" role="button" data-bs-toggle="dropdown" style={{ color: 'black' }}>
                                Community
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="communityDropdown">
                                <li><a className="dropdown-item" href="#reviews">Reviews</a></li>
                                <li><a className="dropdown-item" href="#forums">Forums</a></li>
                                <li><a className="dropdown-item" href="#help">Help/FAQ</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="btn ms-2" href="#tours" style={{ backgroundColor: 'black', color: 'white' }}>
                                Discover
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
