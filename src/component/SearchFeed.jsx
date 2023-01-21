import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box, Typography,  } from '@mui/material'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])
  return (
    <Box display="flex" p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Box sx={{mr: {sm: '100px'}}} />
   <Box>
   <Typography variant="h5"
    fontWeight="bold" mb={2} sx={{color: 'white'}}>
      Search results for: <span style={{color: '#F31503', marginRight: '5px'}}>{searchTerm}</span>
      videos
    </Typography>

    <Videos videos={videos} />
   </Box>
 
  </Box>
  )
}

export default SearchFeed