const normaliseData = (data) => data.payload.polygons.reduce((acc, value) => {
  const polygon = [{ polygon: value.polygon }];

  if (acc[value.category] == null) {
    acc[value.category] = { polygons: [polygon] };
  } else {
    acc[value.category].polygons.push(polygon);
  }

  return acc;
}, {});

module.exports = normaliseData;
