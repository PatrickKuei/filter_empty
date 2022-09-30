function filterEmpty(value) {
  if (value || value === false) {
    switch (value.constructor) {
      case Array: {
        const filteredArray = [];

        value.forEach((v) => {
          const child = filterEmpty(v);

          if (child || child === false) {
            filteredArray.push(child);
          }
        });

        return filteredArray;
      }
      case Object: {
        const filteredObject = {};

        for (const property in value) {
          if (value.hasOwnProperty(property)) {
            const child = filterEmpty(value[property]);

            if (child || child === false) {
              filteredObject[property] = child;
            }
          }
        }

        return filteredObject;
      }
      default:
        return value;
    }
  }
}

module.exports = filterEmpty;
