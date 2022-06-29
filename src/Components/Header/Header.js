import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';

import {AuthContext, FirebaseContext} from '../../store/Context';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
function Header() {
  const history = useHistory();
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={
          () => {
            history.push('/')
          }
        } className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>{
            history.push('/login')
          }}>{user ? user.displayName : 'Login'}</span>
          <hr />
        </div>
          {user && <span onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div onClick={()=>{
            history.push('/create')
          }} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
