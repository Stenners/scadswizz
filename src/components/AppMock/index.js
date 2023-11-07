import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "../Intro";
import Player from "../Player";

import "./appMock.modules.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "player",
    element: <Player />,
  },
]);

function AppMock() {
  return (
    <div className="mock">
      <RouterProvider router={router} />
    </div>
  );
}

export default AppMock;
