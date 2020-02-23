var dateDiv = $("#date")
var d = new Date()
var date = String(d)
dateDiv.append(date.slice(0,10) + ", <br>" + date.slice(11, 15))
dateDiv.append(" <br> Plan your day accordingly")

var calender = $("#calenderContainer")
