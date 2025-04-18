import Link from "next/link";
import { Button } from "../ui/button";
import LoginDialog from "../LoginDialog";

export function Header() {
  const routes = [
    {
      href: "/",
      text: "Logo",
    },
    {
      href: "/about",
      text: "About",
    },
  ];

  return (
    <nav className="flex gap-2 px-2 justify-center bg-slate-300 p-1">
      {routes.map((i) => {
        return (
          <Link
            key={i.href}
            href={i.href}
            className="bg-white rounded-md border px-3 py-1 border-slate-400"
          >
            {i.text}
          </Link>
        );
      })}
      <LoginDialog />
    </nav>
  );
}
