export function toFilename(name, extension = "") {
  let ret = "./" + name.toLowerCase().replace(/ /g, "_");
  if (extension !== "") {
    ret += "." + extension;
  }
  return ret;

}
