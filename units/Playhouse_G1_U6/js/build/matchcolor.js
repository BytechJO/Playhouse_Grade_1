function buildMatchColorBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a></div>';
        htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a></div>';

        // ===== heading =====
        htmlStmt += '<div class="act_head_group justify-content-center">';
        htmlStmt += '<div class="audioIcon off contant" data-slideNum="1" data-audio="' + aObj.mainTitleAudio + '">';
        htmlStmt += '<div class="q-type-img-container">';
        htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
        if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
            htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right:' + aObj.mainTitleIconPos.right + ';">';
        }
        htmlStmt += '</div></div>';

        htmlStmt += '<div class="activityHeading">';
        htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' + aObj.subTitleAudio + '">';
        htmlStmt += "<div class='page_sub_title d-flex'>";
        htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
        for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
            htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
        htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
        htmlStmt += "</div></div></div></div>";

        // ===== main content =====
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont matchcolor_cont justify-content-start justify-content-sm-center">';

        htmlStmt += '<div class="matchcolor_stage">';

        // svg overlay for connecting lines
        htmlStmt += '<svg class="match_lines_svg"></svg>';

        // words row
        htmlStmt += '<div class="match_words_row d-flex justify-content-center">';
        jQuery.each(aObj.words, function (i, w) {
            htmlStmt += '<div class="match_word_item" data-id="' + w.id + '">';
            htmlStmt += '<div class="audioIcon off contant" data-audio="' + w.audio + '">';
            htmlStmt += '<span class="match_word_text">' + w.text + '</span>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="match_dot word_dot" data-id="' + w.id + '"></div>';
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>';

        // images row
        htmlStmt += '<div class="match_images_row d-flex justify-content-center">';
        jQuery.each(aObj.images, function (i, img) {
            htmlStmt += '<div class="match_image_item" data-id="' + img.id + '" data-matches="' + img.matchesWordId + '">';
            htmlStmt += '<div class="match_dot image_dot" data-id="' + img.id + '"></div>';
            htmlStmt += '<img class="colourable_img" src="' + img.image + '">';
            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>';

        htmlStmt += '</div>'; // matchcolor_stage

        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> matchcolor Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}

// ===================== كائن النشاط =====================
function MatchColor(aContainer, aData) {
    var self = this;
    self.container = aContainer;
    self.data = aData;
    self.connections = {}; // wordId -> imageId
    self.selectedWordId = null;
    self.colourPalette = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#6bcB77', '#a29bfe', '#ff9f43'];
    self.colourIndex = 0;

    self.initialSettings = function () {

        // اختيار نقطة الكلمة
        self.container.off('click.wordDot').on('click.wordDot', '.word_dot', function () {
            var wId = $(this).data('id');
            $('.word_dot').removeClass('selected');
            $(this).addClass('selected');
            self.selectedWordId = wId;
        });

        // اختيار نقطة الصورة -> رسم الخط
        self.container.off('click.imageDot').on('click.imageDot', '.image_dot', function () {
            if (self.selectedWordId == null) return;
            var imgId = $(this).data('id');

            // امسح أي خط سابق مرتبط بنفس الكلمة (سمح بإعادة التوصيل)
            self.removeConnectionByWord(self.selectedWordId);
            // امسح أي خط سابق مرتبط بنفس الصورة (صورة وحدة توصل بكلمة وحدة)
            self.removeConnectionByImage(imgId);

            self.connections[self.selectedWordId] = imgId;
            self.drawAllLines();

            $('.word_dot').removeClass('selected');
            self.selectedWordId = null;
        });

        // الدوس على الصورة نفسها يلوّنها (toggle)
        self.container.off('click.colourImg').on('click.colourImg', '.match_image_item', function (e) {
            if ($(e.target).hasClass('image_dot')) return; // لا تلوّن إذا دس عالنقطة
            var $img = $(this).find('.colourable_img');
            if ($img.hasClass('coloured')) {
                $img.removeClass('coloured').css('filter', 'none');
            } else {
                var colour = self.colourPalette[self.colourIndex % self.colourPalette.length];
                self.colourIndex++;
                $img.addClass('coloured').css('filter', self.colourToFilter(colour));
            }
        });

        // ------------------------------------------------------------------ //
        // الدوس على الكلمة نفسها (مش عالنقطة) -> يطلع باليت ألوان صغير
        // تحتها، الطالب بيختار لون منه وبتتلون الكلمة (النص) مباشرة.
        // هاد الشي منفصل تماماً عن التوصيل/الفاليديشن - قرار الطالب باللون
        // مش موضوع فحص إطلاقاً.
        // ------------------------------------------------------------------ //
        self.container.off('click.wordText').on('click.wordText', '.match_word_text', function (e) {
            e.stopPropagation();
            self.showWordPalette($(this));
        });

        // اقفال أي باليت مفتوحة لو ضغط الطالب أي مكان تاني بالصفحة
        $(document).off('click.closeWordPalette').on('click.closeWordPalette', function (e) {
            if (!$(e.target).closest('.word_colour_palette, .match_word_text').length) {
                $('.word_colour_palette').remove();
            }
        });

        $(window).off('resize.matchcolor').on('resize.matchcolor', function () {
            self.drawAllLines();
        });

        $('.checkBtn').removeClass('disabled');
        $('.resetBtn').removeClass('disabled');

        initialSettingsDone(1);
    };

    // ------------------------------------------------------------------ //
    // بيبني وبيفتح باليت الألوان تحت الكلمة المختارة، ووقت ما الطالب
    // يدوس عَ لون منه بيلوّن نص الكلمة (.match_word_text) مباشرة.
    // ------------------------------------------------------------------ //
    self.showWordPalette = function ($word) {
        $('.word_colour_palette').remove(); // اقفل أي باليت مفتوحة قبل

        var paletteHtml = '<div class="word_colour_palette">';
        jQuery.each(self.colourPalette, function (i, c) {
            paletteHtml += '<span class="colour_swatch" data-colour="' + c + '" style="background-color:' + c + ';"></span>';
        });
        paletteHtml += '</div>';

        var $palette = $(paletteHtml);
        $word.closest('.match_word_item').append($palette);

        $palette.off('click').on('click', '.colour_swatch', function (e) {
            e.stopPropagation();
            var chosenColour = $(this).data('colour');
            $word.css({
                'color': chosenColour,
                '-webkit-text-stroke': '0px'
            });
            $palette.remove();
        });
    };

    self.removeConnectionByWord = function (wordId) {
        delete self.connections[wordId];
    };

    self.removeConnectionByImage = function (imageId) {
        for (var w in self.connections) {
            if (self.connections[w] == imageId) {
                delete self.connections[w];
            }
        }
    };

    self.drawAllLines = function () {
        var $svg = $('.match_lines_svg');
        $svg.empty();
        var stageOffset = $('.matchcolor_stage').offset();

        for (var wordId in self.connections) {
            var imageId = self.connections[wordId];
            var $wDot = $('.word_dot[data-id="' + wordId + '"]');
            var $iDot = $('.image_dot[data-id="' + imageId + '"]');
            if ($wDot.length == 0 || $iDot.length == 0) continue;

            var wOff = $wDot.offset();
            var iOff = $iDot.offset();

            var x1 = wOff.left - stageOffset.left + ($wDot.outerWidth() / 2);
            var y1 = wOff.top - stageOffset.top + ($wDot.outerHeight() / 2);
            var x2 = iOff.left - stageOffset.left + ($iDot.outerWidth() / 2);
            var y2 = iOff.top - stageOffset.top + ($iDot.outerHeight() / 2);

            var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('class', 'match_line');
            $svg[0].appendChild(line);
        }
    };

    self.colourToFilter = function (hex) {
        // طريقة مبسطة لإعطاء إحساس تلوين عن طريق drop-shadow / تشبع، بما إنه الصور outline (أبيض وأسود)
        return 'drop-shadow(0 0 0 ' + hex + ') saturate(3) brightness(0.95)';
    };

    self.validate = function () {
        var allCorrect = true;
        $('.match_word_item, .match_image_item').removeClass('correct_match wrong_match');

        jQuery.each(self.data.images, function (i, img) {
            var connectedWordId = null;
            for (var w in self.connections) {
                if (self.connections[w] == img.id) {
                    connectedWordId = w;
                }
            }
            var $imgItem = $('.match_image_item[data-id="' + img.id + '"]');
            var $wordItem = connectedWordId ? $('.match_word_item[data-id="' + connectedWordId + '"]') : null;

            if (connectedWordId == img.matchesWordId) {
                $imgItem.addClass('correct_match');
                $imgItem.find('.icon_wrap').css('display', 'block');
                $imgItem.find('.tick').css('display', 'block');
                $imgItem.find('.cross').css('display', 'none');
                if ($wordItem) $wordItem.addClass('correct_match');
            } else {
                $imgItem.addClass('wrong_match');
                $imgItem.find('.icon_wrap').css('display', 'block');
                $imgItem.find('.cross').css('display', 'block');
                $imgItem.find('.tick').css('display', 'none');
                if ($wordItem) $wordItem.addClass('wrong_match');
                allCorrect = false;
            }
        });

        showFeedback(true, allCorrect);
        $('.resetBtn').removeClass('disabled');
    };

    self.reset = function () {
        self.connections = {};
        self.selectedWordId = null;
        self.colourIndex = 0;
        $('.match_lines_svg').empty();
        $('.word_dot').removeClass('selected');
        $('.match_word_item, .match_image_item').removeClass('correct_match wrong_match');
        $('.icon_wrap').css('display', 'none');
        $('.tick, .cross').css('display', 'none');
        $('.colourable_img').removeClass('coloured').css('filter', 'none');
        // شيل أي تلوين يدوي عالكلمات وأي باليت مفتوحة
        $('.match_word_text').css({ 'color': '', '-webkit-text-stroke': '' });
        $('.word_colour_palette').remove();
        $('.checkBtn').removeClass('disabled');
        $('.resetBtn').addClass('disabled');
    };
}