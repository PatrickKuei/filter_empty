function filterEmpty(value) {
  if (!value) {
    return;
  }

  switch (value.constructor) {
    case Array:
      return value.filter((i) => i);

    case Object: {
      const filteredObject = {};

      for (const property in value) {
        if (value.hasOwnProperty(property)) {
          if (value[property]) {
            filteredObject[property] = value[property];
          }
        }
      }

      return filteredObject;
    }
    default:
      break;
  }
}

module.exports = filterEmpty;
