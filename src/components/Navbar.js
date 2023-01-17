import Link from "next/link";

const links = [
  { href: "/", badge: "Home" },
  { href: "/about", badge: "About" },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        {links.length !== 0 && links.map(link => <Link href={link.href}>{link.badge}</Link>)}
      </div>
    </nav>
  )
}