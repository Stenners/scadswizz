import Logo from "../Logo";
import { TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.emailfield.value;
    // Simple id for session
    const sessionId = Math.random().toString(16).slice(2);
    console.log(email, sessionId);
    // Send data
    // Do it
    // Then navigate
    navigate("/player");
  }

  return (
    <div className="mock-wrapper">
      <Logo />
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="emailfield"
            label="Enter your SCA email"
            variant="outlined"
            fullWidth
            sx={{ marginRight: "1em" }}
          />
          <Button variant="contained" type="submit">
            OK
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Intro;
