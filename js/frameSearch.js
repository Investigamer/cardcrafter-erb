const frameNames = new Map ([
	//standard
	['Regular Frames', 'M15Regular-1'],
	['Legend Crowns', 'M15LegendCrowns'],
	['Floating Legend Crowns', 'M15LegendCrownsFloating'],
	['Inner Crowns', 'M15InnerCrowns'],
	['Miracle', 'M15Miracle'],
	['Holo Stamps', 'M15HoloStamps'],
	['Dark Power/Toughness', 'M15DarkPT'],
	['Colored Borders', 'M15Borders'],
	['Color Identity Pips', 'M15CIPips'],
	['"The List" Stamp', 'TheList'],
	['Lands', 'M15Lands'],
	['Class (D&D)', 'Class'],
	['Snow (Kaldheim)', 'M15Snow'],
	['Mutate (Ikoria)', 'M15Mutate'],
	['Nyx (Theros)', 'M15Nyx'],
	['Adventures (Eldraine)', 'Adventure'],
	['Devoid (Zendikar)', 'M15Devoid'],
	['Aftermath (Amonkhet)', 'Aftermath'],
	['Flip (Kamigawa)', 'Flip'],
	['Levelers (Zendikar)', 'Levelers'],
	['Split Cards', 'Split'],
	['Fuse Cards', 'Fuse'],
	['Conspiracies (Draft Matters)', 'Conspiracy'],
	['Colorshifted (Planar Chaos)', 'Colorshifted'],
	['Brawl Legend Crowns', 'Brawl'],
	//showcase
	['Stained Glass (DMU)', 'DMUStainedGlass'],
	['Golden Age (SNC)', 'SNCGilded'],
	['Art Deco (SNC)', 'SNCArtDeco'],
	['Skyscraper (SNC)', 'SNCSkyscraper'],
	['Ninja (NEO)', 'NeoNinja'],
	['Samurai (NEO)', 'NeoSamurai'],
	['Neon (NEO)', 'NeoNeon'],
	['Fang (VOW)', 'Fang'],
	['Equinox (MID)', 'Equinox'],
	['Eternal Night (MID)', 'EternalNight'],
	['DND Sourcebook (AFR)', 'DNDSourcebook'],
	['DND Module (AFR)', 'DNDModule'],
	['Sketch Cards (MH2)', 'MH2'],
	['Mystical Archive (STA)', 'MysticalArchive'],
	['Japanese Mystical Archive (STA)', 'MysticalArchiveJP'],
	['Praetors (KHM)', 'Praetors'],
	['Kaldheim (KHM)', 'Kaldheim-2'],
	['Nonlegendary Kaldheim (KHM)', 'KaldheimNonleg'],
	['Commander Legends (CMR)', 'CommanderLegends'],
	['Zendikar Rising (ZNR)', 'ZendikarRising'],
	['M21 Signature Spellbooks (M21)', 'M21'],
	['Theros Beyond Death (THB)', 'M15NyxShowcase'],
	['Eldraine Storybooks (ELD)', 'Storybook'],
	['Borderless', 'GenericShowcase'],
	['Fullart', 'M15ClearTextboxes'],
	['Nickname ("Godzilla")', 'M15Nickname'],
	['Extended Art (Regular)', 'M15BoxTopper'],
	['Extended Art (Shorter Textbox)', 'M15ExtendedArtShort'],
	['FNM Promo (Inverted Promos)', 'FNM'],
	['Universes Beyond', 'UB'],
	['Full Text', 'FullText'],
	['Etched (Commander Precons)', 'Etched'],
	['ZNR Expeditions (2020)', 'ExpeditionZNR-1'],
	['Signature Spellbook (Jace/Gideon)', 'SignatureSpellbook'],
	['Ixalan Maps', 'Ixalan'],
	['Amonkhet Invocations (u/Smyris)', 'Invocation'],
	['Kaladesh Inventions', 'Invention'],
	['BFZ Expeditions (2015)', 'ExpeditionBFZ-1'],
	['SDCC15 (Blackout)', 'SDCC15'],
	['Future Shifted', 'FutureRegular'],
	//planeswalker
	['Planeswalker', 'PlaneswalkerRegular'],
	['Planeswalker Borderless', 'PlaneswalkerBorderless'],
	['Planeswalker Extended Art', 'PlaneswalkerBoxTopper'],
	['Planeswalker Tall', 'PlaneswalkerTall'],
	['Planeswalker Tall Borderless', 'PlaneswalkerTallBorderless'],
	['Planeswalker Holo Stamps', 'PlaneswalkerHoloStamps'],
	['Planeswalker Nickname', 'PlaneswalkerNickname'],
	['Planeswalker Blackout (SDCC15)', 'PlaneswalkerSDCC15'],
	['Planeswalker MDFC', 'PlaneswalkerMDFC'],
	['Planeswalker Transform (Front)', 'PlaneswalkerTransformFront'],
	['Planeswalker Transform (Back)', 'PlaneswalkerTransformBack'],
	['Planeswalker Transform Icons', 'PlaneswalkerTransformIcons'],
	//saga
	['Sagas', 'SagaRegular'],
	//dfc
	['Transform (Front)', 'M15TransformFront'],
	['Transform (Back)', 'M15TransformBack'],
	['Color Identity Pips', 'M15CIPips'],
	['Transform Icons', 'M15TransformTypes'],
	['Sagas (Front)', 'SagaDFC'],
	['Borderless (Front)', 'TransformBorderlessFront'],
	['Borderless (Back)', 'TransformBorderlessBack'],
	['Extended Art (Front)', 'TransformExtendedFront'],
	['Extended Art (Back)', 'TransformExtendedBack'],
	['SDCC15 (Blackout)', 'TransformSDCC15'],
	['DFC Legend Crowns', 'TransformLegendCrowns'],
	['DFC Floating Legend Crowns', 'TransformLegendCrownsFloating'],
	['DFC Nickname Legend Crowns', 'TransformLegendCrownsNickname'],
	//modal
	['Modal DFC', 'ModalRegular'],
	['Modal DFC Borderless', 'ModalBorderless'],
	['Modal DFC Extended Art', 'ModalExtended'],
	['Modal DFC Nickname', 'ModalNickname'],
	['Modal DFC Short', 'ModalShort'],
	['Modal DFC Short-Nickname', 'ModalShortNickname'],
	['Modal DFC Legend Crowns', 'ModalLegendCrowns'],
	['Modal DFC Floating Legend Crowns', 'ModalLegendCrownsFloating'],
	['Modal DFC Nickname Legend Crowns', 'ModalLegendCrownsNickname'],
	['Modal DFC Brawl Legend Crowns', 'ModalLegendCrownsBrawl'],
	['DFC Helper Cards', 'ModalHelper'],
	//token
	['Regular Tokens', 'TokenRegular-1'],
	['Textless Tokens', 'TokenTextless-1'],
	['Tall Tokens', 'TokenTall-1'],
	['Monarch Token', 'TokenMonarch'],
	['Initiative Token', 'TokenInitiative'],
	['Day/Night Marker', 'TokenDayNight'],
	['Planeswalker Emblems', 'Emblem'],
	['Jumpstart Front Cards', 'JMPFront'],
	['Regular Tokens (Bordered M15)', 'TokenRegularM15'],
	['Textless Tokens (Bordered M15)', 'TokenTextlessM15'],
	['Original Tokens (Old Bordered)', 'TokenOld'],
	['Unglued Tokens', 'TokenUnglued'],
	//misc
	['Future Shifted', 'FutureRegular'],
	['Colorshifted', '8thColorshifted'],
	['8th Edition', '8th'],
	['Seventh Edition', 'Seventh'],
	['Fifth Edition', 'SeventhButFifth'],
	['Fourth Edition', 'Fourth'],
	['Legends Multicolored', 'Legends'],
	['Alpha/Beta/Unlimited', 'ABU'],
	['Playtest Cards', 'Playtest'],
	['Dungeon (AFR)', 'Dungeon'],
	['Planechase', 'Planechase'],
	['Vanguard', 'Vanguard'],
	['Cardback', 'Cardback'],
	//promo
	['Promos', 'PromoOpenHouse'],
	['Promo Borderless Frames', 'PromoRegular-1'],
	['Promo Borderless Frames (Extra Short)', 'IkoShort'],
	['Promo Extended Art Frames', 'PromoExtended'],
	['Promo Nickname Frames', 'PromoNickname'],
	['Promo Generic Showcase', 'PromoGenericShowcase'],
	//textless
	['Kamigawa Basics (NEO)', 'NeoBasics'],
	['Fullart Basics (SNC)', 'TextlessBasicsSNC'],
	['Fullart Basics (THB)', 'TextlessBasics'],
	['Fullart Basics (ZEN)', 'ZendikarBasic-1'],
	['Fullart Snow Basics', 'FullartBasicRoundBottom'],
	['Unstable Basics (UST)', 'Unstable'],
	['Unhinged Basics (UNH)', 'Unhinged'],
	['Generic Showcase', 'TextlessGenericShowcase'],
	['Magic Fest Promos', 'MagicFest'],
	['Extended Art Invocations', 'AKHInvocationExtended'],
	['Textless Inventions', 'TextlessInvention'],
	['Textless Seventh', 'SeventhTextless'],
	//custom
	['Misc Custom Frames', 'MiscCustom'],
	['Deck Covers', 'CustomDeckCover'],
	['Simple Inventions', 'SimpleInventions'],
	['Tapped (Horizontal M15)', 'Tapped'],
	['Textless Duals', 'CustomDualLands'],
	['Seventh Edition Planeswalkers', 'PlaneswalkerSeventh'],
	['Seventh Edition Sagas', 'OldSaga'],
	['Floating Old Border', 'OldFloating'],
	['Floating Old Border (Short)', 'OldFloatingShort'],
	['Classicshifted', 'Classicshifted'],
	['Classicshifted Lands', 'ClassicshiftedLands'],
	['Classicshifted Planeswalkers', 'ClassicshiftedPlaneswalker'],
	['Classicshifted Planeswalker Transform Addons', 'ClassicshiftedPlaneswalkerTransform'],
	['Classicshifted Sagas', 'ClassicshiftedSaga'],
	['Classicshifted MDFC Addons', 'ClassicshiftedDFC'],
	['Classicshifted Transform Addons', 'ClassicshiftedTransform'],
	['Classicshifted Color Identity Pips', 'ClassicshiftedCIPips'],
	['Short Neon (NEO)', 'NEONeonShort'],
	['Colored Golden Age (SNC)', 'SNCGildedColored'],
	['Textless Golden Age (SNC)', 'SNCGildedTextless'],
	['Textless Equinox (MID)', 'EquinoxTextless'],
	['Horizontal Japanese Mystical Archive (STA)', 'MysticalArchiveJPHorizontal'],
	['Brawl Legend Crowns', 'Brawl'],
	['Cartoony - Sheepwave', 'Cartoony'],
	['Neon - Elry', 'CustomNeon'],
	['Ixalan - @feuer_ameise', 'FeuerAmeiseIxalan'],
	['Kaldheim, Fullart - @feuer_ameise', 'FeuerAmeiseKaldheim'],
	['Celid\'s Asap', 'CustomCelidAsap'],
	['Magrao\'s Kaldheim', 'CustomMagraoKaldheim'],
]);

frameSearch = (str) => {
	if (frameNames.has(str)) loadScript("/js/frames/pack" + frameNames.get(str) + ".js");
}

//Thank you to w3schools for providing the following quick-and-easy autocomplete code :)
//(some modifications made)

autocomplete(document.getElementById("frameSearch"), Array.from(frameNames.keys()));

function autocomplete(inp, arr) {
	var currentFocus;
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		this.parentNode.appendChild(a);
		for (i = 0; i < arr.length; i++) {
			if (arr[i].toUpperCase().includes(val.toUpperCase())) {
				b = document.createElement("DIV");
				b.setAttribute("class", "input")
				b.innerHTML = arr[i];
				b.addEventListener("click", function(e) {
					inp.value = this.innerHTML;
					frameSearch(inp.value);
              		closeAllLists();
          		});
				a.appendChild(b);
			}
		}
	});
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
        	currentFocus++;
        	addActive(x);
      	} else if (e.keyCode == 38) {
        	currentFocus--;
        	addActive(x);
    	} else if (e.keyCode == 13) {
    		e.preventDefault();
    		if (currentFocus > -1) {
    			if (x) x[currentFocus].click();
    		}
    	} else if (e.keyCode == 27) {
    		closeAllLists();
    	}
	});
	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
    	var x = document.getElementsByClassName("autocomplete-items");
    	for (var i = 0; i < x.length; i++) {
    		if (elmnt != x[i] && elmnt != inp) {
    			x[i].parentNode.removeChild(x[i]);
    		}
	    }
	}
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}