// JavaScript Document
var tooth1=0;
var tooth2=0;
var tooth3=0;
var tooth4=0;
var tooth5=0;
var tooth6=0;
var tooth7=0;
//(nothing=0, saw=1, fang=2, chopper=3, piercer=4, crusher=5)

var valTooth=0;
var toothQuality="Very Bad"

/*
Table Organization: Rows=tooth number (1-7), columns=tooth type (nothing=0, saw=1, fang=2, chopper=3, piercer=4, crusher=5)
*/
var toothTable = [[0,5,2,7,4,1],
				[0,4,2,7,4,1],
				[0,3,2,5,3,2],
				[0,3,2,5,2,5],
				[0,3,2,3,1,7],
				[0,3,1,2,2,7],
				[0,3,1,1,1,7],
				];
				
				
var topToothDictionary={};
var bottomToothDictionary={};

topToothDictionary[0]="Final Visuals/ToothSlots/Top-Empty.png";
bottomToothDictionary[0]="Final Visuals/ToothSlots/Bottom-Empty.png";
topToothDictionary[1]="Final Visuals/ToothSlots/Top-Saw.png";
bottomToothDictionary[1]="Final Visuals/ToothSlots/Bottom-Saw.png";
topToothDictionary[2]="Final Visuals/ToothSlots/Top-Fang.png";
bottomToothDictionary[2]="Final Visuals/ToothSlots/Bottom-Fang.png";
topToothDictionary[3]="Final Visuals/ToothSlots/Top-Chop.png";
bottomToothDictionary[3]="Final Visuals/ToothSlots/Bottom-Chop.png";
topToothDictionary[4]="Final Visuals/ToothSlots/Top-Pierce.png";
bottomToothDictionary[4]="Final Visuals/ToothSlots/Bottom-Pierce.png";
topToothDictionary[5]="Final Visuals/ToothSlots/Top-Crush.png";
bottomToothDictionary[5]="Final Visuals/ToothSlots/Bottom-Crush.png";

var height=0;
var leafMass=0;
				
function begin(){
	localStorage.clear();
}

function updateValTooth(){ 
	this.valTooth=this.toothTable[0][this.tooth1]+
	this.toothTable[1][this.tooth2]+
	this.toothTable[2][this.tooth3]+
	this.toothTable[3][this.tooth4]+
	this.toothTable[4][this.tooth5]+
	this.toothTable[5][this.tooth6]+
	this.toothTable[6][this.tooth7];
	document.getElementById("resultPic").src="Final Visuals/blank_quality.png";
	document.getElementById("Mass").innerHTML="?";
}


function showValues(){
	oForm=document.forms["hInput"];
	height=Number(oForm.elements["height"].value);
	leafScore=Number(oForm.elements["leafScore"].value);
	totalMass=height+leafScore+this.toothTable[0][this.tooth1]*1.5+this.toothTable[1][this.tooth2]*1.5;
	totalMass=Math.round((totalMass-50)*2/3);
	leafMass=totalMass;
	document.getElementById("Mass").innerHTML=leafMass;
	if(valTooth<=14){
		this.toothQuality="Very Poor"
		document.getElementById("resultPic").src="Final Visuals/very_poor_quality.png";
		}
	else if(14<valTooth && valTooth<=20){
		this.toothQuality="Poor"
		document.getElementById("resultPic").src="Final Visuals/poor_quality.png";
		}
	else if(20<valTooth && valTooth<=26){
		this.toothQuality="Fair"
		document.getElementById("resultPic").src="Final Visuals/fair_quality.png";
		}
	else if(26<valTooth && valTooth<=32){
		this.toothQuality="Good"
		document.getElementById("resultPic").src="Final Visuals/good_quality.png";
		}
	else if(32<valTooth && valTooth<=40){
		this.toothQuality="Very Good"
		document.getElementById("resultPic").src="Final Visuals/very_good_quality.png";
		}
	else if(40<valTooth){
		this.toothQuality="Excellent"
		document.getElementById("resultPic").src="Final Visuals/excellent_quality.png";
		}
}

function cancelTooth(toothNum){
	if(toothNum==1){
		this.tooth1=0;
		document.getElementById("Top1").src=topToothDictionary[0];
		document.getElementById("Bottom1").src=bottomToothDictionary[0];
		}
	else if(toothNum==2){
		this.tooth2=0;
		document.getElementById("Top2").src=topToothDictionary[0];
		document.getElementById("Bottom2").src=bottomToothDictionary[0];
		}
	else if(toothNum==3){
		this.tooth3=0;
		document.getElementById("Top3").src=topToothDictionary[0];
		document.getElementById("Bottom3").src=bottomToothDictionary[0];
		}
	else if(toothNum==4){
		this.tooth4=0;
		document.getElementById("Top4").src=topToothDictionary[0];
		document.getElementById("Bottom4").src=bottomToothDictionary[0];
		}
	else if(toothNum==5){
		this.tooth5=0;
		document.getElementById("Top5").src=topToothDictionary[0];
		document.getElementById("Bottom5").src=bottomToothDictionary[0];
		}
	else if(toothNum==6){
		this.tooth6=0;
		document.getElementById("Top6").src=topToothDictionary[0];
		document.getElementById("Bottom6").src=bottomToothDictionary[0];
		}
	else if(toothNum==7){
		this.tooth7=0;
		document.getElementById("Top7").src=topToothDictionary[0];
		document.getElementById("Bottom7").src=bottomToothDictionary[0];
		}
	else{
		return;
		}
	this.updateValTooth();
}


function changeTooth(toothNum, toothType){
	if(toothNum==1){
		this.tooth1=toothType;
		document.getElementById("Top1").src=topToothDictionary[toothType];
		document.getElementById("Bottom1").src=bottomToothDictionary[toothType];
		}
	else if(toothNum==2){
		this.tooth2=toothType;
		document.getElementById("Top2").src=topToothDictionary[toothType];
		document.getElementById("Bottom2").src=bottomToothDictionary[toothType];
		}
	else if(toothNum==3){
		this.tooth3=toothType;
		document.getElementById("Top3").src=topToothDictionary[toothType];
		document.getElementById("Bottom3").src=bottomToothDictionary[toothType];
		}
	else if(toothNum==4){
		this.tooth4=toothType;
		document.getElementById("Top4").src=topToothDictionary[toothType];
		document.getElementById("Bottom4").src=bottomToothDictionary[toothType];
		}
	else if(toothNum==5){
		this.tooth5=toothType;
		document.getElementById("Top5").src=topToothDictionary[toothType];
		document.getElementById("Bottom5").src=bottomToothDictionary[toothType];
		}
	else if(toothNum==6){
		this.tooth6=toothType;
		document.getElementById("Top6").src=topToothDictionary[toothType];
		document.getElementById("Bottom6").src=bottomToothDictionary[toothType];
		}
	else if(toothNum==7){
		this.tooth7=toothType;
		document.getElementById("Top7").src=topToothDictionary[toothType];
		document.getElementById("Bottom7").src=bottomToothDictionary[toothType];
		}
	else{
		return;
		}
	this.updateValTooth();
	}

	
function drag(ev){
	if(ev.target.id=="sawTooth"){
		ev.dataTransfer.setData("int", 1)
		}
	else if(ev.target.id=="fangTooth"){
		ev.dataTransfer.setData("int", 2)
		}
	else if(ev.target.id=="chopTooth"){
		ev.dataTransfer.setData("int", 3)
		}
	else if(ev.target.id=="pierceTooth"){
		ev.dataTransfer.setData("int", 4)
		}
	else if(ev.target.id=="crushTooth"){
		ev.dataTransfer.setData("int", 5)
		}
	else{
		}
	}
	
function allowDrop(ev, toothNum) {
    ev.preventDefault();
	if(toothNum==1){
		document.getElementById("Top1").style.opacity="0.5";
		document.getElementById("Bottom1").style.opacity="0.5";
		}
	else if(toothNum==2){
		document.getElementById("Top2").style.opacity="0.5";
		document.getElementById("Bottom2").style.opacity="0.5";
		}
	else if(toothNum==3){
		document.getElementById("Top3").style.opacity="0.5";
		document.getElementById("Bottom3").style.opacity="0.5";
		}
	else if(toothNum==4){
		document.getElementById("Top4").style.opacity="0.5";
		document.getElementById("Bottom4").style.opacity="0.5";
		}
	else if(toothNum==5){
		document.getElementById("Top5").style.opacity="0.5";
		document.getElementById("Bottom5").style.opacity="0.5";
		}
	else if(toothNum==6){
		document.getElementById("Top6").style.opacity="0.5";
		document.getElementById("Bottom6").style.opacity="0.5";
		}
	else if(toothNum==7){
		document.getElementById("Top7").style.opacity="0.5";
		document.getElementById("Bottom7").style.opacity="0.5";
		}
	else{
		return;
		}
}
	
function drop(ev, toothNum){
	ev.preventDefault();
	var toothType=ev.dataTransfer.getData("int");
	dragEnd(ev, toothNum);
	this.changeTooth(toothNum, toothType);
	}
	
function dragEnd(ev, toothNum){
	ev.preventDefault();
	if(toothNum==1){
		document.getElementById("Top1").style.opacity="1";
		document.getElementById("Bottom1").style.opacity="1";
		}
	else if(toothNum==2){
		document.getElementById("Top2").style.opacity="1"
		document.getElementById("Bottom2").style.opacity="1";
		}
	else if(toothNum==3){
		document.getElementById("Top3").style.opacity="1";
		document.getElementById("Bottom3").style.opacity="1";
		}
	else if(toothNum==4){
		document.getElementById("Top4").style.opacity="1";
		document.getElementById("Bottom4").style.opacity="1";
		}
	else if(toothNum==5){
		document.getElementById("Top5").style.opacity="1";
		document.getElementById("Bottom5").style.opacity="1";
		}
	else if(toothNum==6){
		document.getElementById("Top6").style.opacity="1";
		document.getElementById("Bottom6").style.opacity="1";
		}
	else if(toothNum==7){
		document.getElementById("Top7").style.opacity="1";
		document.getElementById("Bottom7").style.opacity="1";
		}
	else{
		return;
		}
}

