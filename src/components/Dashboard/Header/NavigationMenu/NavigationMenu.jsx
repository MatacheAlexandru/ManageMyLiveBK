import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

function NavigationMenu({ navigation, closeMenu }) {
  const location = useLocation();

  const getLinkClassName = (isActive) => {
    return classNames(
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white",
      "rounded-md px-3 py-2 text-sm font-medium"
    );
  };

  return (
    <div className="hidden sm:flex items-center mr-[10rem]">
      <div className="flex space-x-4 items-center justify-center ">
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
  );
}

NavigationMenu.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default NavigationMenu;
