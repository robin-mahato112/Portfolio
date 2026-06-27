const navItems = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'];

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Robin Mahato home">
        RM
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
