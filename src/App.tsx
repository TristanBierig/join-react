import { Container, Drawer } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <>
      <Header />
      
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center"></Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
