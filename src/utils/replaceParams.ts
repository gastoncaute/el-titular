export const repalceParams = (param: string): string => {
  return param.replace(/%20|%2C|%E2%80%93|%C3%BA/g, (match: string) => {
    switch (match) {
      case "%20":
        return " ";
      case "%2C":
        return ",";
      case "%E2%80%93":
        return "-";
      case "%C3%BA":
        return "ú";
      default:
        return match;
    }
  });
};
