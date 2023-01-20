import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { Logo } from '../utils/contants'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack direction="row" 
    alignItems="center"
    justifyContent="space-between" 
    sx={{ position: 'sticky', background: '#000', top: '0', py: '10px' }}>

        <Link to="/" style={{ alignItems: 'center', display: 'flex' }}>
            <img src={Logo} alt="Logo" height="45"/>
        </Link>

        <SearchBar/>
    </Stack>
)

export default Navbar