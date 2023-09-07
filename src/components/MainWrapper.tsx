import { Outlet } from "react-router-dom";

function MainWrapper() {
  return (
    <main className="flex w-full h-full mx-auto px-4 pt-12 max-w-screen-xl">
      <Outlet />
    </main>
  );
}

export default MainWrapper;
