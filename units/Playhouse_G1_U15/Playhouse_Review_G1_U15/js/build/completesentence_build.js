//  ****************************************** //
//  CompleteSentence - build file
//  Fill-in-the-blank sentences + a static (black & white) picture below
//  ****************************************** //
function buildCompleteSentenceBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
    htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a>';
    htmlStmt += "</div>";
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
    htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a>';
    htmlStmt += "</div>";

    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
  
  
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
   
    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
    htmlStmt += '<div class="group_elm completesentence_group flex-column">';

    for (x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que cs_item d-flex flex-wrap align-items-center" data-qno="' +
        (x + 1) +
        '">';

      var wordIndex = -1;
      var words = tmpObj.text.split("[_]");
      var qStr = words
        .map(function (word, index) {
          if (word !== "") {
            wordIndex++;
            return (
              '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' +
              tmpObj.textaudios[wordIndex] +
              '">' +
              word +
              "</div>"
            );
          }
        })
        .join(
          '<input class="text_input_area" type="text" maxlength="' +
            tmpObj.maxlength +
            '" data-type="' +
            tmpObj.type +
            '">',
        );

      htmlStmt += '<div class="cs_set d-flex flex-wrap align-items-center">';
      htmlStmt += qStr;
      htmlStmt += "</div>";

      htmlStmt += '<div class="icon_wrap_holder">';
      htmlStmt += '<div class="icon_wrap">';
      htmlStmt +=
        '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
      htmlStmt +=
        '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
      htmlStmt += "</div></div>";

      htmlStmt += "</div>"; // - end que / cs_item
    }

    if (aObj.image != undefined && aObj.image != "") {
      htmlStmt +=
        '<div class="cs_image_wrap"><img src="' + aObj.image + '"></div>';
    }

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> completesentence Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
