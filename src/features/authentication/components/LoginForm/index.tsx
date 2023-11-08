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
    <div className="py-12 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center flex-col">
      <Logo />
      <p className="text-center mt-6 mb-5 w-full w-full">
        Welcome to the custom ad server demo. Use your sca email address to
        access the portal.
      </p>
      <form className="w-full">
        <div className="h-14 mb-2">
          <TextInput
            value={email}
            placeholder="Email Address"
            onChange={handleUpdateEmail}
            className="mb-3 h-full"
          />
        </div>
        <div className="h-full">
          <Button className="h-full" onClick={handleSubmit}>
            Get Started
          </Button>
        </div>
      </form>
    </div>
  );
};
