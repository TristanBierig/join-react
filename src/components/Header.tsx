import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Header.scss";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }} variant="dense">
        <img
          className="header__logo"
          src="src/assets/img/logo__white.svg"
          alt="Join logo"
          data-cy="header-logo"
        />

        <Typography variant="h6" color="inherit" component="div">
          Kanban Project Managment Tool
        </Typography>
        <Button color="secondary" variant="outlined">
          Test
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
