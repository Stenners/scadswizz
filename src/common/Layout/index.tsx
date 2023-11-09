import { Outlet } from "react-router-dom";
import { Transition } from "../Transition";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Transition>
      <div className="p-2 md:p-0">
        <header className="h-14 w-full flex space-between fixed">
          <div className="h-full relative text-xs opacity-50">
            Project Papyrus v1.0
          </div>
        </header>
        <div className="h-14"></div>
        <main>
          <Outlet />
        </main>
      </div>
    </Transition>
  );
};
