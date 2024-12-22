import { getBase64 } from "../../../utils/Utils";
import { getUserId } from "../../../utils/sessionStorageUtils";

const handlePostChange = async (files, photo, type, handlePost) => {
  console.log("files", files);
  const base64 = await getBase64(files[0]);
  console.log("base64", base64);
  let body = { url: base64 };
  if (!photo?.url) {
    // if no background photo is set
    body = {
      type,
      userId: getUserId(),
      ...body,
    };
  } else {
    body = {
      ...photo,
      ...body,
    };
  }
  handlePost({
    ...body,
  });
};

export { handlePostChange };
