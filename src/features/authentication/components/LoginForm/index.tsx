import { useState } from "react";
import { Button } from "../../../../common/Button";
import Logo from "../../../../common/Logo";
import { TextInput } from "../../../../common/TextInput";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(`/?eid=${email}`);
    return;
  };

  const handleUpdateEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div className="bg-white py-12 rounded-l shadow-xl w-full md:w-1/2 flex items-center flex-col">
      <Logo />
      <p className="text-center mt-6 mb-5 w-1/2">
        Welcome to the custom ad server demo. Use your sca email address to
        access the portal.
      </p>
      <form>
        <TextInput
          value={email}
          placeholder="Email Address"
          onChange={handleUpdateEmail}
          className="mb-3"
        />
        <Button onClick={handleSubmit}>Get Started</Button>
      </form>
    </div>
  );
};
