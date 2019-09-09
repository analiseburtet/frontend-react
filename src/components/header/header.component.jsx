import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo} from "../../assets/logo.svg"

const Header = () => (
    <div className="header">
        <Logo className="logo"/>
    </div>
)
export default Header;