function gup(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null)

        return "";
    else

        return unescape(results[1]);
}
function submitToTurk(){
    if(gup("assignmentId")!="") {
        var jobkey = gup("assignmentId");
        if(gup("hitId")!="") {
            jobkey += "|" + gup("hitId");
        }
        if(gup("assignmentId") == "ASSIGNMENT_ID_NOT_AVAILABLE") {
            $('input').attr("DISABLED", "true");
            _allowSubmit = false;
        } else {
            _allowSubmit = true;
        }
        $('#mturk‐assignmentId').attr('value', gup("assignmentId"));
        $("#mturk_form").attr('method', 'POST');

        if(gup("turkSubmitTo")!="") {
            $("#mturk_form").attr('action', gup("turkSubmitTo") + '/mturk/externalSubmit');
        }
    }
    $("#mturk_form").submit();
    /*For some reasons you need this*/
    return false;
}
