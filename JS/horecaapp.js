
window.alert("Welkom bij Bar de la Geldof")

var fristotaal = 0
var	biertotaal = 0
var	wijntotaal = 0
var	snack8totaal = 0
var snack16totaal = 0
//dit zijn de variabelen die later aangepast zullen worden tijdens de bestelling

const FRIS = 1.50; //prijs van een frisdrank per stuk
const BIER = 2; //prijs van een biertje per stuk
const WIJN = 2.50; //prijs van wijn per stuk
const SNACK8 = 3.50; //prijs van 8 snacks per stuk
const SNACK16 = 6.00; //prijs van 16 snacks per stuk


function Order(){
	var bestelling = prompt('Welke bestelling wilt u toevoegen? Voer stop in als u klaar bent');
	if (bestelling == 'fris') {
		var fris = prompt ('Hoeveel fris wilt u toevoegen?');
		alert ('U heeft' +' '+ fris + ' ' + 'fris toegevoegd');
		fristotaal = Number(fristotaal) + Number(fris)
		Order(); //als iemand fris invoert krijgt hij de vraag hoeveel hij daarvan wil
	}else if (bestelling == 'bier'){
		var bier = prompt ('Hoeveel bier wilt u toevoegen?');
		alert ('U heeft' +' '+ bier + ' ' + 'bier toegevoegd');
		biertotaal = Number(biertotaal) + Number(bier)
		Order(); //als iemand bier invoert krijgt hij de vraag hoeveel hij daarvan wil
	}else if (bestelling == 'wijn'){
		var wijn = prompt ('Hoeveel wijn wilt u toevoegen?');
		alert ('U heeft' +' '+ wijn + ' ' + 'wijn toegevoegd');
		wijntotaal = Number(wijntotaal) + Number(wijn)
		Order(); //als iemand wijn invoert krijgt hij de vraag hoeveel hij daarvan wil
	}else if (bestelling == 'snack'){
		var snack = prompt ('Hoeveel bitterballen wilt u toevoegen (8 of 16)?');
		if (snack == 8) {
			var snack8 = prompt ('Hoeveel bitterbalschalen van 8 wilt u bestellen?');
			alert ('U heeft' +' '+ snack8 + ' ' + 'bitterbalschalen van 8 stuks toegevoegd');		
			snack8totaal = Number(snack8totaal) + Number(snack8)
			Order(); //als iemand 8 kiest voor snack dan krijgt hij de vraag hoeveel hij daarvan wil
		}else if(snack == 16){
			var snack16 = prompt ('Hoeveel bitterbalschalen van 16 wilt u bestellen?');
			alert ('U heeft' +' '+ snack16 + ' ' + 'bitterbalschalen van 16 stuks toegevoegd');		
			snack16totaal = Number(snack16totaal) + Number(snack16)
			Order(); //als iemand 16 kiest voor snack dan krijgt hij de vraag hoeveel hij daarvan wil			
		}else{
			alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.');
			Order(); //dit laat zien wat er gebeurdt als je iets anders dan 8 of 16 invultt
		}
	}else if (bestelling == 'stop'){ //hiermee stopt de bestelling
		var prijsfris = FRIS * fristotaal; //formule om de prijs van het aantal fris uit te rekenen
		var prijsbier = BIER * biertotaal; //formule om de prijs van het aantal bier uit te rekenen
		var prijswijn = WIJN * wijntotaal; //formule om de prijs van het aantal wijn uit te rekenen
		var prijssnack8 = SNACK8 * snack8totaal; //formule om de prijs van het aantal snack8 uit te rekenen
		var prijssnack16 = SNACK16 * snack16totaal; //formule om de prijs van het aantal snack16 uit te rekenen
		document.body.innerHTML = '';
		document.write('Bedankt voor uw bezoek aan Bar de la Geldof.<br>Ik hoop dat u genoten heeft van uw bezoek.<br>Een fijne dag verder. <br/><br/>');
		document.write('U heeft' + ' ' + fristotaal + ' ' + 'fris besteld.' + '<br />'); //eindprijs fris
		document.write(fristotaal + ' ' + 'x €1,50'+ ' ' + ' = ' + '€' + prijsfris + '<br/><br/>');
		document.write('U heeft' + ' ' + biertotaal + ' ' + 'bier besteld.' + '<br />'); //eindprijs bier
		document.write(biertotaal + ' ' + 'x €2,00'+ ' ' + ' = ' + '€' + prijsbier + '<br/><br/>');		
		document.write('U heeft' + ' ' + wijntotaal + ' ' + 'wijn besteld.' + '<br />'); //eindprijs wijn
		document.write(wijntotaal + ' ' + 'x €2,50'+ ' ' + ' = ' + '€' + prijswijn + '<br/><br/>');		
		document.write('U heeft' + ' ' + snack8totaal  + ' ' + 'bitterbalschalen van 8 stuks besteld.' + '<br />');
		document.write(snack8totaal  + ' ' + 'x €3,50'+ ' ' + ' = ' + '€' + prijssnack8 + '<br/><br/>'); //eindprijs bitterballen 8	
		document.write('U heeft' + ' ' + snack16totaal + ' ' + 'bitterbalschalen van 16 stuks besteld.' + '<br />');
		document.write(snack16totaal + ' ' + 'x €6,00'+ ' ' + ' = ' + '€' + prijssnack16 + '<br/><br/>'); //eindprijs bitterballen 16
		document.write('totaal prijs = €' + ' ' + (prijsfris + prijsbier + prijswijn + prijssnack8 + prijssnack16)+ '<br/><br/>'); //totaal prijs bestelling
	}else{
		alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.')
		alert('Dit product hebben wij helaas niet wij hebben wel: fris, bier, wijn en snack.');
		Order(); // dit wordt aangegeven wanneer de klant geen bier, fris etc invoert maar iets anders random
	}
}

Order();
