const isNeededField = (str) => {
  switch (str) {
    case "encode_hint":
    case "template_page":
    case "cmd":
    case "page":
    case "digest":
    case "msg":
    case "preview":
    case "original":
      return true;
    default:
      return false;
  }
};

const serializeForm = () => {
  const form = document.querySelector("._plugin_edit_edit_form");
  const neededFields = [];

  for (let i = 0; i < form.elements.length; i++) {
    const elm = form.elements[i];
    if (!isNeededField(elm.name)) {
      continue;
    }

    neededFields.push(createXWWWFormUrlencodedField(elm.name, elm.value));
  }

  const body = neededFields.join("&");
  return body
    .replace(/%20/g, "+")
    .replace(/%0A/g, "%0D%0A")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
};
