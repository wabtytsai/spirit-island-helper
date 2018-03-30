export function toFilename(name, extension = "") {
  let ret = "./" + name.toLowerCase().replace(/ /g, "_");
  if (extension !== "") {
    ret += "." + extension;
  }
  return ret;
}

export function classSet(conditions) {
  let classes = [];

  for (let key in conditions) {
    if (conditions[key] === true) {
      classes.push(key);
    }
  }

  return classes.join(" ");
}
