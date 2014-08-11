
storedData = []

function renderGraph() {
    
    plot1 = $.jqplot('chart1', [storedData],
        { axes:{xaxis:{min:0, max: 200}, yaxis:{min:0, max: 100}}});

}


function clearGraph() {
    storedData = []
    if (plot1) {
        plot1.destroy();
    }
}

function loopFrames() {  


       
   
}; 

function grabLocs2() {
    output = [];

    for (i = 0; i < finalSearch.length; i++) {

        setTimeout(function () {  

        // if (finalSearch.length <= 2) {finalSearch.length = 0;}

        newData = [parseInt(finalSearch[finalSearch.length-1].ballY)]
        newVal = newData.shift();
        storedData.push(newVal);
        

        var time = parseInt(finalSearch[finalSearch.length-1].game_clock).toFixed(2)
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;

        var x_ratio = -0.10071382636655948
        var y_ratio = 0.1006036217303823
        
        $('#shotclock').text(parseInt(finalSearch[finalSearch.length-1].shot_clock));
        $('#ball').css('left', ((parseInt(finalSearch[finalSearch.length-1].ballX) / x_ratio) + 976) + 'px')
        $('#ball').css("top", ((parseInt(finalSearch[finalSearch.length-1].ballY) / y_ratio) + 20) + 'px')

        $('#x1').css('left', ((parseInt(finalSearch[finalSearch.length-1].p1X) / x_ratio) + 976) + 'px')
        $('#x1').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p1Y) / y_ratio) + 20) + 'px')
        $('#x2').css('left', ((parseInt(finalSearch[finalSearch.length-1].p2X) / x_ratio) + 976) + 'px')
        $('#x2').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p2Y) / y_ratio) + 20) + 'px')
        $('#x3').css('left', ((parseInt(finalSearch[finalSearch.length-1].p3X) / x_ratio) + 976) + 'px')
        $('#x3').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p3Y) / y_ratio) + 20) + 'px')
        $('#x4').css('left', ((parseInt(finalSearch[finalSearch.length-1].p4X) / x_ratio) + 976) + 'px')
        $('#x4').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p4Y) / y_ratio) + 20) + 'px')
        $('#x5').css('left', ((parseInt(finalSearch[finalSearch.length-1].p5X) / x_ratio) + 976) + 'px')
        $('#x5').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p5Y) / y_ratio) + 20) + 'px')

        $('#o1').css('left', ((parseInt(finalSearch[finalSearch.length-1].p6X) / x_ratio) + 976) + 'px');
        $('#o1').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p6Y) / y_ratio) + 20) + 'px');
        $('#o2').css('left', ((parseInt(finalSearch[finalSearch.length-1].p7X) / x_ratio) + 976) + 'px')
        $('#o2').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p7Y) / y_ratio) + 20) + 'px')
        $('#o3').css('left', ((parseInt(finalSearch[finalSearch.length-1].p8X) / x_ratio) + 976) + 'px')
        $('#o3').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p8Y) / y_ratio) + 20) + 'px')
        $('#o4').css('left', ((parseInt(finalSearch[finalSearch.length-1].p9X) / x_ratio) + 976) + 'px')
        $('#o4').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p9Y) / y_ratio) + 20) + 'px')
        $('#o5').css('left', ((parseInt(finalSearch[finalSearch.length-1].p10X) / x_ratio) + 976) + 'px')
        $('#o5').css("top",  ((parseInt(finalSearch[finalSearch.length-1].p10Y) / y_ratio) + 20) + 'px')
        $('#EP').text(parseFloat(finalSearch[finalSearch.length-1].expected_points).toFixed(2));
        $('#gameclock').text(minutes + ":" + seconds);

        renderGraph();

      // stopMethods()

      if (--finalSearch.length-1) loopFrames() 
            }, 40)
    }
}


function stop(){
    flag = false;
}
function continueWithIt(){
    flag = true;
    foo();
}









