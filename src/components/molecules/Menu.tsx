import { usePathname } from "next/navigation";
import Link from "next/link";
import { nav } from "@/data/nav";

const Menu = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <nav className="w-full flex flex-col absolute left-0 top-[56px] bg-slate-200 dark:bg-slate-600 z-20">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleClose}
                  className={`py-4 px-6 text-xs hover:text-slate-900 hover:dark:text-slate-100 flex items-center ${
                    item.href === pathname
                      ? "text-black dark:text-white"
                      : "text-slate-400"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;

