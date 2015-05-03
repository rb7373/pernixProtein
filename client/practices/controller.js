// startPractice() is the function call from the html.
// Start() is no longer used

var currentSection = 0;
var stage = 0;
var dragOpen = true;

function startPractice() {
  restartStateVariables();
  hideComponents();
  connectEvents();
  StartPracticeSession();
  ShowStageUI();
}


function Start() {

  //old S
  $("#message, #instructions, #nextButton, #retryButton, #drag").hide();
  // old F

  // Pernix S
  hideComponents();
  connectEvents();
  // Pernix F

  $('#nextButton').click(function () {
    NextStage();
  });

//does not exist yet
//    $('#prevButton').click(function(){
//		PrevStage();
//	});
//
  //will become deprecated in final version
  $('#retryButton').click(function () {
    Restart();
  })

  StartPracticeSession();
  ShowStageUI();

}

// show the instructions at the beginning of a stage
function ShowStageUI() {

  if (isThereNext()) {
    $("#message, #nextButton, #retryButton, #multiple_choice").hide();
    $("#navigation_instructions").html('<p><strong>Navigation instructions popup:</strong> ' + data.sections[currentSection].practiceSession[stage].navigation + '</p>');

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
      $("#instructions").html('<p>' + data.sections[currentSection].practiceSession[stage].instructions + '</p>').hide().show('slow', function () {
        $("#instructions > p").fadeIn();
      });

      $("#instructions > p").hide();
    }

    //Pernix
    setInstructions(data.sections[currentSection].practiceSession[stage].instructions);
    showPopUp();
    showNavigationButtons();
  }
}

// go to the next stage of the activity
function NextStage() {

  if (isThereAtLeastOneStageAfter()) {
    ++stage;
    ShowStageUI();
    StartStage();
  }

}

// go to the previous stage of the activity
function PrevStage() {

  if (isThereAtLeastOneStageBefore()) {
    --stage;
    ShowStageUI();
    StartStage();
  }

}

// restart the interactive - this will not be in the final version, instead we will cycle through steps by pressing the next and prev buttons
function Restart() {
  $('#message').hide();

  retried = true;

  stage = 0;
  ShowStageUI();
  StartStage();
}

// give feedback depending on correctness, called by activity's script
function FinishedStage(right, showMessage) {

  if (right) {
    SetStageEnd();
    if (isFinalStage()) {
      EndPracticeSession();
    }
    else {
      if (showMessage) {
        showTopFeedbackAndHideUnnecessaryButtons(correct);
        // call is you want a extra feedback
        showBottomFeebackAndHideUnnecessaryButtons('Extra feed back');
      }
    }
  }
  else if (showMessage) {
    showTopFeedbackAndHideUnnecessaryButtons(incorrect);
    // call is you want a extra feedback
    showBottomFeebackAndHideUnnecessaryButtons('Extra feed back');
  }
}

// end an activity
function EndPracticeSession() {
  //ShowMessage(complete, "black");
  showTopFeedback(complete);
  if (data.sections[currentSection].practiceSession[stage].inputField || data.sections[currentSection].practiceSession[stage].multipleChoice) {
    $('#multiple_choice').fadeOut();
  } else {
    $('#instructions').fadeOut();
  }
  $('#retryButton').show('fast');
}

// show feedback
function ShowMessage(message, color) {
  $('#message').hide().html('<p>' + message + '</p>').css('color', color).show('slow', function () {
    $('#message').find('p').fadeIn();
  });
  $('#message').find('p').hide();
}

//
function HideMessage() {
  $('#message').hide();
}

// show the drag instructions
function SetupDrag() {
  $('#drag').hide().html('<p>Drag the molecule to rotate.</p>').show('slow', function () {
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
function CloseDrag() {
  if (dragOpen) {
    $("#drag").hide();
    dragOpen = false;
  }
}

//
function AddMultipleChoice(question, answers, correct) {
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

  $("#submit").click(function () {
    $(this).siblings().each(function () {
      if ($(this).hasClass("answer-filled") && $(this).attr("id") == "correct") {
        $("#feedback").html("Correct!");
        FinishedStage(true, false);
      }
      else if ($(this).hasClass("answer-filled") && $(this).attr("id") != "correct") {
        $("#feedback").html("Incorrect. Try again.");
      }
    })
  })

  $(".answer").click(function () {
    $(this).addClass("answer-filled");
    $(this).siblings().each(function () {
      if ($(this).hasClass("answer-filled")) {
        $(this).removeClass("answer-filled");
      }
    })
  })
}

//
function AddInputField(question, answer, answerLabel) {
  $("#multiple_choice").html('<h4>' + question + '</h4><input answer="' + answer + '" type="text" class="input"></input>' + answerLabel + '<div id="submit" class="button">Submit</div><div id="feedback"></div>').hide().show('slow');

  $("#submit").click(function () {
    $(this).siblings().each(function () {
      if ($(this).hasClass("input")) {
        if ($(this).attr("answer") == $.trim($(this).val())) {
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


// Pernix

var slowAnimationTime = 2000;

function restartStateVariables() {
  stage = 0;
  dragOpen = true;
}

function isThereAtLeastOneStageBefore() {
  var isThereAtLeastOneStageBefore;
  isThereAtLeastOneStageBefore = stage > 0;
  return isThereAtLeastOneStageBefore;
}

function isThereAtLeastOneStageAfter() {
  var isThereAtLeastOneStageAfter;
  isThereAtLeastOneStageAfter = stage < data.sections[currentSection].practiceSession.length - 1;
  return isThereAtLeastOneStageAfter;
}

function isThereNext() {
  var isThereNext = stage < data.sections[currentSection].practiceSession.length;
  return isThereNext;
}

function isFinalStage() {
  var finalStage = data.sections[currentSection].practiceSession.length - 1;
  var finished = (finalStage === stage);
  return finished;
}

function showButtons() {
  showPrevButton();
  showNextButton();
}

// PrevButton

function showPrevButton() {
  $('#prev-button-pn').show();
  $('#center-button-pn').show();
  $('#prev-button-pn').removeClass('animated zoomIn zoomOut');
  $('#prev-button-pn').addClass('animated zoomIn');
}

function hidePrevButton() {
  $('#prev-button-pn').removeClass('animated zoomIn zoomOut');
  $('#prev-button-pn').addClass('animated zoomOut');
  setTimeout(hidePrevButtonAux, slowAnimationTime);
}

function hidePrevButtonAux() {
  $('#prev-button-pn').hide();
}

// Next Button

function showNextButton() {
  $('#next-button-pn').show();
  $('#next-button-pn').removeClass('animated zoomIn zoomOut');
  $('#next-button-pn').addClass('animated zoomIn');
}

function hideNextButton() {
  $('#next-button-pn').removeClass('animated zoomIn zoomOut');
  $('#next-button-pn').addClass('animated zoomOut');
  setTimeout(hideNextButtonAux, slowAnimationTime);
}

function hideNextButtonAux() {
  $('#next-button-pn').hide();
}

// TopFeedback

function showTopFeedbackAndHideUnnecessaryButtons(feedback) {
  showTopFeedback(feedback);
  if (stage != 0) {
    setTimeout(showButtons, slowAnimationTime);
  } else {
    setTimeout(showNextButton, slowAnimationTime);
  }
}

function showTopFeedback(feedback) {
  console.log("show top feedback");
  $('#feedback-top-pn span').text(feedback);
  $('#feedback-top-pn').show();
  $('#feedback-top-pn').removeClass('animated shake fadeOut');
  $('#feedback-top-pn').addClass('animated shake');
  setTimeout(hideTopFeedback, slowAnimationTime);
}

function hideTopFeedback() {
  $('#feedback-top-pn').removeClass('animated shake fadeOut');
  $('#feedback-top-pn').addClass('animated fadeOut');
  setTimeout(hideTopFeebackAux, slowAnimationTime);
}

function hideTopFeebackAux(){
  $('#feedback-top-pn').hide();
}

function setTopFeedback(feedback){
  $('#feedback-top-pn span').text(feedback);
}

// BottomFeedback

function showBottomFeebackAndHideUnnecessaryButtons(feedback) {
  showBottomFeeback(feedback);
  if (stage != 0) {
    setTimeout(showButtons, slowAnimationTime);
  } else {
    setTimeout(showNextButton, slowAnimationTime);
  }
}

function showBottomFeeback(feedback) {
  console.log("show botton feedback");
  $('#feedback-bottom-pn span').text(feedback);
  $('#feedback-bottom-pn').show();
  $('#feedback-bottom-pn').removeClass('animated fadeIn fadeOut');
  $('#feedback-bottom-pn').addClass('animated fadeIn');
  setTimeout(hideBottomFeeback, slowAnimationTime);
}

function hideBottomFeeback() {
  $('#feedback-bottom-pn').removeClass('animated fadeIn fadeOut');
  $('#feedback-bottom-pn').addClass('animated fadeOut');
  setTimeout(hideBottomFeebackAux, slowAnimationTime);
}

function hideBottomFeebackAux(){
  $('#feedback-bottom-pn').hide();
}

function setBottomFeeback(feedback){
  $('#feedback-bottom-pn span').text(feedback);
}

// Others

function hideComponents() {
  $('#popUps, #prev-button-pn, #center-button-pn, ' +
    '#next-button-pn, #feedback-top-pn, #feedback-bottom-pn').hide();
}

function setInstructions(instructions) {
  $('#instructions-pn span').text(instructions);
}

function showPopUp() {
  $('#popUps').show('slow');
}

function showNavigationButtons() {
  console.log('---stage:-----: ', stage);
  if (isThereAtLeastOneStageBefore()) {
    showPrevButton();
  } else {
    hidePrevButton();
  }
  if (isThereAtLeastOneStageAfter()) {
    showNextButton();
  } else {
    hideNextButton();
  }

}

function connectEvents() {
  $('#next-button').click(NextStage);
  $('#prev-button').click(PrevStage);
}
