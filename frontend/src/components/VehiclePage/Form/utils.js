export const removeNullValues = (obj) => {
  const isObject = (value) =>
    value && typeof value === "object" && !Array.isArray(value);
  const isArray = Array.isArray;

  const cleanedObject = Object.entries(obj).reduce((acc, [key, value]) => {
    if (
      value !== null &&
      value !== undefined &&
      value !== "" &&
      value !== false &&
      value !== 0 &&
      value !== "false" &&
      value !== "0" &&
      value !== "null" &&
      value !== "undefined"
    ) {
      if (isObject(value)) {
        acc[key] = removeNullValues(value);
      } else if (isArray(value)) {
        acc[key] = value
          .filter(
            (item) =>
              item !== null &&
              item !== undefined &&
              item !== "" &&
              item !== false &&
              item !== 0 &&
              item !== "false" &&
              item !== "0" &&
              item !== "null" &&
              item !== "undefined"
          )
          .map((item) =>
            isObject(item) || isArray(item) ? removeNullValues(item) : item
          );
      } else {
        acc[key] = value;
      }
    }
    return acc;
  }, {});

  console.log("cleanedObject", cleanedObject);

  return cleanedObject;
};
