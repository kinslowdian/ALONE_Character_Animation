





function timeline_init()
{
	
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
		// sadly.applyStatic_head("tween-sadly-stop");
		// sadly.applyStatic_jaw("tween-sadly-stop");
	
		sadly.listActionWithIndex(2, "applyAction_head", 3);
		sadly.listActionWithIndex(4, "applyAction_jaw", 1);
		sadly.listActionWithIndex(6, "applyAction_jaw", 3);
	}

	else
	{
		sadly.applyAction_head(eventNum);
		sadly.applyAction_jaw(eventNum);
		sadly.applyAction_eye(eventNum);
	}
}