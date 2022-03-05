import React from 'react';
import './views/Header.css';
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const history = useNavigate();
    return ( 
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton onClick={() => history(backButton)}>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

        <Link to="*">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2021/04/Telegram-logo.png"
          alt="tinder logo"
        />
        </Link>
        
        <Link to="/chat">
        <IconButton>
        <QuestionAnswerIcon className="header__icon" fontSize="large"/>
        </IconButton>
        </Link>
        </div>
    );
    }


export default Header;