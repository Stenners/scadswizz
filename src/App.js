// import './App.css';
import AppMock from "./components/AppMock";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#81E4BD",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppMock />
    </ThemeProvider>
  );
}

export default App;
