import React from "react";
import Slides from "../../components/Slides/Slides";

function Contents() {
  const data3 = [
    {
      title: "title 1",
      Image: "https://dummyimage.com/600x400/000/fff",
      description: "lorem ipsum dolor sit am",
    },
    {
      title: "title 2",
      Image: "https://dummyimage.com/601x400/000/fff",
      description: "lorem ipsum dolor sit am",
    },

    {
      title: "title 3",
      Image: "https://dummyimage.com/602x400/000/fff",
      description: "lorem ipsum dolor sit am",
    },

    {
      title: "title 4",
      Image: "https://dummyimage.com/603x400/000/fff",
      description: "lorem ipsum dolor sit am",
    },
  ];
  return (
    <div>
      <Slides items={data3} />
    </div>
  );
}

export default Contents;
