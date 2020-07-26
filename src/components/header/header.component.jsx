import React from 'react'
import { connect } from 'react-redux'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/newLogo.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/Cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                        :
                        <Link to="/signin" className="option">
                            SIGN IN
                        </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }

        </div>
    )
}

const mapStatetoProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStatetoProps)(Header)