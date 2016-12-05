/*
Created by : Sankar Veeraiyan
*/
var LQGAUGE='LiquidGauge';
var _path_LG = Qva.Remote + "?public=only&name=Extensions/"+LQGAUGE+"/";

var jsFiles = [	_path_LG + 'd3.v3.min.js',
	_path_LG + 'liquidFillGauge.js'];
Qv.LoadExtensionScripts(jsFiles, 
function (){
	Qva.AddExtension(LQGAUGE, function () {
	Qva.LoadCSS(_path_LG+'LiquidGauge.css');
	
	    var _this = this;
		//_this.ExtSettings.ParentFillColor = _this.Layout.Text0.text;
			
	    var objectId = _this.Layout.ObjectId.replace("\\", "_");
	    
	    var divName = '_div_' + objectId;
	    
	   	$(_this.Element).empty();
	   	$('#'+divName).remove();
	   // console.log(_this.Element);
		
	    var ui = document.createElement("div");
		ui.setAttribute("id", divName);
		ui.setAttribute("width", 1250);
		ui.setAttribute("height",   250);
		$(_this.Element).append(ui);	
		//console.log(ui);
		var svgName='_svg_' + objectId;
		var config = liquidFillGaugeDefaultSettings();
		
		function LoadValues(){
			config.minValue=_this.Layout.Text0.text
			config.maxValue=_this.Layout.Text1.text
			config.circleThickness=_this.Layout.Text2.text
			config.circleFillGap=_this.Layout.Text3.text
			config.circleColor=_this.Layout.Text4.text
			config.waveHeight=_this.Layout.Text5.text
			config.waveCount=_this.Layout.Text6.text
			config.waveRiseTime=_this.Layout.Text7.text
			config.waveAnimateTime=_this.Layout.Text8.text
			config.waveRise=_this.Layout.Text9.text
			config.waveHeightScaling=_this.Layout.Text10.text
			config.waveAnimate=_this.Layout.Text11.text
			config.waveColor=_this.Layout.Text12.text
			config.waveOffset=_this.Layout.Text13.text
			config.textVertPosition=_this.Layout.Text14.text
			config.textSize=_this.Layout.Text15.text
			config.valueCountUp=_this.Layout.Text16.text
			config.displayPercent=_this.Layout.Text17.text
			config.textColor=_this.Layout.Text18.text
			config.waveTextColor=_this.Layout.Text19.text

		}
		LoadValues();

		var actualValue = _this.Layout.Text20.text
		//console.log(actualValue);
		loadLiquidFillGauge(divName,actualValue, _this.GetWidth(), _this.GetHeight(),config);




	});
});

