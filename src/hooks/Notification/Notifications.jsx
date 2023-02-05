import { Store } from "react-notifications-component";

function useNotifications() {
  const showNotification = {
    callNotifications: ({ title, message, type }) => {
      Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "bottom",
        container: "top-right",
        animationIn: ["animate__animated", "animate__flipInX"],
        animationOut: ["animate__animated", "animate__flipInX"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    },
  };

  return [showNotification];
}

export default useNotifications;
