import { Cloudinary } from "cloudinary-core";

export function generateCloudinaryURL(imageURL: string) {
  const cl = new Cloudinary({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    secure: true,
  });
  const cloudinaryURL = cl.url(`/the-bridge/${imageURL}`, {
    dpr: "auto",
    width: "auto",
    q_auto: "auto",
    crop: "scale",
    fetch_format: "auto",
  });
  return cloudinaryURL;
}
