function makeLine(length) {
  var line = "";
  
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  
  return line + "\n";
}

function buildTriangle(height) {
  var sol = "";
  
  for (let i = 0; i < height; i++) {
      sol += makeLine(i + 1);
  }
  
  return sol;
}

console.log(buildTriangle(10));