export const modifyImageUrl = (imageRef: any) => {
  const modifiedRef = String(imageRef)
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-webp", ".webp")
    .replace("-png", ".png");
  const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
  return baseUrl + modifiedRef;
};

export const modifyVideoFileUrl = (fileCode: any) => {
  const modifiedRef = String(fileCode)
    .replace("file-", "")
    .replace("-mp4", ".mp4")
    .replace("-webm", ".webm")
    .replace("-ogg", ".ogg");
  const baseUrl = "https://cdn.sanity.io/files/lrwm6m86/production/";
  return baseUrl + modifiedRef;
};

export const modifyVideoCode = (videoCode: string | undefined) => {
  return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
};

export const modifyTweetCode = (tweetCode: string | undefined) => {
  if (tweetCode) {
    // Utilizar una expresión regular para eliminar la parte constante de la URL de Twitter
    const regex =
      /https:\/\/(x\.com|twitter\.com)\/[^\/]+\/status\/(\d+)(?:\?.+)?/;
    const match = tweetCode.match(regex);
    return match ? match[2] : ""; // Devolver la ID del tweet si hay coincidencia
  } else {
    return "";
  }
};
