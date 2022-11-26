//Create objects for common properties across available frames
var masks = [{src:'img/frames/m15/praetors/pinline.svg', name:'Pinline'}, {src:'img/frames/m15/regular/m15MaskTitle.png', name:'Title'}, {src:'img/frames/m15/regular/m15MaskType.png', name:'Type'}, {src:'img/frames/m15/praetors/frame.svg', name:'Frame'}, {src:'img/frames/m15/praetors/text.svg', name:'Rules Text'}, {src:'img/frames/m15/praetors/border.svg', name:'Border'}];
var bounds = {x:0.746, y:0.8858, width:0.212, height:0.0772};
var bounds2 = {x:0.418, y:0.9, width:0.164, height:0.0491};
//defines available frames
availableFrames = [
	{name:'White Frame', src:'img/frames/m15/praetors/w.png', masks:masks},
	{name:'Blue Frame', src:'img/frames/m15/praetors/u.png', masks:masks},
	{name:'Black Frame', src:'img/frames/m15/praetors/b.png', masks:masks},
	{name:'Red Frame', src:'img/frames/m15/praetors/r.png', masks:masks},
	{name:'Green Frame', src:'img/frames/m15/praetors/g.png', masks:masks},
	{name:'Multicolored Frame', src:'img/frames/m15/praetors/m.png', masks:masks},
	{name:'Artifact Frame', src:'img/frames/m15/praetors/a.png', masks:masks},
	{name:'White Power/Toughness', src:'img/frames/m15/praetors/wpt.png', bounds:bounds},
	{name:'Blue Power/Toughness', src:'img/frames/m15/praetors/upt.png', bounds:bounds},
	{name:'Black Power/Toughness', src:'img/frames/m15/praetors/bpt.png', bounds:bounds},
	{name:'Red Power/Toughness', src:'img/frames/m15/praetors/rpt.png', bounds:bounds},
	{name:'Green Power/Toughness', src:'img/frames/m15/praetors/gpt.png', bounds:bounds},
	{name:'Multicolored Power/Toughness', src:'img/frames/m15/praetors/mpt.png', bounds:bounds},
	{name:'Artifact Power/Toughness', src:'img/frames/m15/praetors/apt.png', bounds:bounds},
	{name:'White Holo Stamp', src:'img/frames/m15/praetors/holo/w.png', bounds:bounds2},
	{name:'Blue Holo Stamp', src:'img/frames/m15/praetors/holo/u.png', bounds:bounds2},
	{name:'Black Holo Stamp', src:'img/frames/m15/praetors/holo/b.png', bounds:bounds2},
	{name:'Red Holo Stamp', src:'img/frames/m15/praetors/holo/r.png', bounds:bounds2},
	{name:'Green Holo Stamp', src:'img/frames/m15/praetors/holo/g.png', bounds:bounds2},
	{name:'Multicolored Holo Stamp', src:'img/frames/m15/praetors/holo/m.png', bounds:bounds2},
	{name:'Artifact Holo Stamp', src:'img/frames/m15/praetors/holo/a.png', bounds:bounds2}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'm15Praetors';
	//art bounds
	card.artBounds = {x:0.0767, y:0.1105, width:0.8476, height:0.4486};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.5910, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381},
		type: {name:'Type', text:'', x:0.0854, y:0.5664, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324},
		rules: {name:'Rules Text', text:'', x:0.1047, y:0.6303, width:0.7907, height:0.2875, size:0.0362},
		pt: {name:'Power/Toughness', text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center'}
	});
	notify('<a href="/phyrexian" target="_blank">Check out our Phyrexian Text Generator to make some authentic Praetor showcase cards!</a>', 20)
}
//loads available frames
loadFramePack();