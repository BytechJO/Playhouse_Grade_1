//  ****************************************** //
//  Crossword - build file
//  CSS-Grid based crossword: single-letter input cells + clue pictures, responsive across screens
//  ****************************************** //
function buildCrosswordBody(aObj) {
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
				
					// htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm crossword_wrap">';

			htmlStmt += '<div class="crossword_grid" style="grid-template-columns: repeat(' + aObj.gridCols + ', 1fr); grid-template-rows: repeat(' + aObj.gridRows + ', 1fr);">';

			for (var c = 0; c < aObj.cells.length; c++) {
				var cellObj = aObj.cells[c];
				var gridCol = cellObj.col + 1;
				var gridRow = cellObj.row + 1;
				var cellClass = 'cw_cell' + (cellObj.type == 'highlight' ? ' cw_highlight' : '');

				htmlStmt += '<div class="' + cellClass + '" style="grid-column:' + gridCol + '; grid-row:' + gridRow + ';" data-row="' + cellObj.row + '" data-col="' + cellObj.col + '">';
					if(cellObj.clueNumber != undefined && cellObj.clueNumber != null){
						htmlStmt += '<span class="cw_num">' + cellObj.clueNumber + '</span>';
					}
					htmlStmt += '<input class="cw_input" type="text" maxlength="1" data-row="' + cellObj.row + '" data-col="' + cellObj.col + '">';
				htmlStmt += '</div>';
			}

			htmlStmt += '</div>'; // - end crossword_grid

			if(aObj.clueImages){
				for (var ci = 0; ci < aObj.clueImages.length; ci++) {
					htmlStmt += '<img class="cw_clue_img" src="' + aObj.clueImages[ci].img + '" style="top:' + aObj.clueImages[ci].top + '; left:' + aObj.clueImages[ci].left + ';"/>';
				}
			}

		htmlStmt += '</div>'; // - end group_elm / crossword_wrap
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> crossword Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}