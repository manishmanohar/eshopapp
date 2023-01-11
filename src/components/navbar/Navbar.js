import React, { useContext, useState } from "react"
import { ShoppingCart } from "@mui/icons-material/"
import { AppBar } from "@mui/material"
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';


export default function Navbar() {
    const { user, setUser } = useContext(UserContext);


    // function toggleShown(){
    //     setisShown(preShown=>!preShown)
    // }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));


    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));


    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    return (
        <nav >

            <AppBar>

                <div className="navbar">
                    <div className="nav--elements">
                        <ShoppingCart className="nav--logo" />
                        <h3 className="nav--title">upGrad E-Shop</h3>
                    </div>

                    <div className="nav--search">
                        {user.loggedIn && <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }} />
                        </Search>}
                    </div>
                    {!user.loggedIn && <Link to="/login" className="nav--items">Login</Link>}
                    {!user.loggedIn && <Link to="/signup" className="nav--items">Signup</Link>}
                    {user.loggedIn && <Link to="/Home" className="nav--items">Home</Link>}
                    {user.isAdmin && <Link to="/AddProduct" className="nav--items">Add Product</Link>}
                    {user.loggedIn && <Link to="/Logout" className="nav--items" style={{ backgroundColor: 'red', marginTop: '15px', padding: '10px', marginRight: '10px', marginBottom: '10px',borderRadius:"3px" }}>LOGOUT</Link>}
                </div>

            </AppBar>


        </nav>
    )
}