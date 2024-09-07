import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames"; // Keep the imported classNames

// Nu mai folosim proprietatea current hardcodata
const navigation = [
  { name: "Home", to: "/dashboard" },
  { name: "About", to: "/dashboard/about" },
  { name: "Calendar", to: "/dashboard/calendar" },
];

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 px-3 relative half-border-bottom"
    >
      <div>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="block h-6 w-6 group-data-[open]:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 group-data-[open]:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center mt-[3rem]">
              <img
                alt="Your Company"
                src="/GreyLogo1.svg"
                className="h-[10rem] w-auto z-1"
              />
            </div>

            <div className="hidden sm:flex items-center mr-[10rem]">
              <div className="flex space-x-4 items-center justify-center">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.to === "/dashboard"} // Adaugă această condiție pentru "Home"
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <FaRegUser className="h-6 w-6 rounded-full text-gray-400 hover:text-white focus:outline-none" />
                </MenuButton>
              </div>

              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="absolute w-full bg-gray-800 bg-opacity-90 top-[6rem] left-0 z-10">
        <div className="space-y-1 px-2 pb-3 pt-2 flex items-center flex-col">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to} // Changed href to to
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
