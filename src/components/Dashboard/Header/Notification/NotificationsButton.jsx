import { BellIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function NotificationsButton({ onClick = () => {} }) {
  return (
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      onClick={onClick}
    >
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

NotificationsButton.propTypes = {
  onClick: PropTypes.func,
};

export default NotificationsButton;
