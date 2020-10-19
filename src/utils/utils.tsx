import { Cloudinary } from "cloudinary-core";

interface cloudinaryURLProps {
  imageURL: string;
}

export function cloudinaryURL(props: cloudinaryURLProps) {
  const cl = new Cloudinary({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    secure: true,
  });
  const cloudinaryURL = cl.url(`/the-bridge/${props.imageURL}`, {
    dpr: "auto",
    width: "auto",
    q_auto: "auto",
    crop: "scale",
    fetch_format: "auto",
  });
  return cloudinaryURL;
}
