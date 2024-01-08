import { useState } from 'react'
import './App.css'
import {Grid, Box} from "@mui/material"
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box  m={0} p={0} height={"100vh"} >

    <Grid   container >
      <Grid  height={"100vh"}  item md={2} display={["none", 'none','none', 'block']}>
        <Sidebar />
      </Grid>
      <Grid height={"100vh"} item md={12} sm={12} lg={10} xl={10} xs={12}>
        <Dashboard />
      </Grid>
    </Grid>
    </Box>
  )
}

export default App
