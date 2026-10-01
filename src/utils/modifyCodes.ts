export const modifyImageUrl = (
  imageRef: any,
  width = 1000,
  quality = 75,
) => {
  if (!imageRef) return "";

  const safeWidth = Math.min(Math.max(Math.round(width), 64), 1600);
  const safeQuality = Math.min(Math.max(Math.round(quality), 40), 90);

  const modifiedRef = String(imageRef)
    .replace(/^image-/, "")
    .replace(/-jpg$/, ".jpg")
    .replace(/-jpeg$/, ".jpeg")
    .replace(/-webp$/, ".webp")
    .replace(/-png$/, ".png");

  const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
  return `${baseUrl}${modifiedRef}?w=${safeWidth}&fit=max&auto=format&q=${safeQuality}`;
};

export const modifyVideoFileUrl = (fileCode: any) => {
  if (!fileCode) return "";
  const modifiedRef = String(fileCode)
    .replace(/^file-/, "")
    .replace(/-mp4$/, ".mp4")
    .replace(/-webm$/, ".webm")
    .replace(/-ogg$/, ".ogg");
  const baseUrl = "https://cdn.sanity.io/files/lrwm6m86/production/";
  return baseUrl + modifiedRef;
};

export const modifyVideoCode = (videoCode: string | undefined) => {
  return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
};

export const modifyTweetCode = (tweetCode: string | undefined) => {
  if (!tweetCode) return "";
  const regex = /https:\/\/(x\.com|twitter\.com)\/[^\/]+\/status\/(\d+)(?:\?.+)?/;
  const match = tweetCode.match(regex);
  return match ? match[2] : "";
};

export function calcularTiempoTranscurrido(fechaISO: string): string {
  if (!fechaISO) return "";
  const fechaNoticia = new Date(fechaISO);
  const ahora = new Date();
  const diferenciaMs = ahora.getTime() - fechaNoticia.getTime();

  const minutos = Math.floor(diferenciaMs / (1000 * 60));
  const horas = Math.floor(diferenciaMs / (1000 * 60 * 60));
  const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

  if (minutos < 60) return `Hace ${minutos <= 0 ? 1 : minutos} min`;
  if (horas < 24) return `Hace ${horas} ${horas === 1 ? "hora" : "horas"}`;
  return `Hace ${dias} ${dias === 1 ? "día" : "días"}`;
}

export function formatearFecha(fechaIso: string) {
  if (!fechaIso) return "";
  const fecha = new Date(fechaIso);
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(fecha);
}
