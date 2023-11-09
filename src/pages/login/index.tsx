import { LoginForm } from "../../features/authentication/components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center pt-24">
      <div className="h-full w-full absolute -top-full -left-full opacity-[0.05] z-10">
        <div
          className="w-[300%] h-[300%] animate-pan-loop"
          style={{
            background: "url(/test.png)",
            backgroundRepeat: "repeat",
          }}
        />
        LISTNR
      </div>

      <LoginForm />
    </div>
  );
};
