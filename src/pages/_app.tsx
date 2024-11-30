import { Outlet } from "react-router-dom";
import { Header } from "../components/navbar";

export default function Home() {
  return (
    <section>
      <main>
        <Header />
        <Outlet />
      </main>
    </section>
  );
}
