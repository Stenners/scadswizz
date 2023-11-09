import { Outlet } from "react-router-dom";
import { Transition } from "../Transition";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Transition>
      <div className="p-1 md:p-0 min-h-screen">
        {/* <header className="h-14 w-full bg-emerald-400 flex space-between fixed">
        <div className="h-full relative flex items-center">test</div>
      </header> */}
        <div className="h-14"></div>
        <main>
          <Outlet />
        </main>
      </div>
    </Transition>
  );
};
