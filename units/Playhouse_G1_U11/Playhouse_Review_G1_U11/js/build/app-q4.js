// build-q4.js — بناء الـ HTML بس (البودي) - نفس نمط buildMcqBody / buildFillInBody
function buildLookCircleWriteBody(aObj) {
    var htmlStmt = '';

    if (typeof aObj !== 'undefined' && aObj !== null) {

        // navigation arrows — نفس MCQ
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png"/></a></div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png"/></a></div>';

        // act_head_group — نفس MCQ بالضبط
        htmlStmt += '<div class="act_head_group justify-content-center">';
            htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
                htmlStmt += '</div>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="activityHeading">'
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += "<div class='page_sub_title d-flex'>";
                    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
                    for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                    }
                    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
                htmlStmt += "</div>";
                htmlStmt += '</div>';
            htmlStmt += '</div>';
        htmlStmt += '</div>';

        // options cont_ht_sf — نفس MCQ
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-start mb-70">';
        htmlStmt += '<div class="tick_group d-flex flex-column w-100 align-items-center">';

        // ── بناء كل سؤال ──
        for (var q = 0; q < aObj.questions.length; q++) {
            var tQ = aObj.questions[q];
            var qNum = q + 1;

            htmlStmt += '<div class="lcw-que" id="lcw-que-' + qNum + '" data-qno="' + qNum + '">';

                // صورة
                htmlStmt += '<div class="lcw-img">';
                htmlStmt += '<img src="' + tQ.image + '" alt="q' + qNum + '"/>';
                htmlStmt += '</div>';

                // الخيارين (circle picks)
                htmlStmt += '<div class="lcw-options">';
                for (var o = 0; o < tQ.options.length; o++) {
                    htmlStmt += '<div class="lcw-pick" ';
                    htmlStmt += 'id="lcw-pick-' + qNum + '-' + (o+1) + '" ';
                    htmlStmt += 'data-qno="' + qNum + '" ';
                    htmlStmt += 'data-optno="' + (o+1) + '">';
                    htmlStmt += tQ.options[o];
                    htmlStmt += '</div>';
                }
                htmlStmt += '</div>';

                // سطر الكتابة
                htmlStmt += '<div class="lcw-write-col">';
                htmlStmt += '<input type="text" class="lcw-input" ';
                htmlStmt += 'id="lcw-input-' + qNum + '" ';
                htmlStmt += 'data-qno="' + qNum + '" ';
                htmlStmt += 'placeholder="write here..." ';
                htmlStmt += 'maxlength="20" autocomplete="off" spellcheck="false"/>';
                htmlStmt += '</div>';

                // icon_wrap — نفس MCQ
                htmlStmt += '<div class="icon_wrap">';
                htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                htmlStmt += '</div>';

            htmlStmt += '</div>'; // /lcw-que
        }

        htmlStmt += '</div>'; // /tick_group
        htmlStmt += '</div></div></div>'; // /group_elm / all_cont / options
    }

    console.log('htmlStmt >> lookcirclewrite Built');
    $('.activity_area').append(htmlStmt);

    // تفعيل اللوجيك (موجود بملف lookcirclewrite.js) - لازم يكون محمّل قبل هاد الملف
    _initLCWActivity(aObj);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}