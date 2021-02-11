let screens = [];
let tone = 'bliss';

const regex = /\{\d\}/g;

function setup() {
  setupCanvas();
  setupScreen();
}

function draw() {
  background(0);
}

function setupCanvas() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function setupScreen() { // TODO: add parameters for SCENE and TONE (?)
  for (i = 0; i < lunaData.scene.length; i++) { // for every scene in lunaData
    // console.log("Scene " + i);
    for (j = 0; j < lunaData.scene[i].paragraph.length; j++) { // for every paragraph of every scene in lunaData
      // console.log("Scene " + i + " Paragraph " + j);
      if (lunaData.scene[i].paragraph[j].snippets === null) { // if key 'snippets' has value null
        // console.log("NO Snippets!");
        let paragraph = lunaData.scene[i].paragraph[j].base;
        console.log(paragraph);
        let newParagraph = createP(paragraph); // wrap base sentence in <p></p> tags and ...
        if (lunaData.scene[i].paragraph[j].cssClass) { // ... if the paragraph's key cssClass has a value other than null ...
          newParagraph.addClass(lunaData.scene[i].paragraph[j].cssClass); // ... apply the assigned CSS class.
        }
      } else {
        // console.log("YES Snippets!");
        console.log(lunaData.scene[i].paragraph[j].base.replace(regex, function getSnippet() {
          for (k = 0; k < lunaData.scene[i].paragraph[j].snippets.length; k++) {
            return lunaData.scene[i].paragraph[j].snippets[k][tone];
          }
        }));

        createP(lunaData.scene[i].paragraph[j].base.replace(regex, '*SNIPPET*'));
        if (lunaData.scene[i].paragraph[j].cssClass) {
          paragraph.addClass(lunaData.scene[i].paragraph[j].cssClass);
        }
      }
    }
  }
}

function getSnippet(match) {
  // TODO: return the value of the snippet with key = tone;
}

function setupScene(screen) {

}
