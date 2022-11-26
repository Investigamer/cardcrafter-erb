//Create objects for common properties across available frames
var masks = [{src:'img/frames/token/m15/regular/pinline.svg', name:'Pinline'}, {src:'img/frames/token/m15/regular/frame.svg', name:'Frame'}, {src:'img/frames/m15/regular/m15MaskTitle.png', name:'Title'}, {src:'img/frames/token/tokenMaskRegularType.png', name:'Type'}, {src:'img/frames/token/tokenMaskRegularRules.png', name:'Rules'}, {src:'img/frames/m15/regular/m15MaskBorder.png', name:'Border'}];
var bounds = {x:0.7573, y:0.8848, width:0.188, height:0.0733};
//defines available frames
availableFrames = [
	{name:'White Frame', src:'img/frames/token/m15/regular/w.png', masks:masks},
	{name:'Blue Frame', src:'img/frames/token/m15/regular/u.png', masks:masks},
	{name:'Black Frame', src:'img/frames/token/m15/regular/b.png', masks:masks},
	{name:'Red Frame', src:'img/frames/token/m15/regular/r.png', masks:masks},
	{name:'Green Frame', src:'img/frames/token/m15/regular/g.png', masks:masks},
	{name:'Multicolored Frame', src:'img/frames/token/m15/regular/m.png', masks:masks},
	{name:'Artifact Frame', src:'img/frames/token/m15/regular/a.png', masks:masks},
	{name:'Land Frame', src:'img/frames/token/m15/regular/l.png', masks:masks},
	{name:'White Power/Toughness', src:'img/frames/m15/regular/m15PTW.png', bounds:bounds},
	{name:'Blue Power/Toughness', src:'img/frames/m15/regular/m15PTU.png', bounds:bounds},
	{name:'Black Power/Toughness', src:'img/frames/m15/regular/m15PTB.png', bounds:bounds},
	{name:'Red Power/Toughness', src:'img/frames/m15/regular/m15PTR.png', bounds:bounds},
	{name:'Green Power/Toughness', src:'img/frames/m15/regular/m15PTG.png', bounds:bounds},
	{name:'Multicolored Power/Toughness', src:'img/frames/m15/regular/m15PTM.png', bounds:bounds},
	{name:'Artifact Power/Toughness', src:'img/frames/m15/regular/m15PTA.png', bounds:bounds},
	{name:'Colorless Power/Toughness', src:'img/frames/m15/regular/m15PTC.png', bounds:bounds},
	{name:'White Nyx Frame', src:'img/frames/token/m15/regular/nyx/w.png', masks:masks},
	{name:'Blue Nyx Frame', src:'img/frames/token/m15/regular/nyx/u.png', masks:masks},
	{name:'Black Nyx Frame', src:'img/frames/token/m15/regular/nyx/b.png', masks:masks},
	{name:'Red Nyx Frame', src:'img/frames/token/m15/regular/nyx/r.png', masks:masks},
	{name:'Green Nyx Frame', src:'img/frames/token/m15/regular/nyx/g.png', masks:masks},
	{name:'Multicolored Nyx Frame', src:'img/frames/token/m15/regular/nyx/m.png', masks:masks},
	{name:'Artifact Nyx Frame', src:'img/frames/token/m15/regular/nyx/a.png', masks:masks}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'tokenRegularM15';
	//art bounds
	card.artBounds = {x:0.0767, y:0.1248, width:0.8476, height:0.5143};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.6743, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.8177, width:0.75, height:0.1472};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenbsc', size:0.0381, color:'#fde367', align:'center'},
		type: {name:'Type', text:'', x:0.0854, y:0.65, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324},
		rules: {name:'Rules Text', text:'', x:0.086, y:0.7143, width:0.828, height:0.2048, size:0.0362},
		pt: {name:'Power/Toughness', text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center'}
	});
}
//loads available frames
loadFramePack();