import { LoginForm } from "../../features/authentication/components/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <div className="h-full w-full absolute top-0 left-0 z-10 overflow-x-hidden">
        <div
          className="absolute w-[150%] h-[150%] opacity-[0.05] animate-pan-loop"
          style={{
            background: "url(/test.png)",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      <div className="w-full h-full relative flex items-center justify-center pt-12">
        <LoginForm />
      </div>
    </>
  );
};
