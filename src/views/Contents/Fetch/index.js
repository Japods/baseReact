import { getContent } from "../../../services/Content/index";
import { getImage } from "../../../services/Images/index";
import { setContent } from "../../../Store/Content/content";
import { setContentById } from "../../../Store/Content/content";
import { getContentById } from "../../../services/Content/index";
import { setImage } from "../../../Store/Image/image";

import useNotifications from "../../../hooks/Notification/Notifications";

export function useFetchContent(dispatch, setLoading) {
  const [showNotification] = useNotifications();
  setLoading(true);
  getContent()
    .then((response) => {
      if (response.error) {
        showNotification.callNotifications({
          title: response.error.userMessage.es,
          message: response.error.userMessage.es,
          type: "danger",
        });
      }

      const newElementPlaylist = response.data.items.map((element) => ({
        _id: element._id,
        title: element.title,
        description: element.description,
        images: element.images,
      }));

      dispatch(setContent(newElementPlaylist));
      setLoading(false);
    })
    .catch((err) => {
      showNotification.callNotifications({
        title: err,
        message: err,
        type: "danger",
      });
      setLoading(false);
    });
}

export function getContentByIdFetch(id, dispatch, setLoading) {
  const [showNotification] = useNotifications();

  const body = {
    id: id,
  };

  getContentById(body)
    .then((response) => {
      if (response.error) {
        showNotification.callNotifications({
          title: response.error.userMessage.es,
          message: response.error.userMessage.es,
          type: "danger",
        });
      }
      dispatch(setContentById(response));
      setLoading(false);
    })
    .catch((err) => {
      showNotification.callNotifications({
        title: err,
        message: err,
        type: "danger",
      });
      setLoading(false);
    });
}

export function getImagesFetch(dispatch) {
  const [showNotification] = useNotifications();

  const body = {
    id: "61099cba21617600159f5cbb",
    type: "banner",
    scale: "25",
    placeholder: true,
  };
  getImage(body)
    .then((response) => {
      if (response.error) {
        showNotification.callNotifications({
          title: response.error.userMessage.es,
          message: response.error.userMessage.es,
          type: "danger",
        });
      }
      dispatch(setImage(response));
    })
    .catch((error) => {
      showNotification.callNotifications({
        title: error,
        message: error,
        type: "danger",
      });
    });
}
