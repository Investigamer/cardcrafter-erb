//defines available frames
availableFrames = [
	{name:'Frame', src:'img/frames/token/jmpFront/frame.svg'}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'jmpFront';
	//art bounds
	card.artBounds = {x:0.0474, y:0.0353, width:0.9054, height:0.9296};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.5, y:0.9524, width:0.12, height:0.0410, vertical:'center', horizontal: 'center'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Color Identity', text:'', y:0.9167, width:0.9292, height:83/2100, oneLine:true, size:83/1638, align:'right', manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.0474, y:0.7039, width:0.9054, height:0.0534, oneLine:true, font:'gothammedium', size:0.0534, color:'white', align:'center'},
		subtitle: {name:'Subtitle', text:'', x:0.0474, y:0.7543, width:0.9054, height:0.03, oneLine:true, font:'belerenbsc', size:0.03, color:'white', align:'center'}
	});
	//bottom info
	await loadBottomInfo({
		midLeft: {text:'{elemidinfo-set}*{elemidinfo-language}  {savex}', x:0.0647, y:0.9548, width:0.8707, height:0.0171, oneLine:true, font:'gothammedium', size:0.0171, color:'white', outlineWidth:0.003},
		topLeft: {text:'{elemidinfo-number}  {loadx}{elemidinfo-rarity}', x:0.0647, y:0.9377, width:0.8707, height:0.0171, oneLine:true, font:'gothammedium', size:0.0171, color:'white', outlineWidth:0.003},
		bottomLeft: {text:'NOT FOR SALE', x:0.0647, y:0.9719, width:0.8707, height:0.0143, oneLine:true, font:'gothammedium', size:0.0143, color:'white', outlineWidth:0.003},
		bottomRight: {text:'CardConjurer.com', x:0.0647, y:0.972, width:0.8707, height:0.0143, oneLine:true, font:'mplantin', size:0.0143, color:'white', align:'right', outlineWidth:0.003},
		wizards: {name:'wizards', text:'{ptshift0,0.0172}\u2122 & \u00a9 {elemidinfo-year} Wizards of the Coast. Illus. {elemidinfo-artist}', x:0.91, y:0.9762, width:1.3014, height:0.0153, oneLine:true, font:'mplantin', size:0.0153, color:'white', align:'right', rotation:270}
	});
}
//loads available frames
loadFramePack();