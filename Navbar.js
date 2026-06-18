export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <nav className="flex justify-center space-x-8 p-4">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>
    </header>
  );
}
