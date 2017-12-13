// DEBUG
var trace = function(msg){ console.log(msg); };

class Sadly
{
	constructor(div)
	{
		this.htmlAttach = div; 
		this.settings = {};

		this.linkBody();
	}

	linkBody()
	{
		this.body_head = this.htmlAttach.querySelector(".sadly-head");
		this.body_jawT = this.htmlAttach.querySelector(".sadly-jawT");
		this.body_jawB = this.htmlAttach.querySelector(".sadly-jawB");
		this.body_eye = this.htmlAttach.querySelector(".sadly-pupil");
	
		this.body_head_css = false;
		this.body_jaw_css = false;
		this.body_eye_css = false;

		this.body_head_static = false;
		this.body_jaw_static = false;
	}

	createActions(num, classKit)
	{
		this.settings["action" + num] = {};
		this.settings["action" + num].headCSS = classKit.head;
		this.settings["action" + num].jawCSS = classKit.jaw;
		this.settings["action" + num].eyeCSS = classKit.eye;
	}

	applyAction(num)
	{
		// HEAD
		if(this.body_head_static)
		{
			this.body_head.classList.remove(this.body_head_static);
		}

		if(this.body_head_css)
		{
			this.body_head.classList.remove(this.body_head_css);
		}

		this.body_head.classList.add(this.settings["action" + num].headCSS);
		this.body_head_css = this.settings["action" + num].headCSS;

		// JAW
		if(this.body_jaw_static)
		{
			this.body_jawT.classList.remove(this.body_jaw_static);
			this.body_jawB.classList.remove(this.body_jaw_static);
		}

		if(this.body_jaw_css)
		{
			this.body_jawT.classList.remove(this.body_jaw_css);
			this.body_jawB.classList.remove(this.body_jaw_css);
		}

		this.body_jawT.classList.add(this.settings["action" + num].jawCSS);
		this.body_jawB.classList.add(this.settings["action" + num].jawCSS);
		this.body_jaw_css = this.settings["action" + num].jawCSS;
	
		// EYE
		if(this.body_eye_css)
		{
			this.body_eye.classList.remove(this.body_eye_css);
		}

		this.body_eye.classList.add(this.settings["action" + num].eyeCSS);
		this.body_eye_css = this.settings["action" + num].eyeCSS;
	}

	applyStatic_head(css)
	{
		this.body_head.classList.add(css);
		this.body_head_static = css;
	}

	applyStatic_jaw(css)
	{	
		this.body_jawT.classList.add(css);
		this.body_jawB.classList.add(css);

		this.body_jaw_static = css;
	}
}

var sadly;

var displayList;

function pageLoad_init()
{
	trace("pageLoad_init();");

	displayList = {};

	dev_run();

	init_sadly();
}

function init_sadly()
{
	displayList.sadly = document.querySelector(".sadly");

	sadly = new Sadly(displayList.sadly);

	sadly.createActions(0, {head: "setting-head-0", jaw: "setting-jaw-0", eye: "setting-eye-F"});
	sadly.createActions(1, {head: "setting-head-1", jaw: "setting-jaw-1", eye: "setting-eye-D"});
	sadly.createActions(2, {head: "setting-head-2", jaw: "setting-jaw-2", eye: "setting-eye-U"});
	sadly.createActions(3, {head: "setting-head-3", jaw: "setting-jaw-3", eye: "setting-eye-B"});

	trace(sadly);
}



