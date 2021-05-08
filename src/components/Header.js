import React, { useState } from 'react'
import styled from 'styled-components'
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Header = ({ onSubmit }) => {
    const [input, setInput] = useState('');


    const onSearchSubmit = (e) => {
        e.preventDefault();
        onSubmit(input)
    }

    return (
        <Wrapper className='wrapper'>
            <LogoWrapper className='logo__wrapper'>
                <IconButton>
                <PinterestIcon />
                </IconButton>

            </LogoWrapper>
            <HomePageButton className='Home__button'>
                <a href='/'>Hompage</a>
            </HomePageButton>
            <FollowingButton className='follwing__button'> 
            <a href='/' >Following</a>
            </FollowingButton>
            
            <SearchWrapper >
            <SearchBarWrapper className='input__search'>
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <form>
                    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type='submit' onClick={onSearchSubmit}></button>
                </form>

            </SearchBarWrapper>

            </SearchWrapper>
            <IconWrapper className='icons__wrapper'>
                <IconButton>
                    <NotificationsIcon className='header__icons__wrapper' />
                </IconButton>
                <IconButton>
                    <TextsmsIcon className='header__icons__wrapper' />
                </IconButton>
                <IconButton>
                    <FaceIcon className='header__icons__wrapper'/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon className='header__icons__wrapper' />
                </IconButton>
            </IconWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    height: 50px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`;
const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`;

const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`;

const HomePageButton = styled(HomeButtons)`
    background-color: rgb(17, 17, 17);

    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`;
const FollowingButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover{
        background-color: #e1e1e1;
    }
`;
const SearchWrapper = styled.div`
    flex: 1;
`;
const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }
    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }
    form > button {
        display: none;
    }
    input:focus {
        outline: none
    }
`;

const IconWrapper = styled.div`

`;
export default Header
