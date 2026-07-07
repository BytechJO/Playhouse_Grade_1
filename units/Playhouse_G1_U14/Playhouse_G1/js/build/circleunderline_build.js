//  ****************************************** //
//  CircleUnderline - build file
//  Circle the statements, underline the questions
//  ****************************************** //
function buildCircleUnderlineBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		var numOfQuestions = (aObj.questions).length;

		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/back_btn.png" /></a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/next_btn.png" /></a>'
		htmlStmt +=  '</div>'
  // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

		// ===================================================================== heading =====================
	
			htmlStmt += '<div class="activityHeading">';
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
					htmlStmt += "<div class='page_sub_title d-flex'>";
						htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';


		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm circleunderline_group d-flex flex-wrap">';

			for (x = 0; x < numOfQuestions; x++) {
				var tmpObj = aObj.questions[x];

				htmlStmt += '<div class="que cu_item" data-qno="' + (x + 1) + '" data-type="' + tmpObj.type + '">';

					htmlStmt += '<div class="q_num_space">' + (x + 1) + '</div>';

					htmlStmt += '<div class="audioIcon off contant cu_textWrap" data-audio="' + tmpObj.audio + '">';
						htmlStmt += '<span class="cu_text">' + tmpObj.text + '</span>';
						htmlStmt += '<svg class="cu_svg circle_svg" viewBox="0 0 300 80"></svg>';
						htmlStmt += '<svg class="cu_svg underline_svg" viewBox="0 0 300 80"></svg>';
					htmlStmt += '</div>';

					htmlStmt += '<div class="icon_wrap_holder">';
					htmlStmt += '<div class="icon_wrap">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div></div>';

				htmlStmt += '</div>'; // - end que / cu_item
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> circleunderline Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}