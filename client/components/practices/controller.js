//$(function () {
//    $("#message, #instructions, #nextButton, #retryButton, #drag").hide();
//
//	$('#nextButton').click(function(){
//		NextStage();
//	});
//
////does not exist yet
////    $('#prevButton').click(function(){
////		PrevStage();
////	});
////
//	//will become deprecated in final version
//	$('#retryButton').click(function(){
//		Restart();
//	})
//
//    StartPracticeSession();
//    ShowStageUI();
//
//})
//
//
//var currentSection = 0;
//var stage = 0;
//var dragOpen = true;
//
//// show the instructions at the beginning of a stage
//function ShowStageUI ()
//{
//    $("#message, #nextButton, #retryButton").hide();
//    $("#instructions").html('<p>' +  data.sections[currentSection].practiceSession[stage].instructions +'</p>').hide().show('slow', function(){$("#instructions > p").fadeIn();});
//    $("#instructions > p").hide();
//}
//
//// go to the next stage of the activity
//function NextStage(){
//
//    if (stage < data.sections[currentSection].practiceSession.length) {
//
//        stage++;
//        ShowStageUI();
//        StartStage();
//
//    }
//
//}
//
//// go to the previous stage of the activity
//function PrevStage(){
//
//    if (stage > 0) {
//
//        stage--;
//        StartStage();
//
//    }
//
//}
//
//// restart the interactive - this will not be in the final version, instead we will cycle through steps by pressing the next and prev buttons
//function Restart()
//{
//	$('#message').hide();
//
//    retried = true;
//
//    stage = 0;
//    ShowStageUI();
//    StartStage();
//}
//
//// give feedback depending on correctness, called by activity's script
//function FinishedStage (right)
//{
//    if (right) {
//		if (stage == data.sections[currentSection].practiceSession.length - 1) {
//            EndPracticeSession();
//        }
//		else {
//			ShowMessage(correct, "black");
//            $("#nextButton").show('fast');
//        }
//    }
//    else {
//		ShowMessage(incorrect, "black");
//    }
//}
//
//// end an activity
//function EndPracticeSession()
//{
//    ShowMessage(complete, "black");
//	$('#instructions').fadeOut();
//    $('#retryButton').show('fast');
//}
//
//// show feedback
//function ShowMessage (message, color)
//{
//	$('#message').hide().html('<p>' + message + '</p>').css('color', color).show('slow', function(){
//		$('#message').find('p').fadeIn();
//	});
//	$('#message').find('p').hide();
//}
//
//// show the drag instructions
//function SetupDrag ()
//{
//    $('#drag').hide().html('<p>Drag the molecule to rotate.</p>').show('slow', function(){
//        $('#drag').find('p').fadeIn();
//    });
//    $('#drag').find('p').hide();
//
//    console.log(isPlatform.mobile());
//    if (!isPlatform.mobile()) {
//        $('#jmolApplet0_appletdiv').click(function () {
//            CloseDrag();
//            $("#jmolApplet0_appletdiv").off("click");
//        });
//    }
//}
//
//// close the drag instructions
//function CloseDrag ()
//{
//    if (dragOpen) {
//        $("#drag").hide();
//        dragOpen = false;
//    }
//}
