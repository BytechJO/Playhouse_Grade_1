//  ****************************************** //
//  CompleteSentence - Version no: 1
//  Multiple blanks per sentence, exact-match validation (same logic as FillIn)
//  ****************************************** //
window.CompleteSentence = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('CompleteSentence > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CompleteSentence.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var inputs = e.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function(){
                $(this).css('color', 'black');
                if($(this).data('type') == 'number'){
                    if($.isNumeric(this.value) === false) {
                        this.value = this.value.replace(/\D/g, '');
                    }
                }
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        var numOfQuestions = elsQue.length;
        var allCorrect = false;
        var resultArr = [];

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase!=null )? (fDataObj.strictcase).toLowerCase():'no';
            var _cAns = fDataObj.answer.slice();
            var _uAns = [];
            var inputBoxes = elsQue[i].querySelectorAll('input');
            var _corr = 0;
            var _wrong = 0;

            for(var a=0; a<inputBoxes.length; a++){
                if(inputBoxes[a].dataset.type != 'number'){
                    _uAns[a] = (_case == 'yes')? inputBoxes[a].value : (inputBoxes[a].value).toLowerCase();
                }else{
                    _uAns[a] = inputBoxes[a].value;
                }
            }

            if(_uAns.length > 0 && _cAns.length == _uAns.length){
                for(var cc=0; cc<_cAns.length; cc++){
                    var c = (_case == 'yes')? _cAns[cc] : _cAns[cc].toLowerCase();
                    c = c.replace(/\s/g, '');
                    var u = (_uAns[cc]).replace(/\s/g, '');
                    if(c == u && u.length > 0){
                        _corr++;
                    }else{
                        _wrong++;
                    }
                }
            }else{
                _wrong++;
            }

            if(_corr == _cAns.length && _wrong == 0){
                resultArr[i] = 1;
                (elsQue[i].querySelector('.tick')).style.display = 'block';
            }else{
                resultArr[i] = 0;
                (elsQue[i].querySelector('.cross')).style.display = 'block';
            }
        }

        console.log(resultArr, numOfQuestions);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true,allCorrect);

        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
            var inputBoxes = elsQue[i].querySelectorAll('input');
            for(var a=0; a<inputBoxes.length; a++){
                inputBoxes[a].value = '';
                inputBoxes[a].style.color = 'black';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}