Qualtrics.SurveyEngine.addOnload(function() {
    jQuery("#"+this.questionId).hide();
});
Qualtrics.SurveyEngine.addOnPageSubmit(function() {
    jQuery("#"+this.questionId+" input[type=text]").val(new Date());
});


Qualtrics.SurveyEngine.addOnReady(function()
{
	jQuery("div.ProgressBarFill").css("width", "7%");


});
