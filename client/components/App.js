const NavBar = ({ links }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-between">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-white">{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
