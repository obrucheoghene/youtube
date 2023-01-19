import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './component/Navbar'
import Feed from './component/Feed'
import VideoDetail from './component/VideoDetail'
import ChannelDetail from './component/ChannelDetail'
import SearchFeed from './component/SearchFeed'
import { Box } from '@mui/material'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroudColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='video/:id' element={<VideoDetail />} />
        <Route path='channel/:id' element={<ChannelDetail />} />
        <Route path='search/:searchTerm' element={<SearchFeed />} />

      </Routes>
    </Box>

  </BrowserRouter>
)

export default App