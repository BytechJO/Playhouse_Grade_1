//  ****************************************** //
//  DrawWrite - build file
//  Draw canvas + write lines, no checking
//  ****************************************** //
function buildDrawWriteBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
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
    // htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    // if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
    //   htmlStmt +=
    //     '<img class="mainTitleIcon" src=' +
    //     aObj.mainTitleIcon +
    //     ' style="right: ' +
    //     aObj.mainTitleIconPos.right +
    //     ';">';
    // }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '" >';
    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
    htmlStmt += '<div class="group_elm drawwrite_group">';

    // ---- draw box (canvas) ----
    htmlStmt += '<div class="draw_box">';
    htmlStmt += '<canvas class="draw_canvas"></canvas>';
    htmlStmt +=
      '<div class="clearDrawBtn"><img src="../images/icons/reset_btn.png"></div>';
    htmlStmt += "</div>";

    // ---- write box (lines) ----
    htmlStmt += '<div class="write_box">';
          htmlStmt += "<span>" + aObj.description + " </span>";

          htmlStmt += "<span>" + aObj.question + " </span>";
  
      htmlStmt += '<div class="write_line_row">';

      htmlStmt +=
        '<textarea class="write_line_input" rows="1" spellcheck="false"></textarea>';
      htmlStmt += "</div>";
   
    htmlStmt += "</div>";

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> drawwrite Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
