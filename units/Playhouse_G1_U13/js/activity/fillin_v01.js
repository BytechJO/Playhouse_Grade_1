//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020
//  ****************************************** //

window.FillIn = function(obj, dataObj){

    ob = obj[0].getElementsByClassName("options");

    console.log('FillIn > ', $('.activity_area'));

    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (
            obj[0].dataset.audio != undefined &&
            obj[0].dataset.audio != null
        )
        ? obj[0].dataset.audio
        : 'no',

        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }

    this.init(this.settings);
}


FillIn.prototype = {

    init:function(ob){

        this.ob = ob;

        // this.reset();

        this.listen(ob);
    },


    listen:function(ob){

        var e = (ob.activity_area);

        var inputs = e.querySelectorAll('input');

        for (var i = 0; i < inputs.length; i++) {

            inputs[i].addEventListener("input", function(){

                $(this).css('color', 'black');

                console.log($(this).data('type'));

                var v = this.value;

                if($(this).data('type') == 'number'){

                    if($.isNumeric(v) === false) {

                        this.value =
                            this.value.replace(/\D/g, '');

                    }
                }


                document
                    .getElementsByClassName('checkBtn')[0]
                    .classList
                    .remove("disabled");


                document
                    .getElementsByClassName('resetBtn')[0]
                    .classList
                    .remove("disabled");

            });

        }
    },


    // ================================================================
    // VALIDATE
    // ================================================================

    validate:function(){

        var ob = this.ob;

        var e = (ob.activity_area);

        var elsQue =
            e.querySelectorAll('.que');

        var numOfFillIns = 0;

        var allCorrect = false;

        var resultArr = [];


        for (var i = 0; i < elsQue.length; i++) {


            var fIndx =
                parseInt(
                    elsQue[i].dataset.qno
                );


            var fDataObj =
                ((ob.data_obj).questions[fIndx-1]);


            // ========================================================
            // GET ANSWER
            // ========================================================

            var _rawAnswer =
                fDataObj.answer;


            /*
             * إذا answer عبارة عن Array
             *
             * نحذف فقط القيم الفارغة:
             *
             * []
             * [""]
             * ["", ""]
             *
             * لكن إذا كان عندنا:
             *
             * ["cat", ""]
             *
             * تصبح:
             *
             * ["cat"]
             *
             */


            var _filteredAnswer = [];


            if (Array.isArray(_rawAnswer)) {

                for (
                    var aa = 0;
                    aa < _rawAnswer.length;
                    aa++
                ) {

                    if (
                        _rawAnswer[aa] !== undefined &&
                        _rawAnswer[aa] !== null &&
                        String(
                            _rawAnswer[aa]
                        ).trim() !== ''
                    ) {

                        _filteredAnswer.push(
                            _rawAnswer[aa]
                        );

                    }

                }

            } else {

                if (
                    _rawAnswer !== undefined &&
                    _rawAnswer !== null &&
                    String(
                        _rawAnswer
                    ).trim() !== ''
                ) {

                    _filteredAnswer.push(
                        _rawAnswer
                    );

                }

            }


            // ========================================================
            // إذا ما في answer نهائيًا
            // تجاهل السؤال بالكامل
            // ========================================================

            if (
                _filteredAnswer.length === 0
            ) {

                console.log(
                    'FillIn >> ignored question:',
                    fIndx,
                    fDataObj.answer
                );

                continue;
            }


            // هذا السؤال يدخل في العد
            numOfFillIns++;


            // ========================================================
            // Reset icons
            // ========================================================

            (elsQue[i].querySelector('.tick'))
                .style.display = 'none';


            (elsQue[i].querySelector('.cross'))
                .style.display = 'none';


            // ========================================================
            // Case
            // ========================================================

            var _case =
                (
                    fDataObj.strictcase != undefined &&
                    fDataObj.strictcase != null
                )
                ?
                (fDataObj.strictcase).toLowerCase()
                :
                'no';


            // ========================================================
            // Correct answers
            // ========================================================

            var _cAns =
                getStrArray(
                    _filteredAnswer,
                    'activity'
                );


            var _uAns = [];

            var _isReadOnly = [];

            var _corr = 0;

            var _wrong = 0;


            // ========================================================
            // Inputs
            // ========================================================

            var inputBoxes =
                elsQue[i].querySelectorAll('input');


            if(inputBoxes.length > 0){

                for(
                    var a = 0;
                    a < inputBoxes.length;
                    a++
                ){

                    console.log(
                        a,
                        inputBoxes[a].dataset.type
                    );


                    _isReadOnly[a] =
                        (
                            inputBoxes[a]
                                .getAttribute("disabled") == null
                            &&
                            inputBoxes[a]
                                .getAttribute("readonly") == null
                        )
                        ?
                        0
                        :
                        1;


                    if(
                        (inputBoxes[a].value).length > 0
                    ){

                        if(
                            inputBoxes[a].dataset.type != 'number'
                        ){

                            _uAns[a] =
                                (
                                    _case == 'yes'
                                )
                                ?
                                inputBoxes[a].value
                                :
                                inputBoxes[a].value.toLowerCase();

                        } else {

                            _uAns[a] =
                                inputBoxes[a].value;

                        }

                    }

                }

            }


            // ========================================================
            // Show icon
            // ========================================================

            (
                elsQue[i].dataset
            ).showIcon =
                (
                    ((_isReadOnly.join('').split('1'))[0]).length
                    ==
                    _cAns.length
                );


            console.log(
                _uAns,
                _cAns,
                (
                    ((_isReadOnly.join('').split('1'))[0]).length
                    ==
                    _cAns.length
                ),
                i,
                (elsQue[i].dataset).showIcon
            );


            // ========================================================
            // Compare answers
            // ========================================================

            if(
                (_uAns.length > 0)
                &&
                (_cAns.length == _uAns.length)
            ){

                for(
                    var cc = 0;
                    cc < _cAns.length;
                    cc++
                ){

                    _cAns[cc] =
                        (_case == 'yes')
                        ?
                        _cAns[cc]
                        :
                        _cAns[cc].toLowerCase();


                    _cAns[cc] =
                        (_cAns[cc]).replace(/\s/g, '');


                    _uAns[cc] =
                        (_uAns[cc]).replace(/\s/g, '');


                    if(
                        _cAns[cc] == _uAns[cc]
                    ){

                        _corr++;

                    } else {

                        _wrong++;

                    }

                }

            } else {

                _wrong++;

            }


            // ========================================================
            // Result
            // ========================================================

            if(
                _corr == _uAns.length &&
                _wrong == 0
            ){

                resultArr[i] = 1;


                (
                    elsQue[i]
                        .querySelector('.tick')
                )
                .style.display = 'block';


                // ====================================================
                // Correct audio
                // ====================================================

                if(
                    fDataObj.audio != '' &&
                    fDataObj.audio != 'no'
                ){

                    if(
                        fDataObj.audioenable == 'correct'
                        &&
                        (
                            elsQue[i]
                                .querySelectorAll('.audioIcon')
                                .length > 0
                        )
                    ){

                        (
                            elsQue[i]
                                .querySelector('.audioIcon')
                        )
                        .classList
                        .remove("disabled");

                    }

                }


            } else {

                resultArr[i] = 0;


                (
                    elsQue[i]
                        .querySelector('.cross')
                )
                .style.display = 'block';


                // ====================================================
                // Wrong audio
                // ====================================================

                if(
                    fDataObj.audio != '' &&
                    fDataObj.audio != 'no'
                ){

                    if(
                        fDataObj.audioenable == 'correct'
                        &&
                        (
                            elsQue[i]
                                .querySelectorAll('.audioIcon')
                                .length > 0
                        )
                    ){

                        (
                            elsQue[i]
                                .querySelector('.audioIcon')
                        )
                        .classList
                        .add("disabled");

                    }

                }

            }


            // ========================================================
            // Show icon
            // ========================================================

            if(
                elsQue[i]
                    .querySelectorAll('.icon_wrap')
                    .length > 0
            ){

                if(
                    (elsQue[i].dataset).showIcon == "true"
                ){

                    (
                        elsQue[i]
                            .querySelector('.icon_wrap')
                    )
                    .style.display = 'block';

                }

            }

        }


        // ================================================================
        // Final result
        // ================================================================

        console.log(
            resultArr,
            numOfFillIns
        );


        /*
         * هون مهم:
         *
         * resultArr ممكن يحتوي indexes متخطية
         * بسبب الأسئلة اللي عملنا لها continue.
         *
         * لذلك نحسب فقط النتائج الموجودة فعلًا.
         */

        var validResults = [];

        for (
            var rr = 0;
            rr < resultArr.length;
            rr++
        ){

            if(
                resultArr[rr] !== undefined
            ){

                validResults.push(
                    resultArr[rr]
                );

            }

        }


        allCorrect =
            (
                numOfFillIns > 0
                &&
                validResults.length == numOfFillIns
                &&
                validResults.indexOf(0) == -1
            );


        showFeedback(
            true,
            allCorrect
        );


        if(allCorrect){

            document
                .getElementsByClassName('resetBtn')[0]
                .classList
                .add("disabled");

        }

    },


    // ================================================================
    // RESET
    // ================================================================

    reset:function(){

        var ob = this.ob;

        var e = (ob.activity_area);

        var elsQue =
            e.querySelectorAll('.que');


        for (
            var i = 0;
            i < elsQue.length;
            i++
        ){

            var fIndx =
                parseInt(
                    elsQue[i].dataset.qno
                );


            var fDataObj =
                ((ob.data_obj).questions[fIndx-1]);


            // ========================================================
            // Reset icons
            // ========================================================

            (
                elsQue[i]
                    .querySelector('.icon_wrap')
            )
            .style.display = 'none';


            (
                elsQue[i]
                    .querySelector('.tick')
            )
            .style.display = 'none';


            (
                elsQue[i]
                    .querySelector('.cross')
            )
            .style.display = 'none';


            // ========================================================
            // Audio
            // ========================================================

            if(
                fDataObj.audio != '' &&
                fDataObj.audio != 'no'
            ){

                if(
                    elsQue[i]
                        .querySelectorAll('.audioIcon')
                        .length > 0
                ){

                    if(
                        fDataObj.audioenable == 'correct'
                    ){

                        (
                            elsQue[i]
                                .querySelector('.audioIcon')
                        )
                        .style.display = 'block';


                        (
                            elsQue[i]
                                .querySelector('.audioIcon')
                        )
                        .classList
                        .add("disabled");


                    }else if(
                        fDataObj.audioenable == 'default'
                    ){

                        (
                            elsQue[i]
                                .querySelector('.audioIcon')
                        )
                        .style.display = 'block';


                        (
                            elsQue[i]
                                .querySelector('.audioIcon')
                        )
                        .classList
                        .remove("disabled");

                    }

                }

            }else{

                if(
                    elsQue[i]
                        .querySelectorAll('.audioIcon')
                        .length > 0
                ){

                    // No audio
                }

            }


            // ========================================================
            // Reset inputs
            // ========================================================

            var inputBoxes =
                elsQue[i].querySelectorAll('input');


            if(
                inputBoxes.length > 0
            ){

                for(
                    var a = 0;
                    a < inputBoxes.length;
                    a++
                ){

                    if(
                        (
                            inputBoxes[a]
                                .getAttribute("disabled") == null
                        )
                        &&
                        (
                            inputBoxes[a]
                                .getAttribute("readonly") == null
                        )
                    ){

                        inputBoxes[a].value = '';

                        inputBoxes[a].style.color = 'black';

                    }

                }

            }

        }


        document
            .getElementsByClassName('checkBtn')[0]
            .classList
            .add("disabled");

    },


    // ================================================================
    // INITIAL SETTINGS
    // ================================================================

    initialSettings:function(){

        this.reset();

        initialSettingsDone(1);

    }

}