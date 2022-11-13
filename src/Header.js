import "./css/Header.css"
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Header() {
    const [f_style, set_fStyle] = useState({color: "white", background: "orange"})
    const [s_style, set_sStyle] = useState({color: "black", background: "white"})

    return (
        <div className="header__container">
            <Link to="/catalog">
                <button className="header_button" style={f_style} onClick={() => {
                    set_sStyle({color: "black", background: "white"});
                    set_fStyle({color: "white", background: "orange"});
                }}>Catalog
                </button>
            </Link>
            <Link to="/favourites">
                <button className="header_button" style={s_style} onClick={() => {
                    set_fStyle({color: "black", background: "white"});
                    set_sStyle({color: "white", background: "orange"});
                }}>Favourites</button>
            </Link>
        </div>
    )
}