import { Outlet } from "react-router-dom";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-100 min-h-screen p-1 md:p-0">
      {/* <header className="h-14 w-full bg-emerald-400 flex space-between fixed">
        <div className="h-full relative flex items-center">test</div>
      </header> */}
      <div className="h-14"></div>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};
