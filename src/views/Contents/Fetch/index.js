import { getContent } from "../../../Store/Content/contentActions";
import { setContent } from "../../../Store/Content/content";
import { setContentById } from "../../../Store/Content/content";
import { getContentById } from "../../../Store/Content/contentActions";
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
    .catch(() => {
      setLoading(false);
    });
}
