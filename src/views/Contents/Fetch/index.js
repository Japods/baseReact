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
      setLoading(false);
    });
}

export function getContentByIdFetch(id, dispatch, setLoading) {
  const body = {
    id: id,
  };

  getContentById(body)
    .then((response) => {
      dispatch(setContentById(response));
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
}

export function getImagesFetch(dispatch, id_image) {
  const [showNotification] = useNotifications();

  const body = {
    id: id_image,
    type: "banner",
    scale: "25",
    placeholder: true,
  };
  getImage(body)
    .then((response) => {
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
