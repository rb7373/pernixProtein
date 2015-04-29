function Start () 
{
    $("#message, #instructions, #nextButton, #retryButton, #drag").hide(); 
    
	$('#nextButton').click(function(){
		NextStage();	
	});

//does not exist yet    
//    $('#prevButton').click(function(){
//		PrevStage();	
//	});
//	
	//will become deprecated in final version
	$('#retryButton').click(function(){
		Restart();
	})
    
    StartPracticeSession();
    ShowStageUI();

}


var currentSection = 0;
var stage = 0;
var dragOpen = true;

// show the instructions at the beginning of a stage
function ShowStageUI () 
{
    $("#message, #nextButton, #retryButton, #multiple_choice").hide();
    $("#navigation_instructions").html('<p><strong>Navigation instructions popup:</strong> ' +  data.sections[currentSection].practiceSession[stage].navigation +'</p>');
    if (data.sections[currentSection].practiceSession[stage].inputField) {
        $("#instructions").hide();
        AddInputField(
            data.sections[currentSection].practiceSession[stage].instructions, 
            data.sections[currentSection].practiceSession[stage].answer,
            data.sections[currentSection].practiceSession[stage].answerLabel
        )
    } 
    else if (data.sections[currentSection].practiceSession[stage].multipleChoice) {
        $("#instructions").hide();
        AddMultipleChoice(
            data.sections[currentSection].practiceSession[stage].instructions, 
            data.sections[currentSection].practiceSession[stage].answers,
            data.sections[currentSection].practiceSession[stage].correct
        )
    }
    else {
        $("#multiple_choice").hide();
        $("#instructions").html('<p>' +  data.sections[currentSection].practiceSession[stage].instructions + '</p>').hide().show('slow', function(){$("#instructions > p").fadeIn();});
        $("#instructions > p").hide();
    }
}

// go to the next stage of the activity
function NextStage(){   
   
    if (stage < data.sections[currentSection].practiceSession.length) {
        
        stage++;
        ShowStageUI();
        StartStage();
        
    }
    
}

// go to the previous stage of the activity
function PrevStage(){
    
    if (stage > 0) {
        
        stage--;
        StartStage();
        
    }
    
}

// restart the interactive - this will not be in the final version, instead we will cycle through steps by pressing the next and prev buttons
function Restart()
{
	$('#message').hide();
    
    retried = true;
    
    stage = 0;
    ShowStageUI();
    StartStage();
}

// give feedback depending on correctness, called by activity's script
function FinishedStage (right, showMessage) 
{
    var finished = (stage == data.sections[currentSection].practiceSession.length - 1);
    if (right) { 
        SetStageEnd();
		if (finished) {
            EndPracticeSession();
        } 
		else {
            if (showMessage) {
                ShowMessage(correct, "black");
            }
            $("#nextButton").show('fast');
        }
    }
    else if (showMessage) {
		ShowMessage(incorrect, "black");
    }
}

// end an activity
function EndPracticeSession() 
{
    ShowMessage(complete, "black");
    if (data.sections[currentSection].practiceSession[stage].inputField || data.sections[currentSection].practiceSession[stage].multipleChoice) {
        $('#multiple_choice').fadeOut();
    } else {
        $('#instructions').fadeOut();
    }
    $('#retryButton').show('fast');
}

// show feedback
function ShowMessage (message, color)
{
	$('#message').hide().html('<p>' + message + '</p>').css('color', color).show('slow', function(){
		$('#message').find('p').fadeIn();
	});
	$('#message').find('p').hide();
}

//
function HideMessage () 
{
    $('#message').hide();
}

// show the drag instructions
function SetupDrag () 
{
    $('#drag').hide().html('<p>Drag the molecule to rotate.</p>').show('slow', function(){
        $('#drag').find('p').fadeIn();
    });
    $('#drag').find('p').hide();
    
    console.log(isPlatform.mobile());
    if (!isPlatform.mobile()) {
        $('#jmolApplet0_appletdiv').click(function () {
            CloseDrag();
            $("#jmolApplet0_appletdiv").off("click");
        });
    }
}

// close the drag instructions
function CloseDrag () 
{
    if (dragOpen) {
        $("#drag").hide();
        dragOpen = false;
    }
}

//
function AddMultipleChoice (question, answers, correct)
{
    var contents = '<h4>' + question + '</h4>';
    for (i = 0; i < answers.length; i++) {
        if (i == correct) {
            contents += '<div id="correct" class="answer">' + answers[i] + '</div>';
        } else {
            contents += '<div class="answer">' + answers[i] + '</div>';
        }
    }
    contents += '<div id="submit" class="button">Submit</div><div id="feedback"></div>';
    $("#multiple_choice").html(contents).hide().show('slow');
    
    $("#submit").click(function(){
        $(this).siblings().each(function(){
            if ($(this).hasClass("answer-filled") && $(this).attr("id") == "correct"){
                $("#feedback").html("Correct!");
                FinishedStage(true, false);
            }
            else if ($(this).hasClass("answer-filled") && $(this).attr("id") != "correct"){
                $("#feedback").html("Incorrect. Try again.");
            }
        })
    })

    $(".answer").click(function(){
        $(this).addClass("answer-filled");
        $(this).siblings().each(function(){
            if ($(this).hasClass("answer-filled")){
                $(this).removeClass("answer-filled");
            }
        })
    })
}

//
function AddInputField (question, answer, answerLabel)
{
    $("#multiple_choice").html('<h4>' + question + '</h4><input answer="' + answer + '" type="text" class="input"></input>' + answerLabel + '<div id="submit" class="button">Submit</div><div id="feedback"></div>').hide().show('slow');
    
    $("#submit").click(function(){
        $(this).siblings().each(function(){
           if ($(this).hasClass("input")){
               if ($(this).attr("answer")==$.trim($(this).val())){
                   $("#feedback").html("Correct!");
                   FinishedStage(true, false);
               }
               else {
                   $("#feedback").html("Incorrect. Try again.");
               }

           }   
       })
    })
}
