import { Outlet, useLocation } from "react-router-dom";
import { Transition } from "../Transition";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <Transition>
      <div className="p-2 md:p-0">
        <header className="h-14 w-full flex justify-between">
          <div className="h-full relative text-xs opacity-50 flex">
            Project Papyrus alpha-alpha v0.0.00.0.0.0.1
          </div>
          {location.pathname !== "/login" && (
            <a className="h-full" href="/login">
              logout
            </a>
          )}
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </Transition>
  );
};
