// variable declaration

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = ('triceratops'.toUpperCase());

// change var text content, replace 'Velociraptor' to var dinosaur

var textAfterChange = text.replace('Velociraptor', dinosaur);

// declaration of half length display content

var textHalfLength = textAfterChange.length/2;

console.log(textAfterChange.slice(0,textHalfLength));
alert(textAfterChange.slice(0,textHalfLength));