function buildFillInBody(aObj) {
  var htmlStmt = "";
  if (aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    //====================================================================== header ======================
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
        ' style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
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
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options mx-auto">';
    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';
    htmlStmt += '<div class="screen_elements d-flex flex-column">';
    // Options =====================
    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt +=
          '<div class="word_opt_sticky d-flex flex-wrap justify-content-center">';
        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-around">';
        jQuery.each(aObj.options, function (key, value) {
          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" data-audio="' +
            aObj.optionsAudios[key] +
            '">';
          htmlStmt += '<div class="clue_word">' + value + "</div>";
          htmlStmt += "</div>";
        });

        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }
    }
    // =============================

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center">';

    htmlStmt += '<div class="ques">';
    for (x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];
      htmlStmt +=
        '<div class="que img_fillin_gr d-flex flex-column" data-qno="' +
        (x + 1) +
        '">';

      if (tmpObj.singleword) {
        var str = tmpObj.text;
        var qStr =
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' +
          tmpObj.textaudios[0] +
          '">' +
          '<img src="../images/icons/sound-wave.png" class="audio_icon">' +
          "</div>";
        qStr += str.replace(
          /\[_]/g,
          '<input class="text_input_area" type="text" maxlength="' +
            tmpObj.maxlength +
            '" data-type="' +
            tmpObj.type +
            '">',
        );
      } else {
        var wordIndex = -1;
        words = tmpObj.text.split("[_]");
        qStr = words
          .map((word, index) => {
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
            '<input class="text_input_area txtInput" type="text" maxlength="' +
              tmpObj.maxlength +
              '" data-type="' +
              tmpObj.type +
              '">',
          );
      }

      htmlStmt += '<div class="fillin_gr d-flex  ">';
      htmlStmt += '<div class="q_space d-flex flex-wrap">';

      htmlStmt += '<div class="fillin_set background_audio d-flex flex-wrap">';
      htmlStmt += qStr;
      htmlStmt += "</div>"; // - end fillin_set

      var ans = tmpObj.text.includes("[_]") ? "true" : "false";
      if (ans == "true") {
        htmlStmt += '<div class="icon_wrap_holder">';
        htmlStmt += '<div class="icon_wrap">';
        htmlStmt +=
          '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
        htmlStmt +=
          '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
        htmlStmt += "</div></div>"; // - end icon_wrap_holder / icon_wrap
      } else {
        htmlStmt += '<div class="icon_wrap_holder">';
        htmlStmt += '<div class="icon_wrap">';
        htmlStmt += '<div class="tick"></div>';
        htmlStmt += '<div class="cross"></div>';
        htmlStmt += "</div></div>"; // - end icon_wrap_holder / icon_wrap
      }

      htmlStmt += "</div>";
      htmlStmt += "</div></div>"; // - end  - fillin_gr / img_fillin_gr
    }
    htmlStmt += "</div>";
    htmlStmt += '<img class="image_space" src="' + aObj.image + '"/>';
    htmlStmt += "</div>";

    // ================================================================ [ SentenceBuilding ]
    if (aObj.items != undefined) {
      htmlStmt += '<div class="SentenceBuilding_container">';
      htmlStmt += '<div class="cont_items d-flex flex-wrap">';
      htmlStmt += '<div class="main_title_container">';
      htmlStmt += '<div class="main_title_text">';
      if (aObj.main_title_text.length > 1) {
        htmlStmt +=
          '<div class="audioIcon textEnd off d-flex contant" data-audio="' +
          aObj.main_title_audio +
          '">';
        for (let x = 0; x < aObj.main_title_text.length; x++) {
          htmlStmt +=
            "<div class='letter letter-" +
            x +
            " pulse'>" +
            aObj.main_title_text[x] +
            "</div>";
        }
        htmlStmt += "</div>";
      } else {
        htmlStmt += "<div class=''>" + aObj.main_title_text + "</div>";
      }
      htmlStmt += "</div>";
      htmlStmt += "</div>";

      for (let i = 0; i < aObj.items.length; i++) {
        htmlStmt +=
          '<div class="item item-' + i + '">' + aObj.items[i] + "</div>";
      }
      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    // ================================================================ [ / SentenceBuilding ]

    htmlStmt += "</div></div>"; // - end - all_cont
    htmlStmt += "</div>"; // - end - options
  }

  console.log("htmlStmt >> fillin Built");
  $(".activity_area").append(htmlStmt);
  showSentenceImg();
  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function showSentenceImg() {
  $(document).ready(function () {
    $(".imgToggle").click(function () {
      var imgName = $(this).data("img");
      $("." + imgName).fadeToggle(1000);
    });
  });
}
