export const modifyImageUrl = (imageRef: any) => {
  const modifiedRef = String(imageRef)
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-webp", ".webp")
    .replace("-png", ".png");
  const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
  return baseUrl + modifiedRef;
};

export const modifyVideoCode = (videoCode: string | undefined) => {
  return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
};

export const modifyTweetCode = (tweetCode: string | undefined) => {
  return tweetCode
    ? tweetCode.replace("https://twitter.com/Exbigote_/status/", "")
    : "";
};
