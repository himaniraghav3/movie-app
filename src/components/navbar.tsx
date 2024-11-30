import { Navbar } from "flowbite-react";

export const Header = () => {
  return (
    <Navbar fluid className="bg-black">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl text-cyan-700 font-semibold">
          Movie App
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/movies" className="text-gray-300">
          Home
        </Navbar.Link>
        <Navbar.Link href="/favourites" className="text-gray-300">
          Favourites
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
