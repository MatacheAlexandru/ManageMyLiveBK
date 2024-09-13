import { Disclosure } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";

import Logo from "./LogoHeader/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import UserMenu from "./UserMenu/UserMenu";
import NotificationsButton from "./Notification/NotificationsButton";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";

const navigation = [
  { name: "Home", to: "/dashboard" },
  { name: "About", to: "/dashboard/about" },
  { name: "Calendar", to: "/dashboard/calendar" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Disclosure as="nav" className={styles.nav}>
      <div>
        <div className={styles.navContainer}>
          <BurgerMenu
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            navigation={navigation}
            closeMenu={closeMenu}
          />
          <Logo src="/GreyLogo1.svg" alt="Your Company" />
          <NavigationMenu navigation={navigation} closeMenu={closeMenu} />
          <div className="flex items-center space-x-4">
            <NotificationsButton />
            <UserMenu />
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
