import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './Header.css';
function Header() {
    return (
        
        <div className="header">
            <Link to="/">
        <img className ="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <div className="header_searchIcon"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
        </div>

        <div className="header_nav">
            <div className="header_option">
                <span className ="header_optionLineOne">안녕하세요</span>
                <span className ="header_optionLineTwo">로그인하기</span>
            </div>

            <div className="header_option">
                <span className ="header_optionLineOne">돌아가기</span>
                <span className ="header_optionLineTwo">주문내역</span>
            </div>

            <div className="header_option">
                <span className ="header_optionLineOne">반가워요</span>
                <span className ="header_optionLineTwo">구독과 좋아요</span>
            </div>
           <Link to="/checkout">
            <div className="header_optionBasket">   
            <FontAwesomeIcon icon={faBasketShopping} />
                <span className="header_optionLineTwoheader_basketCount">
                    0
                </span>
            </div>
            </Link>
           
        </div>
    </div>
    
   
    );
}

export default Header;