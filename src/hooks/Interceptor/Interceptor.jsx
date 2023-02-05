import React, { useEffect } from "react";
import axios from "axios";
import useNotifications from "../Notification/Notifications";

const useHandleError = () => {
  const [showNotification] = useNotifications();

  useEffect(() => {
    axios.interceptors.response.use(
      (res) => {
        if (res.data.error) {
          showNotification.callNotifications({
            title: res.data.error.userMessage.es,
            message: res.data.error.userMessage.es,
            type: "danger",
          });
        }
      },
      (error) => {
        showNotification.callNotifications({
          title: error.response.status,
          message: error.message,
          type: "danger",
        });

        return Promise.reject(error);
      }
    );
  }, []);
};

export default useHandleError;
