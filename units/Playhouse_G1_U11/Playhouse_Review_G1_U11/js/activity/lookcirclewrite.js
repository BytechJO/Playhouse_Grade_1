//  ****************************************** //
//  LookCircleWrite - Version no: 1
//  اللوجيك/المنطق الخاص بنشاط "Look, circle and write"
//  (اختيار دائرة، كتابة كلمة، تصحيح، إعادة ضبط)
//  ****************************************** //
function _initLCWActivity(aObj) {

    // تتبع الاختيارات
    var _selected = {}; // { qno: optno }

    // دالة موحّدة لتفعيل الزرين - مستقلة عن حالة "validated"
    // (هاي الدالة لازم تشتغل من أي تفاعل: كبسة دائرة أو كتابة بالخانة)
    function _enableActionBtns() {
        $('.checkBtn').removeClass('disabled');
        $('.resetBtn').removeClass('disabled');
    }

    // اختيار الخيار (circle)
    $(document).on('click', '.lcw-pick', function() {
        if ($(this).closest('.lcw-que').hasClass('validated')) return;
        var qno  = $(this).data('qno');
        var opto = $(this).data('optno');

        // إلغاء تحديد القديم
        $('#lcw-que-' + qno + ' .lcw-pick').removeClass('selected');
        // تحديد الجديد
        $(this).addClass('selected');
        _selected[qno] = opto;

        _enableActionBtns();
    });

    // الكتابة بخانة الإدخال لازم كمان تفعّل الأزرار (مستقلة عن حالة "validated")
    $(document).on('input', '.lcw-input', function() {
        _enableActionBtns();
    });

    // validate يستدعيها الـ framework
    window.validateActivity = function() {
        var allCorrect = true;

        for (var q = 0; q < aObj.questions.length; q++) {
            var qNum    = q + 1;
            var tQ      = aObj.questions[q];
            var queEl   = $('#lcw-que-' + qNum);
            var iconWrp = queEl.find('.icon_wrap');
            var inputEl = $('#lcw-input-' + qNum);

            var pickedOpt  = _selected[qNum] || 0;       // اللي انتقاه
            var correctOpt = tQ.answer;                   // الصح (1-based)
            var writtenVal = (inputEl.val() || '').trim().toLowerCase();
            var correctWord= (tQ.word || '').toLowerCase();

            var pickOk  = (pickedOpt === correctOpt);
            var writeOk = (writtenVal === correctWord);
            var bothOk  = pickOk && writeOk;

            // لون الخيارات
            queEl.find('.lcw-pick').each(function() {
                var o = $(this).data('optno');
                $(this).removeClass('selected correct wrong');
                if (o === correctOpt) {
                    $(this).addClass('correct');
                } else if (o === pickedOpt && !pickOk) {
                    $(this).addClass('wrong');
                }
            });

            // لون الـ input
            inputEl.removeClass('correct-input wrong-input');
            inputEl.addClass(writeOk ? 'correct-input' : 'wrong-input');

            // tick / cross — نفس MCQ
            iconWrp.find('.tick').css('display', bothOk ? 'block' : 'none');
            iconWrp.find('.cross').css('display', bothOk ? 'none'  : 'block');

            queEl.addClass('validated');
            if (!bothOk) allCorrect = false;
        }

        // زر Reset لازم يضل مفعّل بعد التصحيح بكل الأحوال (صح أو غلط)
        $('.resetBtn').removeClass('disabled');

        showFeedback(true, allCorrect);
    };

    // reset يستدعيها الـ framework
    window.initActivity = function() {
        _selected = {};

        for (var q = 0; q < aObj.questions.length; q++) {
            var qNum = q + 1;
            var queEl = $('#lcw-que-' + qNum);
            queEl.removeClass('validated');
            queEl.find('.lcw-pick').removeClass('selected correct wrong');
            queEl.find('.icon_wrap .tick, .icon_wrap .cross').hide();
            $('#lcw-input-' + qNum).val('').removeClass('correct-input wrong-input');
        }

        // منعطّل بس زر Check - زر Reset بيضل شغال دايمًا (نفس نمط FillIn/MCQ)
        $('.checkBtn').addClass('disabled');
        $('.resetBtn').removeClass('disabled');
    };
}