function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((acc, curr) => acc + curr.mileage, 0);
  const highestMileageCar = cars.find(
    (el) => el.mileage === Math.max(...cars.map((el) => el.mileage))
  );
  const lowestMileageCar = cars.find(
    (el) => el.mileage === Math.min(...cars.map((el) => el.mileage))
  );
  const averageMileage = totalMileage / cars.length;
  return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;
