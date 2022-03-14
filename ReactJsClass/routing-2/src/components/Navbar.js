import React from 'react'
import {Link, NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>


                    <li>
                        <Link to="/about.html">
                        About
                        </Link>
                    </li>


                    <li>
                        <Link to="/blog">
                        Blog
                        </Link>
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
