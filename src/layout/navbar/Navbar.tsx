import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { name: "Task", path: "/" },
    { name: "User", path: "/user" },
  ];

  return (
    <nav className="container mx-auto flex gap-4 p-4 ">
      {navLinks.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.path}
          className={({ isActive }: { isActive: boolean }) =>
            `text-sm font-medium ${
              isActive ? "text-blue-600 " : "text-gray-700"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
