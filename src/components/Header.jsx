import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
//npm install @mui/icons-material

function Header() {

  return (
    <div className="header">

      <div className="header__logo">
        <StorefrontIcon fontSize="large" className="header__logoImage"/>
        <h2 className="header__logoTitle">eMarket</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>
        
      </div>

      <div className="header__nav">

        <div className="nav__item">
          <span className="nav__itemLineOne">Merhaba Misafir</span>
          <span className="nav__itemLineTwo">Giriş Yap</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Alışveriş</span>
          <span className="nav__itemLineTwo">Listeniz</span>
        </div>

        <div className="nav__itemBasket">
        <ShoppingBasketIcon />
          <span className="nav__itemLineTwo nav__basketCount">22</span>
        </div>

      </div>
    </div>
  )
}

export default Header
