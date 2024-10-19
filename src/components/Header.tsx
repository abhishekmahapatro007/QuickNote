import { AppBar,Toolbar,Typography } from "@mui/material"
import { logo } from "../constants/constants"

const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <img src={logo} alt="logo"  style={{ width: 35 }}/>
            <Typography style={{ margin: 12,fontWeight:540,fontSize:26,marginTop:14}}>
                QuickNote
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header
