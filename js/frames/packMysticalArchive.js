//Create objects for common properties across available frames
var masks = [{src:'img/frames/mysticalArchive/pinline.svg', name:'Pinline'}, {src:'img/frames/mysticalArchive/pinlineRight.svg', name:'Pinline (Right)'}];
//defines available frames
availableFrames = [
	{name:'White Frame', src:'img/frames/mysticalArchive/w.png', masks:masks},
	{name:'Blue Frame', src:'img/frames/mysticalArchive/u.png', masks:masks},
	{name:'Black Frame', src:'img/frames/mysticalArchive/b.png', masks:masks},
	{name:'Red Frame', src:'img/frames/mysticalArchive/r.png', masks:masks},
	{name:'Green Frame', src:'img/frames/mysticalArchive/g.png', masks:masks},
	{name:'Multicolored Frame', src:'img/frames/mysticalArchive/m.png', masks:masks},
	{name:'Artifact Frame', src:'img/frames/mysticalArchive/a.png', masks:masks},
	{name:'Land Frame', src:'img/frames/mysticalArchive/c.png', masks:masks},
	{name:'Power/Toughness', src:'img/frames/mysticalArchive/pt.png', bounds:{x:0.7014, y:0.8924, width:0.222, height:0.0520}},
	{name:'White Crown', src:'img/frames/mysticalArchive/crowns/w.svg'},
	{name:'Blue Crown', src:'img/frames/mysticalArchive/crowns/u.svg'},
	{name:'Black Crown', src:'img/frames/mysticalArchive/crowns/b.svg'},
	{name:'Red Crown', src:'img/frames/mysticalArchive/crowns/r.svg'},
	{name:'Green Crown', src:'img/frames/mysticalArchive/crowns/g.svg'},
	{name:'Multicolored Crown', src:'img/frames/mysticalArchive/crowns/m.svg'},
	{name:'Artifact Crown', src:'img/frames/mysticalArchive/crowns/a.svg'},
	{name:'Land Crown', src:'img/frames/mysticalArchive/crowns/l.svg'}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	// notify("To change the color of your mana cost, use {manacolor#}, but replace '#' with your desired color. 'white', 'blue', 'black', 'red', and 'green', as well as hex/html color codes are currently supported.", 15)
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'mysticalArchive';
	loadScript('/js/frames/manaSymbolsOutline.js');
	//art bounds
	card.artBounds = {x:0, y:0.1205, width:1, height:0.7539};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.5910, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', manaCost:true, manaSpacing:-0.0027, manaPrefix:'outline'/*, manaSymbolColor:'white'*/},
		title: {name:'Title', text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381},
		type: {name:'Type', text:'', x:0.0854, y:0.5664, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324},
		rules: {name:'Rules Text', text:'', x:0.0934, y:0.6303, width:0.8134, height:0.2875, size:0.0362},
		pt: {name:'Power/Toughness', text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center'}
	});
}
//loads available frames
loadFramePack();