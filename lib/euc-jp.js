const strToEUCJPBytes = (str) =>
  Encoding.convert(Encoding.stringToCode(str), "EUCJP", "UNICODE");

const createXWWWFormUrlencodedField = (name, value) => {
  nameEUCJPBytes = strToEUCJPBytes(name);
  valueEUCJPBytes = strToEUCJPBytes(value);
  return (
    Encoding.urlEncode(nameEUCJPBytes) +
    "=" +
    Encoding.urlEncode(valueEUCJPBytes)
  );
};
