export const textToUrl = (text, id) => {
  return `${text} ${id}`
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
    .replace(/[-]+/g, "-");
};
