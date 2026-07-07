//  ****************************************** //
//  DrawQA - build file
//  Draw canvas + repeated question/answer write-lines (with character icons), no checking
//  ****************************************** //
function buildDrawQABody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/back_btn.png" /></a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/next_btn.png" /></a>'
		htmlStmt +=  '</div>'

		// ===================================================================== heading =====================
			htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
			if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			if(aObj.title_position !=undefined && aObj.title_position =="under"){
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}else {
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				
					htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
		htmlStmt += '<div class="group_elm drawqa_group d-flex">';

			// ---- left side: draw box (canvas) ----
			htmlStmt += '<div class="draw_box">';
				htmlStmt += '<div class="draw_label">' + aObj.drawLabel + '</div>';
				htmlStmt += '<canvas class="draw_canvas"></canvas>';
				htmlStmt += '<div class="clearDrawBtn"><img src="../images/icons/reset_btn.png"></div>';
			htmlStmt += '</div>';

			// ---- right side: repeated question/answer line pairs ----
			htmlStmt += '<div class="qa_col">';
			for (var x = 0; x < aObj.qaPairs.length; x++) {
				var pairObj = aObj.qaPairs[x];

				htmlStmt += '<div class="qa_pair" data-qno="' + (x + 1) + '">';

					htmlStmt += '<div class="q_line d-flex align-items-end">';
						htmlStmt += '<div class="char_img q_icon"><img src="' + pairObj.boyImg + '"></div>';
						htmlStmt += '<div class="line_input_wrap"><input class="text_input_area qa_input q_input" type="text" maxlength="' + aObj.maxlength + '"></div>';
						htmlStmt += '<span class="qmark">?</span>';
					htmlStmt += '</div>';

					htmlStmt += '<div class="a_line d-flex align-items-end">';
						htmlStmt += '<div class="line_input_wrap"><input class="text_input_area qa_input a_input" type="text" maxlength="' + aObj.maxlength + '"></div>';
						htmlStmt += '<div class="char_img a_icon"><img src="' + pairObj.girlImg + '"></div>';
					htmlStmt += '</div>';

				htmlStmt += '</div>'; // - end qa_pair
			}
			htmlStmt += '</div>'; // - end qa_col

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> drawqa Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}