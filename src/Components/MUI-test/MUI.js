import React from 'react'
import { 
  AppBar,
  Toolbar,
  Button,
  Paper,
  Grid,
  Link,
  TextField,
  Typography 
} from '@material-ui/core'

export default function MUI() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar/>

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
        <Paper elevation={0} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid.
        </Paper>
        <Paper variant="outlined">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid.
        </Paper>
        <Paper variant="outlined" square>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid.
        </Paper>
        <Paper elevation={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid.
        </Paper>
      </Grid>
      
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
          <Button variant="contained" color="primary">
            button 1
          </Button>
          <Button variant="contained" color="primary">
            button 2
          </Button>
          <Button variant="contained" color="primary">
            button 3
          </Button>

      </Grid>
      <Link href="/" onClick={e=>e.preventDefault()} color="inherit">
        Link
      </Link>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
        <TextField label="Standard" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Outlined" variant="outlined" />
      </Grid>
    </div>
  )
}
