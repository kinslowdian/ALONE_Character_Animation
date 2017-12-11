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
	
		this.body_head_css = false;
		this.body_jaw_css = false;
	}

	createActions(num, classKit)
	{
		this.settings["action" + num] = {};
		this.settings["action" + num].headCSS = classKit.head;
		this.settings["action" + num].jawCSS = classKit.jaw;
	}

	applyAction(num)
	{
		if(this.body_head_css)
		{
			this.body_head.classList.remove(this.body_head_css);
		}

		this.body_head.classList.add(this.settings["action" + num].headCSS);
		this.body_head_css = this.settings["action" + num].headCSS;

		if(this.body_jaw_css)
		{
			this.body_jawT.classList.remove(this.body_jaw_css);
			this.body_jawB.classList.remove(this.body_jaw_css);
		}

		this.body_jawT.classList.add(this.settings["action" + num].jawCSS);
		this.body_jawB.classList.add(this.settings["action" + num].jawCSS);
		this.body_jaw_css = this.settings["action" + num].jawCSS;
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

	sadly.createActions(0, {head: "setting-head-0", jaw: "setting-jaw-0"});
	sadly.createActions(1, {head: "setting-head-1", jaw: "setting-jaw-1"});
	sadly.createActions(2, {head: "setting-head-2", jaw: "setting-jaw-2"});
	sadly.createActions(3, {head: "setting-head-3", jaw: "setting-jaw-3"});

	trace(sadly);
}



