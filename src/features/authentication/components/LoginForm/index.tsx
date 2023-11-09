import { useState } from "react";
import { Button } from "../../../../common/Button";
import { TextInput } from "../../../../common/TextInput";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { FadeIn } from "../../../../common/FadeIn";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError(
        "Hey! We need a valid email to sign you in, please enter a valid SCA email address"
      );
    } else {
      navigate(`/?eid=${email}`);
    }
  };

  const validateEmail = (email: string) => {
    if (!isEmail(email)) return false;
    if (!/@sca.com.au\s*$/.test(email)) return false;
    return true;
  };

  const handleUpdateEmail = (e: React.FormEvent<HTMLInputElement>) => {
    if (error) {
      setError(null);
    }
    setEmail(e.currentTarget.value);
  };

  return (
    <div className="py-12 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center flex-col z-20">
      <img
        src="/logo.svg"
        height="auto"
        width="50%"
        alt="listnrlogo"
        className="mb-10"
      />
      <FadeIn delay={0.15}>
        <p className="text-center mb-10 w-full w-full">
          Welcome to the <strong>SCADSWIZZ</strong> demo
          <br />
          <br /> Let's get started, try signing in with your{" "}
          <strong>SCA</strong> email!
        </p>
      </FadeIn>
      <form className="w-full">
        <FadeIn delay={0.3} direction="up">
          <div className="h-14 mb-2">
            <TextInput
              value={email}
              placeholder="Email Address"
              onChange={handleUpdateEmail}
              className="mb-3 h-full"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.45} direction="up">
          <div className="h-full">
            <Button
              className="h-full"
              onClick={handleSubmit}
              disabled={!email || !!error}
            >
              Get Started
            </Button>
          </div>
        </FadeIn>
        <div className="flex items-center justify-center pt-6">
          <span className="text-red-500 text-center">{error}</span>
        </div>
      </form>
    </div>
  );
};
