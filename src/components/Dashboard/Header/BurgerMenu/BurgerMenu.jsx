import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./BurgerMenu.module.css";
import { useRef, useEffect } from "react";

function BurgerMenu({ isOpen, toggleMenu, navigation, closeMenu }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div className={`${styles.menuButton} sm:hidden relative`}>
      <button
        className={styles.profileButton}
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <>
          {/* Fundalul semi-transparent */}
          <div
            className="fixed inset-0 z-40"
            onClick={closeMenu} // Închide meniul când faci click pe fundal
          ></div>

          {/* Meniul propriu-zis */}
          <div
            ref={menuRef}
            className="fixed inset-0 w-full h-[11rem] bg-gray-800 bg-opacity-90 top-[7rem] left-0 z-50"
          >
            <div className="space-y-1 px-2 pb-5 pt-5 flex items-center flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/dashboard"}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  navigation: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default BurgerMenu;
