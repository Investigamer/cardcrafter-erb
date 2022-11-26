//Create objects for common properties across available frames
var masks = [{src:'img/frames/m15/equinox/pinline.svg', name:'Pinline'}, {src:'img/frames/m15/equinox/title.svg', name:'Title'}, {src:'img/frames/m15/equinox/type.svg', name:'Type'}, {src:'img/frames/m15/equinox/text.svg', name:'Rules'}];
var bounds = {x:0.7787, y:0.8777, width:0.1747, height:0.0686};
var masks2 = [{src:'img/frames/m15/equinox/back/pinline.svg', name:'Pinline'}, {src:'img/frames/m15/equinox/back/title.svg', name:'Title'}, {src:'img/frames/m15/equinox/back/type.svg', name:'Type'}, {src:'img/frames/m15/equinox/back/text.svg', name:'Rules'}];
var bounds2 = {x:0.7794, y:0.8839, width:0.1827, height:0.0639};
//defines available frames
availableFrames = [
	{name:'White Frame (Front)', src:'img/frames/m15/equinox/w.png', masks:masks},
	{name:'Blue Frame (Front)', src:'img/frames/m15/equinox/u.png', masks:masks},
	{name:'Black Frame (Front)', src:'img/frames/m15/equinox/b.png', masks:masks},
	{name:'Red Frame (Front)', src:'img/frames/m15/equinox/r.png', masks:masks},
	{name:'Green Frame (Front)', src:'img/frames/m15/equinox/g.png', masks:masks},
	{name:'Multicolored Frame (Front)', src:'img/frames/m15/equinox/m.png', masks:masks},
	{name:'Artifact Frame (Front)', src:'img/frames/m15/equinox/a.png', masks:masks},
	{name:'Land Frame (Front)', src:'img/frames/m15/equinox/l.png', masks:masks},
	{name:'White Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/w.png', bounds:bounds},
	{name:'Blue Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/u.png', bounds:bounds},
	{name:'Black Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/b.png', bounds:bounds},
	{name:'Red Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/r.png', bounds:bounds},
	{name:'Green Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/g.png', bounds:bounds},
	{name:'Multicolored Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/m.png', bounds:bounds},
	{name:'Artifact Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/a.png', bounds:bounds},
	{name:'Land Power/Toughness (Front)', src:'img/frames/m15/equinox/pt/l.png', bounds:bounds},
	{name:'Sun (Frontside Indicator)', src:'img/frames/m15/equinox/sun.png', bounds:{x:0.02, y:0.0186, width:0.1534, height:0.1229}},
	{name:'White Frame (Back)', src:'img/frames/m15/equinox/back/w.png', masks:masks2},
	{name:'Blue Frame (Back)', src:'img/frames/m15/equinox/back/u.png', masks:masks2},
	{name:'Black Frame (Back)', src:'img/frames/m15/equinox/back/b.png', masks:masks2},
	{name:'Red Frame (Back)', src:'img/frames/m15/equinox/back/r.png', masks:masks2},
	{name:'Green Frame (Back)', src:'img/frames/m15/equinox/back/g.png', masks:masks2},
	{name:'Multicolored Frame (Back)', src:'img/frames/m15/equinox/back/m.png', masks:masks2},
	{name:'Artifact Frame (Back)', src:'img/frames/m15/equinox/back/a.png', masks:masks2},
	{name:'Land Frame (Back)', src:'img/frames/m15/equinox/back/l.png', masks:masks2},
	{name:'White Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/w.png', bounds:bounds2},
	{name:'Blue Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/u.png', bounds:bounds2},
	{name:'Black Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/b.png', bounds:bounds2},
	{name:'Red Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/r.png', bounds:bounds2},
	{name:'Green Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/g.png', bounds:bounds2},
	{name:'Multicolored Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/m.png', bounds:bounds2},
	{name:'Artifact Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/a.png', bounds:bounds2},
	{name:'Land Power/Toughness (Back)', src:'img/frames/m15/equinox/back/pt/l.png', bounds:bounds2}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//notification
	notify('For back-faces, add {right20} before your Type Line, and {fontcolorwhite} before all text.', 15);
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'equinox';
	//art bounds
	card.artBounds = {x:0.0754, y:0.0534, width:0.8574, height:0.8715};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9067, y:0.5910, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0643, width:0.9234, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.0967, y:0.0553, width:0.8067, height:0.0543, oneLine:true, font:'belerenb', size:0.0381},
		type: {name:'Type', text:'', x:0.0967, y:0.5664, width:0.8067, height:0.0543, oneLine:true, font:'belerenb', size:0.0324},
		rules: {name:'Rules Text', text:'', x:0.1, y:0.6303, width:0.8, height:0.2875, size:0.0362},
		pt: {name:'Power/Toughness', text:'', x:0.7947, y:0.9, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center'}
	});
}
//loads available frames
loadFramePack();