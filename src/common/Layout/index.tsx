import { Outlet, useLocation } from "react-router-dom";
import { Transition } from "../Transition";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Transition>
      <div className="p-2 md:p-0">
        <header className="h-14 w-full flex justify-between">
          <div className="h-full relative text-xs opacity-50">
            Project Papyrus v1.0
          </div>
          {location.pathname !== "/login" && (
            <a className="h-full" href="/login">
              logout
            </a>
          )}
        </header>
        <div className="h-14"></div>
        <main>
          <Outlet />
        </main>
      </div>
    </Transition>
  );
};
