import { useState } from "react";
import { Button } from "../../../../common/Button";
import { TextInput } from "../../../../common/TextInput";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!isEmail(email)) {
      setError(
        "Hey! We need a valid email to start your stream, please enter a valid email address"
      );
    } else {
      navigate(`/?eid=${email}`);
    }
  };

  const handleUpdateEmail = (e: React.FormEvent<HTMLInputElement>) => {
    if (error) {
      setError(null);
    }
    setEmail(e.currentTarget.value);
  };

  return (
    <div className="py-12 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center flex-col z-20">
      <img src="/logo.svg" height="auto" width="50%" alt="listnrlogo" />
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
          <Button
            className="h-full"
            onClick={handleSubmit}
            disabled={!email || !!error}
          >
            Get Started
          </Button>
        </div>
        <div className="flex items-center justify-center pt-6">
          <span className="text-red-500 text-center">{error}</span>
        </div>
      </form>
    </div>
  );
};
