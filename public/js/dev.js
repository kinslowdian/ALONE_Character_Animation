





function timeline_init(num, str)
{
	trace(num);
	trace(str);
	// alert("BOOM! " + num + " " + str);
}


function dev_run()
{
	dev_btns();
}


function dev_btns()
{
	displayList.btn0 = document.querySelector(".t0");
	displayList.btn1 = document.querySelector(".t1");
	displayList.btn2 = document.querySelector(".t2");
	displayList.btn3 = document.querySelector(".t3");
	displayList.btn4 = document.querySelector(".t4");

	dev_init();
}

function dev_init()
{
	for(var i = 0; i < 5; i++)
	{
		displayList["btn" + i].addEventListener("click", dev_event, false);
	}
}

function dev_event(event)
{
	event.preventDefault();

	var eventNum = event.target.dataset.num;
	
	if(eventNum == 4)
	{
		sadly.listAction({secs: 2, static: false, action: "applyAction_head", i: 3});
		sadly.listAction({secs: 4, static: false, action: "applyAction_jaw", i: 1});
		sadly.listAction({secs: 6, static: false, action: "applyAction_jaw", i: 3});
		sadly.listAction({secs: 8, static: true, action: "applyStatic_head", css: "tween-sadly-stop", funct: timeline_init, functProps: [35, "Bo-Peep"]});
		sadly.listAction({secs: 8, static: true, action: "applyStatic_jaw", css: "tween-sadly-stop"});
	}

	else
	{
		sadly.applyAction_head(eventNum);
		sadly.applyAction_jaw(eventNum);
		sadly.applyAction_eye(eventNum);
	}
}