import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home
                        </Link>
                    </li>

                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/blog">
                            Blog
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/game">
                            Play a game
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
