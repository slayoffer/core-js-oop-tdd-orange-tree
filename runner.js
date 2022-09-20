const orange = new Orange();
const tree = new OrangeTree(2, 10);
const reportsBlock = document.getElementById('reports');

// Let seasons pass until the tree is ready to bear fruit.
while (!tree.isMature()) {
  tree.passGrowingSeason();
}

// Report yearly harvest information for the lifetime of the tree.
while (!tree.isDead()) {
  tree.passGrowingSeason();
  const harvestedOranges = [];

  while (tree.hasOranges()) {
    harvestedOranges.push(tree.pickAnOrange());
  }

  let averageOrangeDiameter = 0;

  for (let i = 0; i < harvestedOranges.length; i++) {
    averageOrangeDiameter += harvestedOranges[i].diameter;
  };

  
  console.log(harvestedOranges);

  const report = document.createElement('div');
  report.innerHTML = `
      <b>HARVEST_REPORT</b>
      <br/>
      YEAR ${tree.age} REPORT
      <br/>
      Height: ${tree.height} feet.
      <br/>
      Harvest: ${harvestedOranges.length} oranges with an average
      <br/>
      diameter of ${(averageOrangeDiameter / harvestedOranges.length).toFixed(2)} inches.
      <br/>
      <br/>
      -----------------------
      <br/>
      <br/>
    `;
  reportsBlock.appendChild(report);
}

const lastReport = document.createElement('div');
lastReport.innerHTML = '<h2>Alas, the tree, she is dead!</h2>';
reportsBlock.appendChild(lastReport);


