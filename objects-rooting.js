const judgeVegetable = function (vegetables, metric) {
  let greatest = 0;

  vegetables.forEach(function (vegetable, index) {
    if (vegetable[metric] > vegetables[greatest][metric]) {
      greatest = index;
    }
  });

  return vegetables[greatest].submitter;
}
