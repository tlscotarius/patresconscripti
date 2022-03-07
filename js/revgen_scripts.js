//var showDetails = 0;

$(document).ready(function(){

	// fire processUpload when the user uploads a file.
	document.querySelector('#fileUpload').addEventListener('change', handleFileUpload, false);

	// Setup file reading
	var reader = new FileReader();
	reader.onload = handleFileRead;

	function handleFileUpload(event) {
		var file = event.target.files[0];
		reader.readAsText(file); // fires onload when done.
	}

	function handleFileRead(event) {
		var myObj = JSON.parse(event.target.result);

		let text = "";
		for (let x in myObj) 
		{
			//text += x + " = " + myObj[x] + ", ";

			switch(x) 
			{
				case "#numlegions":			SetDropdown("#numlegions", myObj[x]);		break;
				case "#numfleets":			SetDropdown("#numfleets", myObj[x]);		break;
				case "#lbtype1":			SetDropdown("#lbtype1", myObj[x]);			break;
				case "#lbtype2":			SetDropdown("#lbtype2", myObj[x]);			break;
				case "#lbtype3":			SetDropdown("#lbtype3", myObj[x]);			break;
				case "#numactwars":			SetDropdown("#numactwars", myObj[x]);		break;
				case "#droughtlevel":		SetDropdown("#droughtlevel", myObj[x]);		break;
				case "#pontifexmaximus":	SetDropdown("#pontifexmaximus", myObj[x]);	break;
				case "#rule201":			SetCheckbox("#rule201", myObj[x]);			break;
				case "#rule202":			SetCheckbox("#rule202", myObj[x]);			break;
				case "#factionactiveA":		SetCheckbox("#factionactiveA", myObj[x]);	break;
				//case "#factionnameA":		SetCheckbox("#factionnameA", myObj[x]);		break;
				case "#numsenatorsA":		SetDropdown("#numsenatorsA", myObj[x]);		break;
				case "#numknightsA":		SetDropdown("#numknightsA", myObj[x]);		break;
				case "#factionleaderA":		SetCheckbox("#factionleaderA", myObj[x]);	break;
				case "#factionactiveB":		SetCheckbox("#factionactiveB", myObj[x]);	break;
				//case "#factionnameB":		SetCheckbox("#factionnameB", myObj[x]);		break;
				case "#numsenatorsB":		SetDropdown("#numsenatorsB", myObj[x]);		break;
				case "#numknightsB":		SetDropdown("#numknightsB", myObj[x]);		break;
				case "#factionleaderB":		SetCheckbox("#factionleaderB", myObj[x]);	break;
				case "#factionactiveC":		SetCheckbox("#factionactiveC", myObj[x]);	break;
				//case "#factionnameC":		SetCheckbox("#factionnameC", myObj[x]);		break;
				case "#numsenatorsC":		SetDropdown("#numsenatorsC", myObj[x]);		break;
				case "#numknightsC":		SetDropdown("#numknightsC", myObj[x]);		break;
				case "#factionleaderC":		SetCheckbox("#factionleaderC", myObj[x]);	break;
				case "#factionactiveD":		SetCheckbox("#factionactiveD", myObj[x]);	break;
				//case "#factionnameD":		SetCheckbox("#factionnameD", myObj[x]);		break;
				case "#numsenatorsD":		SetDropdown("#numsenatorsD", myObj[x]);		break;
				case "#numknightsD":		SetDropdown("#numknightsD", myObj[x]);		break;
				case "#factionleaderD":		SetCheckbox("#factionleaderD", myObj[x]);	break;
				case "#factionactiveE":		SetCheckbox("#factionactiveE", myObj[x]);	break;
				//case "#factionnameE":		SetCheckbox("#factionnameE", myObj[x]);		break;
				case "#numsenatorsE":		SetDropdown("#numsenatorsE", myObj[x]);		break;
				case "#numknightsE":		SetDropdown("#numknightsE", myObj[x]);		break;
				case "#factionleaderE":		SetCheckbox("#factionleaderE", myObj[x]);	break;
				case "#factionactiveF":		SetCheckbox("#factionactiveF", myObj[x]);	break;
				//case "#factionnameF":		SetCheckbox("#factionnameF", myObj[x]);		break;
				case "#numsenatorsF":		SetDropdown("#numsenatorsF", myObj[x]);		break;
				case "#numknightsF":		SetDropdown("#numknightsF", myObj[x]);		break;
				case "#factionleaderF":		SetCheckbox("#factionleaderF", myObj[x]);	break;
				case "#conctf1":			SetDropdown("#conctf1", myObj[x]);			break;
				case "#conctf2":			SetDropdown("#conctf2", myObj[x]);			break;
				case "#conctf3":			SetDropdown("#conctf3", myObj[x]);			break;
				case "#conctf4":			SetDropdown("#conctf4", myObj[x]);			break;
				case "#conctf5":			SetDropdown("#conctf5", myObj[x]);			break;
				case "#conctf6":			SetDropdown("#conctf6", myObj[x]);			break;
				case "#conchf":				SetDropdown("#conchf", myObj[x]);			break;
				case "#concmin":			SetDropdown("#concmin", myObj[x]);			break;
				case "#conclc":				SetDropdown("#conclc", myObj[x]);			break;
				case "#concaeg":			SetDropdown("#concaeg", myObj[x]);			break;
				case "#droughtaeg":			SetCheckbox("#droughtaeg", myObj[x]);		break;
				case "#concscg":			SetDropdown("#concscg", myObj[x]);			break;
				case "#droughtscg":			SetCheckbox("#droughtscg", myObj[x]);		break;
				case "#provaeg":			SetDropdown("#provaeg", myObj[x]);			break;
				case "#provaeg_spoils":		SetCheckbox("#provaeg_spoils", myObj[x]);	break;
				case "#provaeg_improved":	SetCheckbox("#provaeg_improved", myObj[x]);	break;
				case "#provafr":			SetDropdown("#provafr", myObj[x]);			break;
				case "#provafr_spoils":		SetCheckbox("#provafr_spoils", myObj[x]);	break;
				case "#provafr_improved":	SetCheckbox("#provafr_improved", myObj[x]);	break;
				case "#provasi":			SetDropdown("#provasi", myObj[x]);			break;
				case "#provasi_spoils":		SetCheckbox("#provasi_spoils", myObj[x]);	break;
				case "#provasi_improved":	SetCheckbox("#provasi_improved", myObj[x]);	break;
				case "#provbit":			SetDropdown("#provbit", myObj[x]);			break;
				case "#provbit_spoils":		SetCheckbox("#provbit_spoils", myObj[x]);	break;
				case "#provbit_improved":	SetCheckbox("#provbit_improved", myObj[x]);	break;
				case "#provcec":			SetDropdown("#provcec", myObj[x]);			break;
				case "#provcec_spoils":		SetCheckbox("#provcec_spoils", myObj[x]);	break;
				case "#provcec_improved":	SetCheckbox("#provcec_improved", myObj[x]);	break;
				case "#provcrc":			SetDropdown("#provcrc", myObj[x]);			break;
				case "#provcrc_spoils":		SetCheckbox("#provcrc_spoils", myObj[x]);	break;
				case "#provcrc_improved":	SetCheckbox("#provcrc_improved", myObj[x]);	break;
				case "#provgci":			SetDropdown("#provgci", myObj[x]);			break;
				case "#provgci_spoils":		SetCheckbox("#provgci_spoils", myObj[x]);	break;
				case "#provgci_improved":	SetCheckbox("#provgci_improved", myObj[x]);	break;
				case "#provgna":			SetDropdown("#provgna", myObj[x]);			break;
				case "#provgna_spoils":		SetCheckbox("#provgna_spoils", myObj[x]);	break;
				case "#provgna_improved":	SetCheckbox("#provgna_improved", myObj[x]);	break;
				case "#provgtr":			SetDropdown("#provgtr", myObj[x]);			break;
				case "#provgtr_spoils":		SetCheckbox("#provgtr_spoils", myObj[x]);	break;
				case "#provgtr_improved":	SetCheckbox("#provgtr_improved", myObj[x]);	break;
				case "#provhci":			SetDropdown("#provhci", myObj[x]);			break;
				case "#provhci_spoils":		SetCheckbox("#provhci_spoils", myObj[x]);	break;
				case "#provhci_improved":	SetCheckbox("#provhci_improved", myObj[x]);	break;
				case "#provhul":			SetDropdown("#provhul", myObj[x]);			break;
				case "#provhul_spoils":		SetCheckbox("#provhul_spoils", myObj[x]);	break;
				case "#provhul_improved":	SetCheckbox("#provhul_improved", myObj[x]);	break;
				case "#provill":			SetDropdown("#provill", myObj[x]);			break;
				case "#provill_spoils":		SetCheckbox("#provill_spoils", myObj[x]);	break;
				case "#provill_improved":	SetCheckbox("#provill_improved", myObj[x]);	break;
				case "#provmac":			SetDropdown("#provmac", myObj[x]);			break;
				case "#provmac_spoils":		SetCheckbox("#provmac_spoils", myObj[x]);	break;
				case "#provmac_improved":	SetCheckbox("#provmac_improved", myObj[x]);	break;
				case "#provsec":			SetDropdown("#provsec", myObj[x]);			break;
				case "#provsec_spoils":		SetCheckbox("#provsec_spoils", myObj[x]);	break;
				case "#provsec_improved":	SetCheckbox("#provsec_improved", myObj[x]);	break;
				case "#provsic":			SetDropdown("#provsic", myObj[x]);			break;
				case "#provsic_spoils":		SetCheckbox("#provsic_spoils", myObj[x]);	break;
				case "#provsic_improved":	SetCheckbox("#provsic_improved", myObj[x]);	break;
				case "#provsyr":			SetDropdown("#provsyr", myObj[x]);			break;
				case "#provsyr_spoils":		SetCheckbox("#provsyr_spoils", myObj[x]);	break;
				case "#provsyr_improved":	SetCheckbox("#provsyr_improved", myObj[x]);	break;
				case "#evilomens":			SetDropdown("#evilomens", myObj[x]);		break;
				default:
				  // unknown control
			  }
		}

		//document.getElementById("demo").innerHTML = text;	
	}


	// ----------------
	// Submit the form
	// ----------------
	$("#revgenform").submit(function(){
		// Generate the revenue log
		var logRevenue = GenerateRevenueLog(showDetails);

//logRevenue = FormatOutput(logRevenue, "roll20");
//logRevenue = FormatOutput(logRevenue, "html");

		// Load the revenue log into the modal
		$('.modal-body').html(FormatOutput(logRevenue, "html"));
		$('.modal-body-roll20').text(FormatOutput(logRevenue, "roll20"));
		//$('.modal-body-roll20').html(logRevenue, "roll20");

		// Display the modal
		$('#myModal').modal({show:true});
		
		return false;// Return false so that the the form is not cleared out
	});

	function GenerateRevenue(displayDetails)
	{
		// Generate the revenue log
		var logRevenue = GenerateRevenueLog(displayDetails);

//logRevenue = FormatOutput(logRevenue, "roll20");
//logRevenue = FormatOutput(logRevenue, "html");

		// Load the revenue log into the modal
		$('.modal-body').html(FormatOutput(logRevenue, "html"));
		$('.modal-body-roll20').text(FormatOutput(logRevenue, "roll20"));

		// Display the modal
		$('#myModal').modal({show:true});
		
		return false;// Return false so that the the form is not cleared out
	}

	function GenerateRevenue_TTS(displayDetails)
	{
		// Generate the revenue log
		var logRevenue = GenerateRevenueLog(displayDetails);

		//logRevenue = FormatOutput(logRevenue, "roll20");
		logRevenue = FormatOutput(logRevenue, "html");
		//alert(logRevenue);

		// Load the revenue log into the div
		//$('.modal-body').html(FormatOutput(logRevenue, "html"));
		//$('.modal-body-roll20').text(FormatOutput(logRevenue, "roll20"));

		$('#output-tts').html(logRevenue);

		// Display the modal
		//$('#myModal').modal({show:true});
		
		return false;// Return false so that the the form is not cleared out
	}

	// ---------------------------------------
	// Submit the form via the genrev button.
	// ---------------------------------------
	$("#genrev").click(function(){
//alert("genrev");
		GenerateRevenue(0);
	});	
	
	// ----------------------------------------------
	// Submit the form via the genrevdetails button.
	// ----------------------------------------------
	$("#genrevdetails").click(function(){
//alert("genrevdetails");
		GenerateRevenue(1);
	});	
	
	// ---------------------------------------
	// Submit the form via the genrev-tts button.
	// ---------------------------------------
	$("#genrev-tts").click(function(){
//alert("genrev-tts");
		GenerateRevenue_TTS(0);
	});	
			
	// ----------------------------------------------
	// Submit the form via the genrevdetails-tts button.
	// ----------------------------------------------
	$("#genrevdetails-tts").click(function(){
//alert("genrevdetails-tts");
		GenerateRevenue_TTS(1);
	});	

	// -----------------------------------
	// Save the game state to a JSON file
	// -----------------------------------
	$("#savegame").click(function(){
		// Get the data from the controls
		//var downloadControl = document.getElementById("txtdownload");
		//const obj = { hello: 'world' };
		//const obj = { downloadKey: downloadControl.value };
		//var fileContent = "My epic novel that I don't want to lose.";

		//var obj = { hello: 'world2' };
		var fileContent = BuildJSONFile();
		
		// Build the blob with JSON data
		//const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
		const blob = new Blob([fileContent], { type: 'text/plain' });
		//var blob = new Blob([fileContent], { type: 'text/plain' });
		
		// Download the JSON file
		var a = document.createElement('a');
		a.download = 'RevGen.ror';
		a.href = window.URL.createObjectURL(blob);
		a.click();
		//alert("Be sure to store your data to a safe place.");
	});	
	
	// -------------------------------
	// Load the game from a JSON file
	// -------------------------------
	$("#loadgame").click(function(){
		$('#fileUpload').click();
	});	

	// ----------------------------------------
	// Build the JSON file for saving the game
	// ----------------------------------------
	function BuildJSONFile()
	{
		var returnValue = "";

		returnValue += JSONDropdown("#numlegions");
		returnValue += JSONDropdown("#numfleets");
		returnValue += JSONDropdown("#lbtype1");
		returnValue += JSONDropdown("#lbtype2");
		returnValue += JSONDropdown("#lbtype3");				
		returnValue += JSONDropdown("#numactwars");
		returnValue += JSONDropdown("#droughtlevel");
		returnValue += JSONDropdown("#pontifexmaximus");
		returnValue += JSONCheckbox("#rule201");
		returnValue += JSONCheckbox("#rule202");
		returnValue += JSONCheckbox("#factionactiveA");
		//returnValue += JSONCheckbox("#factionnameA");
		returnValue += JSONDropdown("#numsenatorsA");
		returnValue += JSONDropdown("#numknightsA");
		returnValue += JSONCheckbox("#factionleaderA");
		returnValue += JSONCheckbox("#factionactiveB");
		//returnValue += JSONCheckbox("#factionnameB");
		returnValue += JSONDropdown("#numsenatorsB");
		returnValue += JSONDropdown("#numknightsB");
		returnValue += JSONCheckbox("#factionleaderB");	
		returnValue += JSONCheckbox("#factionactiveC");
		//returnValue += JSONCheckbox("#factionnameC");
		returnValue += JSONDropdown("#numsenatorsC");
		returnValue += JSONDropdown("#numknightsC");
		returnValue += JSONCheckbox("#factionleaderC");		
		returnValue += JSONCheckbox("#factionactiveD");
		//returnValue += JSONCheckbox("#factionnameD");
		returnValue += JSONDropdown("#numsenatorsD");
		returnValue += JSONDropdown("#numknightsD");
		returnValue += JSONCheckbox("#factionleaderD");
		returnValue += JSONCheckbox("#factionactiveE");
		//returnValue += JSONCheckbox("#factionnameE");
		returnValue += JSONDropdown("#numsenatorsE");
		returnValue += JSONDropdown("#numknightsE");
		returnValue += JSONCheckbox("#factionleaderE");
		returnValue += JSONCheckbox("#factionactiveF");
		//returnValue += JSONCheckbox("#factionnameF");
		returnValue += JSONDropdown("#numsenatorsF");
		returnValue += JSONDropdown("#numknightsF");
		returnValue += JSONCheckbox("#factionleaderF");
		returnValue += JSONDropdown("#conctf1");
		returnValue += JSONDropdown("#conctf2");
		returnValue += JSONDropdown("#conctf3");
		returnValue += JSONDropdown("#conctf4");
		returnValue += JSONDropdown("#conctf5");
		returnValue += JSONDropdown("#conctf6");
		returnValue += JSONDropdown("#conchf");
		returnValue += JSONDropdown("#concmin");
		returnValue += JSONDropdown("#conclc");
		returnValue += JSONDropdown("#concaeg");
		returnValue += JSONCheckbox("#droughtaeg");
		returnValue += JSONDropdown("#concscg");
		returnValue += JSONCheckbox("#droughtscg");
		returnValue += JSONDropdown("#provaeg");
		returnValue += JSONCheckbox("#provaeg_spoils");
		returnValue += JSONCheckbox("#provaeg_improved");
		returnValue += JSONDropdown("#provafr");
		returnValue += JSONCheckbox("#provafr_spoils");
		returnValue += JSONCheckbox("#provafr_improved");
		returnValue += JSONDropdown("#provasi");
		returnValue += JSONCheckbox("#provasi_spoils");
		returnValue += JSONCheckbox("#provasi_improved");
		returnValue += JSONDropdown("#provbit");
		returnValue += JSONCheckbox("#provbit_spoils");
		returnValue += JSONCheckbox("#provbit_improved");
		returnValue += JSONDropdown("#provcec");
		returnValue += JSONCheckbox("#provcec_spoils");
		returnValue += JSONCheckbox("#provcec_improved");
		returnValue += JSONDropdown("#provcrc");
		returnValue += JSONCheckbox("#provcrc_spoils");
		returnValue += JSONCheckbox("#provcrc_improved");
		returnValue += JSONDropdown("#provgci");
		returnValue += JSONCheckbox("#provgci_spoils");
		returnValue += JSONCheckbox("#provgci_improved");
		returnValue += JSONDropdown("#provgna");
		returnValue += JSONCheckbox("#provgna_spoils");
		returnValue += JSONCheckbox("#provgna_improved");
		returnValue += JSONDropdown("#provgtr");
		returnValue += JSONCheckbox("#provgtr_spoils");
		returnValue += JSONCheckbox("#provgtr_improved");
		returnValue += JSONDropdown("#provhci");
		returnValue += JSONCheckbox("#provhci_spoils");
		returnValue += JSONCheckbox("#provhci_improved");
		returnValue += JSONDropdown("#provhul");
		returnValue += JSONCheckbox("#provhul_spoils");
		returnValue += JSONCheckbox("#provhul_improved");
		returnValue += JSONDropdown("#provill");
		returnValue += JSONCheckbox("#provill_spoils");
		returnValue += JSONCheckbox("#provill_improved");
		returnValue += JSONDropdown("#provmac");
		returnValue += JSONCheckbox("#provmac_spoils");
		returnValue += JSONCheckbox("#provmac_improved");
		returnValue += JSONDropdown("#provsec");
		returnValue += JSONCheckbox("#provsec_spoils");
		returnValue += JSONCheckbox("#provsec_improved");
		returnValue += JSONDropdown("#provsic");
		returnValue += JSONCheckbox("#provsic_spoils");
		returnValue += JSONCheckbox("#provsic_improved");
		returnValue += JSONDropdown("#provsyr");
		returnValue += JSONCheckbox("#provsyr_spoils");
		returnValue += JSONCheckbox("#provsyr_improved");
		returnValue += JSONDropdown("#evilomens");

		returnValue = '{' + returnValue.slice(0,-1) + '}';

//alert(returnValue);

		return returnValue;
	}

	// ------------------------------
	// Build the JSON for a checkbox
	// ------------------------------
	function JSONCheckbox(control)
	{
		var returnValue = "";

		returnValue = '"' + control + '":"' + $(control).prop('checked') + '",';

		return returnValue;
	}

	// ------------------------------
	// Build the JSON for a dropdown
	// ------------------------------
	function JSONDropdown(control)
	{
		var returnValue = "";

		returnValue = '"' + control + '":"' + $(control).val() + '",';

		return returnValue;
	}

	// --------------------------------------
	// Set the value of the checkbox control
	// --------------------------------------
	function SetCheckbox(control, value)
	{
		//$("#" + provID + "_improved").attr('checked', 'checked');
		if (value == "true")
		{
			$(control).attr('checked', true);
		}
		else
		{
			$(control).attr('checked', false);
		}	
	}

	// --------------------------------------
	// Set the value of the dropdown control
	// --------------------------------------
	function SetDropdown(control, value)
	{
		$(control).val(value).change();
	}

	// -------------------------------------------------
	// Hide or show Pontifex Maximus label and control.
	// -------------------------------------------------
	$(document).ready(function(){
		$('input[type="checkbox"]').click(function(){
			if($("#rule201").prop('checked') == true){
				document.getElementById("pontifexmaximuslabel").style.display = "block";
				document.getElementById("pontifexmaximus").style.display = "block";
			}
			else if($(this).prop('checked') == false){
				document.getElementById("pontifexmaximuslabel").style.display = "none";
				document.getElementById("pontifexmaximus").style.display = "none";
			}
		});
	});

	// ---------------------------------------------------
	// Handle copying modal text to clipboard for Roll20.
	// ---------------------------------------------------
	$('#copytoclipboard').on("click", function(){
		//value = $('.modal-body').text();
		value = $('.modal-body-roll20').text();
 
/*
        var $temp = $("<input>");    // This was causing line feeds to be dropped when copying to the clipboard
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();
*/

		//var $temp = $("<input>");    // This was causing line feeds to be dropped when copying to the clipboard
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();

		return false;  // True = modal will close; False = modal will NOT close
    })

	// -----------------------------------------------
	// Format the the input based on the value given.
	// -----------------------------------------------
	function FormatOutput(inputValue, outputType)
	{
		var outputValue = inputValue;

		switch(outputType) {
			case "roll20":
				// Pre-pend the current date/time
				//var d = new Date();
				//outputValue = ":TableStart:" + ":HeaderStart:" + d.toString() + ":HeaderEnd::TableEnd:" + outputValue;
				
				outputValue = ":TableStart:" + ":HeaderStart:" + 
								//"&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;&#9866;" + 
								//"&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;&#9868;" + 
								//"&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;&#127922;" +
								"&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;" +
								"&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;" +
								"&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;&#128176;" +
								":HeaderEnd::TableEnd:" + outputValue;
				
				// Convert input to Roll20 format
				outputValue = outputValue.replace(/:TableStart:/g, "&{template:default}");
				outputValue = outputValue.replace(/:HeaderStart:/g, "{{name=");
				outputValue = outputValue.replace(/:HeaderEnd:/g, "}}");
				outputValue = outputValue.replace(/:RowStart:/g, "{{");
				outputValue = outputValue.replace(/:RowEnd:/g, "}}");
				outputValue = outputValue.replace(/:RowDelimiter:/g, "=");
				outputValue = outputValue.replace(/:TableEnd:/g, "\n");// <--- **** Why isn't this working in Roll20? ****
				break;
			case "html":
				// Convert input to HTML format
				outputValue = outputValue.replace(/:TableStart:/g, '<table class=\"table table-striped\">');
				outputValue = outputValue.replace(/:HeaderStart:/g, '<thead><tr><th style=\"padding: .25rem;\" colspan=\"2\">');
				outputValue = outputValue.replace(/:HeaderEnd:/g, "</th></tr></thead>");
				outputValue = outputValue.replace(/:RowStart:/g, "<tr><td style=\"padding: .25rem;\">");
				outputValue = outputValue.replace(/:RowEnd:/g, "</td></tr>");
				outputValue = outputValue.replace(/:RowDelimiter:/g, "</td><td style=\"padding: .25rem;\">");
				outputValue = outputValue.replace(/:TableEnd:/g, "</table>");
				break;
			default:
				// Undefined
		  }

		return (outputValue);
	}

	// ----------------------------------
	// Main routine to generate revenue.
	// ----------------------------------
	function GenerateRevenueLog(showDetails)
	{	
		var stateRevenue	= 100;
		var stateLogDetail	= "";
		var stateLogRemind  = "";
		var factLogSum		= "";
		var factLogDetail	= "";
		var factLogRemind	= "";

		// Calculate State Revenue
		var stateLegionCost = parseInt($("#numlegions").val()) * 2;
		var stateFleetCost = parseInt($("#numfleets").val()) * 2;
		var stateLBCost = (parseInt($("#lbtype1").val()) * 20) + (parseInt($("#lbtype2").val()) * 5) + (parseInt($("#lbtype3").val()) * 10);
		var stateActWarCost = parseInt($("#numactwars").val()) * 20;
		stateLogDetail += ":RowStart:Annual Revenue:RowDelimiter:100:RowEnd:";
		if (stateLegionCost != 0) {stateLogDetail += ":RowStart:Legions:RowDelimiter:-" + stateLegionCost + ":RowEnd:";}
		if (stateFleetCost != 0) {stateLogDetail += ":RowStart:Fleets:RowDelimiter:-" + stateFleetCost + ":RowEnd:";}
		if (stateLBCost != 0) {stateLogDetail += ":RowStart:Land Bills:RowDelimiter:-" + stateLBCost + ":RowEnd:";}
		if (stateActWarCost != 0) {stateLogDetail += ":RowStart:Active Wars:RowDelimiter:-" + stateActWarCost + ":RowEnd:";}
		stateRevenue = stateRevenue - stateLegionCost - stateFleetCost - stateLBCost - stateActWarCost;

		// Set Land Bill 1 back to zero
		if (parseInt($("#lbtype1").val()) > 0) 
		{
			$("#lbtype1").val('00').change();
			stateLogRemind += ":RowStart:Remove Type 1 Land Bill marker:RowEnd:";
		}

		// Calculate revenue for Factions
		factionA = GenerateFactionRevenue("A");factLogSum += factionA[0];factLogDetail += factionA[1];factLogRemind += factionA[2];stateRevenue += factionA[3];
		factionB = GenerateFactionRevenue("B");factLogSum += factionB[0];factLogDetail += factionB[1];factLogRemind += factionB[2];stateRevenue += factionB[3];
		factionC = GenerateFactionRevenue("C");factLogSum += factionC[0];factLogDetail += factionC[1];factLogRemind += factionC[2];stateRevenue += factionC[3];
		factionD = GenerateFactionRevenue("D");factLogSum += factionD[0];factLogDetail += factionD[1];factLogRemind += factionD[2];stateRevenue += factionD[3];
		factionE = GenerateFactionRevenue("E");factLogSum += factionE[0];factLogDetail += factionE[1];factLogRemind += factionE[2];stateRevenue += factionE[3];
		factionF = GenerateFactionRevenue("F");factLogSum += factionF[0];factLogDetail += factionF[1];factLogRemind += factionF[2];stateRevenue += factionF[3];
		
		// Calculuate revenue for State
		provRev = GetProvinceStateRevenue("provaeg", "Aegyptus",            0,  1,  0, 1,  1,  3);stateRevenue += provRev[0];stateLogDetail += provRev[1];																				
		provRev = GetProvinceStateRevenue("provafr", "Africa",              2,  1, -4, 1,  1,  1);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provasi", "Asia",                2,  1, -3, 2,  1,  3);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provbit", "Bithynia",            1,  1, -2, 1,  1,  2);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provcec", "Cilicia et Cyprus",   1, -1,  0, 1, -1,  3);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provcrc", "Creta et Cyrenaica",  1,  1, -2, 1,  1,  2);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provgci", "Gallia Cisalpina",    1,  1, -1, 2,  1, -1);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provgna", "Gallia Narbonensis",  1,  1, -3, 1,  1,  1);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provgtr", "Gallia Transalpina",  1,  1, -5, 1,  1,  1);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provhci", "Hispania Citerior",   1, -1,  1, 1,  1,  1);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provhul", "Hispania Ulterior",   1, -1, -1, 1,  1, -1);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provill", "Illyricum",           1, -1, -1, 1,  1,  0);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provmac", "Macedonia",           2,  1, -2, 2,  1,  2);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provsec", "Sardinia et Corsica", 1, -1, -1, 1, -1,  1);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provsic", "Sicilia",             2,  1, -2, 1,  1,  2);stateRevenue += provRev[0];stateLogDetail += provRev[1];
		provRev = GetProvinceStateRevenue("provsyr", "Syria",               1,  1,  0, 1,  1,  0);stateRevenue += provRev[0];stateLogDetail += provRev[1];
				
		factLogSum = ":TableStart:" + ":HeaderStart:Revenue Summary (Totals):RowEnd:" + ":RowStart:State:RowDelimiter:" + stateRevenue + ":RowEnd:" + factLogSum + ":TableEnd:";
		if (stateLogDetail != ""){stateLogDetail = ":TableStart:" + ":HeaderStart:State Details:RowEnd:" + stateLogDetail + ":TableEnd:";}
		if (stateLogRemind != ""){stateLogRemind = ":TableStart:" + ":HeaderStart:State Reminders:RowEnd:" + stateLogRemind + ":TableEnd:";}

		// Build final output
		//var d = new Date();
		var outputLog = "";
		//outputLog += ":TableStart:" + ":HeaderStart:" + d.toString() + ":HeaderEnd::TableEnd:";
		outputLog += factLogSum;
		if (showDetails) {outputLog += factLogDetail;}  // If Faction details to be shown
		outputLog += factLogRemind;
		if (showDetails) {outputLog += stateLogDetail;}	// If State details to be shown
		outputLog += stateLogRemind;

		return(outputLog);

	}

	// --------------------------------------------
	// Generate the revenue for the given faction.
	// --------------------------------------------
	function GenerateFactionRevenue(factionID)
	{
		var factRevenue		= 0;
		var factLogSum		= "";
		var factLogDetail	= "";
		var factLogRemind	= "";
		var provDetail 		= "";
		var provRemind 		= "";
		var stateRevenue	= 0;

		if ($("#factionactive" + factionID).is(":checked")) 
		{
			// Get control values
			var factName	  = $("#factionname" + factionID).val();
			var numSenators	  = parseInt($("#numsenators" + factionID).val());
			var numKnights    = parseInt($("#numknights" + factionID).val());
			var factLeaderSet = $("#factionleader" + factionID).is(":checked");
				
			var revSenators = 0;
			revSenators += numSenators;
			if (factLeaderSet) {revSenators += 2;}	// The third talent for Faction Leader is accounted for in the number of Senators
			factRevenue += revSenators;
			
			var revKnights = numKnights;
			factRevenue += revKnights;
					
			var revConcessions = 0;
			if ($("#conctf1").val() == factionID) {revConcessions += 2;}	// Tax Farmer #1
			if ($("#conctf2").val() == factionID) {revConcessions += 2;}	// Tax Farmer #2
			if ($("#conctf3").val() == factionID) {revConcessions += 2;}	// Tax Farmer #3
			if ($("#conctf4").val() == factionID) {revConcessions += 2;}	// Tax Farmer #4
			if ($("#conctf5").val() == factionID) {revConcessions += 2;}	// Tax Farmer #5
			if ($("#conctf6").val() == factionID) {revConcessions += 2;}	// Tax Farmer #6
			if ($("#conchf").val() == factionID) {revConcessions += 3;}		// Harbor Fees
			if ($("#concmin").val() == factionID) {revConcessions += 3;}	// Mining
			if ($("#conclc").val() == factionID) {revConcessions += 3;}		// Land Commissioner
			
			var droughtLevel = parseInt($("#droughtlevel").val());// Get drought level
			var droughtMult = 1;// Drought multiplier
			
			// Aegyptian Grain
			if ($("#concaeg").val() == factionID) 
			{
				if (droughtLevel > 0 && $("#droughtaeg").is(":checked")) // If Faction is taking drought graft
				{
					droughtMult = droughtLevel + 1;// Set drought multiplier equal to drought level + 1 
					factLogRemind += ":RowStart:Holder of Aegyptian Grain loses " + droughtLevel + " Popularity!:RowEnd:";
				}
				revConcessions += 5 * droughtMult;
			}
			
			// Sicilian Grain
			if ($("#concscg").val() == factionID) 
			{
				if (droughtLevel > 0 && $("#droughtscg").is(":checked")) // If Faction is taking drought graft
				{
					droughtMult = droughtLevel + 1;// Set drought multiplier equal to drought level + 1 
					factLogRemind += ":RowStart:Holder of Sicilian Grain loses " + droughtLevel + " Popularity!:RowEnd:";
				}
				revConcessions += 4 * droughtMult;
			}
		
			factRevenue += revConcessions;
			
			// Temple Donations for Pontifex Maximus
			var revTempleDonations = 0;
			var revTempleLog = "";
			if ($("#rule201").is(":checked") && $("#pontifexmaximus").val() == factionID) {
				result = RollDice(1, 1, 0);
				revTempleDonations += parseInt(result[0]);
				resultLog = result[1];

				revTempleLog += ":RowStart:Temple Donations:RowDelimiter:" + revTempleDonations + resultLog + ":RowEnd:";
			}
			factRevenue += revTempleDonations;

			// Generate Provincial Income
			result = GetProvinceFactionRevenue(factionID, "provaeg", "Aegyptus",            0, 0,  0, 1, 1,  7,  0, 60);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];		
			result = GetProvinceFactionRevenue(factionID, "provafr", "Africa",              1, 1, -1, 1, 1,  3, 20, 30);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provasi", "Asia",                1, 1,  2, 1, 1,  6, 35, 50);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provbit", "Bithynia",            1, 1, -4, 1, 1,  2, 10, 30);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provcec", "Cilicia et Cyprus",   1, 1, -4, 1, 1,  0, 10, 20);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provcrc", "Creta et Cyrenaica",  1, 1, -1, 1, 1,  1, 15, 20);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provgci", "Gallia Cisalpina",    1, 1, -1, 1, 1,  3, 15, 20);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provgna", "Gallia Narbonensis",  1, 1, -3, 1, 1,  1, 10, 20);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provgtr", "Gallia Transalpina",  1, 1, -4, 1, 1,  0, 10, 20);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provhci", "Hispania Citerior",   1, 1, -2, 1, 1,  2, 10, 15);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provhul", "Hispania Ulterior",   1, 1, -3, 1, 1,  1, 10, 20);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provill", "Illyricum",           1, 1, -3, 1, 1,  0,  5, 15);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provmac", "Macedonia",           1, 1,  1, 2, 1, -1, 30, 40);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provsec", "Sardinia et Corsica", 1, 1, -5, 1, 1, -1,  5, 10);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provsic", "Sicilia",             1, 1,  0, 1, 1,  4, 30, 40);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];
			result = GetProvinceFactionRevenue(factionID, "provsyr", "Syria",               1, 1, -1, 1, 1,  3, 20, 30);factRevenue += result[0];provDetail += result[1];factLogRemind += result[2];stateRevenue += result[3];

			// Build summary logs
			factLogSum = ":RowStart:" + factName + ":RowDelimiter:" + factRevenue + ":RowEnd:";

			// Build faction detail log
			factLogDetail = ":TableStart:" + 
							":HeaderStart:" + factName + " Details:HeaderEnd:" +
							":RowStart:Total:RowDelimiter:" + factRevenue + ":RowEnd:" +
							":RowStart:Senators:RowDelimiter:" + revSenators + ":RowEnd:" +
							":RowStart:Knights:RowDelimiter:" + revKnights + ":RowEnd:" +
							":RowStart:Concessions:RowDelimiter:" + revConcessions + ":RowEnd:" + 
							revTempleLog + 
							provDetail + ":TableEnd:";

			// Build faction reminder log
			if (factLogRemind != "")
			{
				factLogRemind = ":TableStart:" + 
									":HeaderStart:" + factName + " Reminders:HeaderEnd:" + 
									factLogRemind + ":TableEnd:";
			}
				
		}

		return [factLogSum, factLogDetail, factLogRemind, stateRevenue];
	}
	
	// ---------------------------------------------------
	// Generate the state revenue for the given province.
	// ---------------------------------------------------
	function GetProvinceStateRevenue(provID, provName,
											stateUnimpSpoilsDice, stateUnimpSpoilsMult, stateUnimpSpoilsAdd,
											stateImpSpoilsDice, stateImpSpoilsMult, stateImpSpoilsAdd)
	{
		var stateRevenue = 0;
		var stateDetail  = "";
		var resultLog 	 = "";

		// If a governor is assigned to the province
		if ($("#" + provID).val() != "" && $("#" + provID).val() != "X")
		{
			// Generate State spoils
			if ($("#" + provID + "_improved").is(":checked"))						
			{
				// Province is already improved
				result = RollDice(stateImpSpoilsDice, stateImpSpoilsMult, stateImpSpoilsAdd);
				stateRevenue += parseInt(result[0]);
				resultLog = result[1];
			}
			else										
			{
				// Province is not improved
				result = RollDice(stateUnimpSpoilsDice, stateUnimpSpoilsMult, stateUnimpSpoilsAdd);
				stateRevenue += parseInt(result[0]);
				resultLog = result[1];
			}

			stateDetail += ":RowStart:" + provName + ":RowDelimiter:" + stateRevenue + resultLog + ":RowEnd:";
		}
	
		return [stateRevenue, stateDetail];
	}
	
	// -------------------------------------------------------------------------------------------
	// Generate the provincial revenue for the given faction.  Also handles improving the province.
	// Does handle situations where faction spoliation results in a negative value. In this case, 
	// negative values will be applied to the total State Revenue.
	// -------------------------------------------------------------------------------------------
	function GetProvinceFactionRevenue(factionID, provID, provName,
											provUnimpSpoilsDice, provUnimpSpoilsMult, provUnimpSpoilsAdd,
											provImpSpoilsDice, provImpSpoilsMult, provImpSpoilsAdd,
											provUnimpTaxes, provImpTaxes) 
	{
		var factRevenue   = 0;
		var factLogDetail = "";
		var factLogRemind = "";
		var stateRevenue  = 0;
		var resultLog 	  = ""; // Stores the log value of a dice roll (e.g. "(1d6+3=4+3)" )
	
		// Verify a province's governor is in current faction
		if ($("#" + provID).val() == factionID) 
		{
			// If spoils being taken
			if ($("#" + provID + "_spoils").is(":checked"))
			{
				// If province is improved
				if ($("#" + provID + "_improved").is(":checked"))
				{
					// Province is improved
					result = RollDice(provImpSpoilsDice, provImpSpoilsMult, provImpSpoilsAdd);
					factRevenue = parseInt(result[0]);
					resultLog = result[1];
				}
				else
				{
					// Province is not improved
					result = RollDice(provUnimpSpoilsDice, provUnimpSpoilsMult, provUnimpSpoilsAdd);
					factRevenue = parseInt(result[0]);
					resultLog = result[1];					
				}

				// Apply negative revenue to State rather than faction
				if (factRevenue < 0)
				{
					stateRevenue += factRevenue;
					factRevenue = 0;
				}

				factLogDetail += ":RowStart:" + provName + ":RowDelimiter:" + factRevenue + " " + resultLog + ":RowEnd:"
				factLogRemind += ":RowStart:Governor of " + provName + " is corrupt:RowEnd:";
			}
			
			// If province is not improved, then roll for improvement
			if (!$("#" + provID + "_improved").is(":checked"))
			{
				var improveMod = 0;
				var improveResult = 0;
				if (!$("#" + provID + "_spoils").is(":checked"))
				{
					// Spoils not being taken
					improveMod = 1;
				}
				result = RollDice(1, 1, improveMod);
				improveResult = parseInt(result[0]);
				
				if (improveResult >= 5)
				{
					// Province was improved
					factLogRemind += ":RowStart:" + provName + " was improved!:RowEnd:";
					factLogRemind += ":RowStart:Governor of " + provName + " gains +3 influence:RowEnd:";
					factLogRemind += ":RowStart:Mark " + provName + " as improved:RowEnd:";
					
					// Update improve value for the province so that the State income is adjusted
					$("#" + provID + "_improved").attr('checked', 'checked');
				}
			}

			// If Provincial Wars rule is being used, then include reminder for local taxes
			if ($("#rule202").is(":checked"))
			{
				if ($("#" + provID + "_improved").is(":checked"))
				{
					// Province is improved
					factLogRemind += ":RowStart:Spend Local Taxes (" + provImpTaxes + ") for " + provName + ":RowEnd:";
				}
				else
				{
					// Province is not improved
					factLogRemind += ":RowStart:Spend Local Taxes (" + provUnimpTaxes + ") for " + provName + ":RowEnd:";
				}
			}

			factLogRemind += ":RowStart:Update Term marker for Governor of " + provName + ":RowEnd:";
		}
		
		return [factRevenue, factLogDetail, factLogRemind, stateRevenue];
	}
	
	// ----------------------------------------------
	// Roll dice  (diceNum * 6) * diceMult + diceAdd
	// Examples: 1d6+1, -1d6-1, 2d6-3
	// ----------------------------------------------
	function RollDice(diceNum, diceMult, diceAdd)
	{
		var returnValue = 0;
		var diceCurrValue = 0
		var diceValue = 0;
		var log = "";
		var diceLog = "";
		var diceImageLog = "";
		var diceImageValue = 0;
		
		// Roll dem bones
		for (i = 0; i < diceNum; i++) {
			diceCurrValue = Math.floor(Math.random() * 6) + 1;
			diceLog += diceCurrValue + "+";
			diceValue += diceCurrValue;
			
			// Display image for dice.  Note, images were too small to be legible.
			/*
			diceCurrValue = Math.floor(Math.random() * 6) + 1;
			diceImageValue = diceCurrValue + 9855;	// Add 9855 to the dice value to get the Decimal code for the dice image
			diceImageLog = "&#" + diceImageValue + ";"; 		
			diceLog += diceImageLog + "+";
			diceValue += diceCurrValue;
			*/
		}
		
		// Remove trailing "+" from diceLog
		diceLog = diceLog.substr(0, diceLog.length - 1);

		if (diceNum > 1) {diceLog = "[" + diceLog + "]";}	// If multiple dice were rolled, then wrap diceLog in square brackets
		
		// Mutliply the dice roll by the multiplier (to account for negative dice) and add modifier
		returnValue = (diceValue * diceMult) + diceAdd;
		
		// Build log
		log = "  (";
		if (diceMult < 0) {log += "-";}			// Add leading negative sign for a negative multiplier
		log += diceNum + "d6";
		if (diceAdd > 0) {log += "+";}			// Add positive sign for a positive adder
		if (diceAdd != 0) {log += diceAdd;}		// Adder is zero, so don't include + or -
		//log += " &#8594; ";						// Add thin arrow
		log += " &#x279C; "						// Add thick arrow
		if (diceMult < 0) {log += "-";}			// Add leading negative sign for a negative multiplier
		log += diceLog;
		if (diceAdd > 0) {log += "+";}			// Add positive sign for a positive adder
		if (diceAdd != 0) {log += diceAdd;}		// Adder is zero, so don't include + or -

		// Clear dice log if the dicedetails checkbox is not set
		//if (logDetails != 1) {log = "";}

		// Check to see if Evil Omens is in effect
		//if ($("#evilomens").is(":checked"))
		var evilOmensLevelString = $("#evilomens").val();
		var evilOmensLevel = parseInt(evilOmensLevelString);
		if (evilOmensLevel > 0)
		{
			returnValue = returnValue - evilOmensLevel;
			log += "-" + evilOmensLevelString;
		}
		log += ")";								// Add closing parenthesis for log

		return [returnValue, log];
	}


});
