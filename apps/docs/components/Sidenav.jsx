import Link from "next/link";

const navigation = [
  {
    name: "Overview",
    links: [
      {
        name: "Quick Start",
        href: "#",
      },
      {
        name: "License",
        href: "#",
      },
      {
        name: "Contribute",
        href: "#",
      },
    ],
  },
  {
    name: "Components",
    links: [
      {
        name: "Avatar (soon)",
        href: "#",
      },
      {
        name: "Alert (soon)",
        href: "#",
      },
      {
        name: "Button",
        href: "/components/button",
      },
    ],
  },
];

export const Sidenav = () => {
  return (
    <div>
      <div className="w-60 h-full shadow-md bg-white p-4 absolute">
        <ul className="relative">
          {navigation.map((item) => (
            <li key={item.name} className="relative">
              <span className="font-extrabold text-slate-900">{item.name}</span>
              <ul>
                {item.links.map((link) => (
                  <li key={link.href} className="relative">
                    <Link href={link.href}>
                      <a
                        className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:font-bold transition duration-300 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="dark"
                      >
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
