import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline} from '@mui/material';

function Layout() {
  return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={100}  m={2}>NAVEGATION</Grid>
                <Grid item flex={1} m={2} spacing={8}>
                    <Grid xs={12}  height={'20vh'} md={2}>HEADER</Grid>
                    <Grid xs={12}  height={'20vh'} md={2}>USER INPUT</Grid>
                    <Grid xs={12}  height={'45vh'}>THREAD</Grid>
                </Grid>
                <Grid item flex={1} m={2}>
                    <Grid xs={12}  height={'10vh'}>SEARCH</Grid>
                    <Grid xs={12}  height={'20vh'} md={2}>CONTAINER 1</Grid>
                    <Grid xs={12}  height={'30vh'} md={2}>CONTAINER 2</Grid>
                    <Grid xs={12}  height={'22vh'}>CONTAINER 3</Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout;