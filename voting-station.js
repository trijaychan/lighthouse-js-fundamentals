const chooseStations = function (stations) {
  let solutions = [];

  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      solutions.push(stations[i][0]);
    }
  }

  return solutions;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));