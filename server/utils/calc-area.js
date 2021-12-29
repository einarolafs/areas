const { point, polygon } = require('@flatten-js/core');

const getFaces = (points) => points.map(({ x, y }) => point(x, y));

const getArea = (points) => {
  const faces = getFaces(points);

  return polygon(faces).area();
};

const calculateAreas = (categories) => {
  const areas = {};
  for (const [category, { polygons }] of Object.entries(categories)) {
    areas[category] = polygons.map(([{ polygon: { points } }]) => getArea(points));
  }

  return areas;
};

module.exports = calculateAreas;
