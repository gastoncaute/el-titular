export const repalceParams = (param: string): string => {
  return param.replace(
    /%20|%2C|%E2%80%93|%C3%81|%C3%A1|%C3%89|%C3%A9|%C3%8D|%C3%AD|%C3%93|%C3%B3|%C3%9A|%C3%BA/g,
    (match: string) => {
      switch (match) {
        case "%20":
          return " ";
        case "%2C":
          return ",";
        case "%E2%80%93":
          return "-";

        case "%C3%81":
          return "Á";
        case "%C3%A1":
          return "á";

        case "%C3%89":
          return "É";
        case "%C3%A9":
          return "é";

        case "%C3%8D":
          return "Í";
        case "%C3%AD":
          return "í";

        case "%C3%93":
          return "Ó";
        case "%C3%B3":
          return "ó";

        case "%C3%9A":
          return "Ú";

        case "%C3%BA":
          return "ú";
        default:
          return match;
      }
    }
  );
};
