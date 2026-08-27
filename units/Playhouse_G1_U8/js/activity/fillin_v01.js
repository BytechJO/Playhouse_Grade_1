//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020 
//  Update: دعم "answerOrderMatters": false - بحيث كل الإجابات
//          الصحيحة تصير ببنك مشترك، وأي إجابة صحيحة بأي خانة
//          (بغض النظر عن ترتيبها الأصلي) تُقبل، طالما ما استُخدمت
//          قبل. لو الخاصية مو موجودة، يشتغل المنطق القديم بدون تغيير.
//  ****************************************** //
window.FillIn = function(obj, dataObj){    
    ob = obj[0].getElementsByClassName("options");
    console.log('FillIn > ', $('.activity_area'));
    this.settings = {        
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
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
                        this.value = this.value.replace(/\D/g, '');           
                    }
                }
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");      
            });
            
        }
    },
    // النشاط بده بنك إجابات مشترك (مش مقارنة موضعية) لما answerOrderMatters == false
    isPoolMatchActivity:function(dataObj){
        return (dataObj.answerOrderMatters === false);
    },
    validatePooledAnswers:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var dataObj = ob.data_obj;
        var elsQue = e.querySelectorAll('.que');
        var resultArr = [];

        // 1) ابني بنك الإجابات الصحيحة (مع مراعاة التكرار - كل نسخة تُستخدم مرة وحدة)
        var pool = [];
        for (var i = 0; i < elsQue.length; i++) {
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = dataObj.questions[fIndx - 1];
            var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase != null && (fDataObj.strictcase).toLowerCase() == 'yes');
            var cAnsArr = getStrArray(fDataObj.answer, 'activity');
            var cAns = (cAnsArr && cAnsArr.length > 0) ? cAnsArr[0] : '';
            var norm = (_case ? cAns : cAns.toLowerCase()).replace(/\s/g, '');
            pool.push({ value: norm, used: false });
        }

        // 2) لكل خانة، شوف هل قيمتها موجودة بالبنك ولسا ما استُخدمت
        for (var i = 0; i < elsQue.length; i++) {
            var fIndx2 = parseInt(elsQue[i].dataset.qno);
            var fDataObj2 = dataObj.questions[fIndx2 - 1];
            var _case2 = (fDataObj2.strictcase != undefined && fDataObj2.strictcase != null && (fDataObj2.strictcase).toLowerCase() == 'yes');

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var input = elsQue[i].querySelector('input');
            var isCorrect = false;

            if (!input) {
                // خانة جاهزة (readonly) - صحيحة تلقائيًا
                isCorrect = true;
            } else {
                var uVal = input.value;
                uVal = (uVal.length > 0) ? ((_case2 ? uVal : uVal.toLowerCase()).replace(/\s/g, '')) : '';
                if (uVal.length > 0) {
                    for (var p = 0; p < pool.length; p++) {
                        if (!pool[p].used && pool[p].value === uVal) {
                            pool[p].used = true;
                            isCorrect = true;
                            break;
                        }
                    }
                }
            }

            resultArr[i] = isCorrect ? 1 : 0;

            if (isCorrect) {
                (elsQue[i].querySelector('.tick')).style.display = 'block';
                if (fDataObj2.audio != '' && fDataObj2.audio != 'no') {
                    if (fDataObj2.audioenable == 'correct' && (elsQue[i].querySelectorAll('.audioIcon')).length > 0) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
            } else {
                (elsQue[i].querySelector('.cross')).style.display = 'block';
                if (fDataObj2.audio != '' && fDataObj2.audio != 'no') {
                    if (fDataObj2.audioenable == 'correct' && (elsQue[i].querySelectorAll('.audioIcon')).length > 0) {
                        (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                    }
                }
            }

            if ((elsQue[i].querySelectorAll('.icon_wrap')).length > 0) {
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';
            }
        }

        var allCorrect = (resultArr.indexOf(0) === -1);
        showFeedback(true, allCorrect);
        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area); 
        var dataObj = ob.data_obj;

        // بنك إجابات مشترك بدون اعتبار للترتيب - راجع answerOrderMatters:false بالداتا
        if (this.isPoolMatchActivity(dataObj)) {
            this.validatePooledAnswers();
            return;
        }

        // -------- المنطق العادي (كل خانة تتفحص مقابل إجابتها الخاصة بترتيبها الأصلي) --------
        var elsQue = e.querySelectorAll('.que'); 
        var numOfFillIns = elsQue.length;
        var allCorrect = false; 
        var resultArr = [];        
        for (var i = 0; i < elsQue.length; i++) { 
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
            var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase!=null )? (fDataObj.strictcase).toLowerCase():'no';
            var _cAns = getStrArray(fDataObj.answer, 'activity');            
            var _uAns = [];
            var _isReadOnly = [];
            var _corr = 0;
            var _wrong = 0;
            var inputBoxes = elsQue[i].querySelectorAll('input'); 

            // خانة جاهزة (readonly، بدون input) - صحيحة تلقائيًا
            if (inputBoxes.length === 0) {
                resultArr[i] = 1;
                if (fDataObj.audio != '' && fDataObj.audio != 'no') {
                    if (fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
                continue;
            }

            if(inputBoxes.length > 0){
                for(var a=0;a<inputBoxes.length;a++){
                    console.log(a, inputBoxes[a].dataset.type);
                    _isReadOnly[a] = ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null))?0:1;
                   // if ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null)){
                        if((inputBoxes[a].value).length > 0){
                            if(inputBoxes[a].dataset.type != 'number'){
                                _uAns[a] = (_case == 'yes')? inputBoxes[a].value:(inputBoxes[a].value).toLowerCase();
                            }else{
                                _uAns[a] = inputBoxes[a].value;
                            }
                            
                        }
                    //}
                }
            }
            (elsQue[i].dataset).showIcon = (((_isReadOnly.join('').split('1'))[0]).length == _cAns.length); 
            console.log(_uAns, _cAns, (((_isReadOnly.join('').split('1'))[0]).length == _cAns.length), i, (elsQue[i].dataset).showIcon);
          
            
           
            if((_uAns.length>0) && (_cAns.length == _uAns.length)){
                for(var cc=0;cc<_cAns.length;cc++){                    
                    _cAns[cc] = (_case == 'yes')? _cAns[cc]: _cAns[cc].toLowerCase();  
                   _cAns[cc] = (_cAns[cc]).replace(/\s/g, '');
                   _uAns[cc] = (_uAns[cc]).replace(/\s/g, '');
                    if(_cAns[cc] == _uAns[cc]){
                        _corr++;
                        // if(_isReadOnly[cc] != 1)  {
                            // inputBoxes[cc].style.color = 'green';
                        // }                      
                        
                    }else{
                        _wrong++;
                        // if(_isReadOnly[cc] != 1)  {                         
                            // inputBoxes[cc].style.color = 'red';
                        // }
                    }
                } 
            }else{
                _wrong++;                  
            }
            if(_corr == _uAns.length && _wrong == 0){
                resultArr[i] = 1;
                (elsQue[i].querySelector('.tick')).style.display = 'block';                
                if(fDataObj.audio != '' && fDataObj.audio != 'no' ){   
                    if(fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }              
                    
                }
            }else{
                resultArr[i] = 0;
                (elsQue[i].querySelector('.cross')).style.display = 'block';
                if(fDataObj.audio != '' && fDataObj.audio != 'no'){   
                    if(fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {               
                        (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                    }
                }
            }
            if((elsQue[i].querySelectorAll('.icon_wrap')).length > 0) {
                if((elsQue[i].dataset).showIcon == "true"){
                    (elsQue[i].querySelector('.icon_wrap')).style.display = 'block'; 
                }                
            }     
        }
        console.log(resultArr, numOfFillIns);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfFillIns); 
        showFeedback(true,allCorrect);
       
        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled"); 
        }        
    },
    reset:function(){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');  
        // console.log('reset function >> ', elsQue.length, (ob.data_obj));     
        for (var i = 0; i < elsQue.length; i++) { 
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
            // console.log('reset function >> ', fIndx, ((ob.data_obj).questions[fIndx-1]));
            if(fDataObj.audio != '' && fDataObj.audio != 'no'){ 
                if((elsQue[i].querySelectorAll('.audioIcon')).length > 0){
                    if(fDataObj.audioenable == 'correct'){                
                        (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                        (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                    }else if(fDataObj.audioenable == 'default'){
                        (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
            }else{
                if((elsQue[i].querySelectorAll('.audioIcon')).length > 0){
                    // (elsQue[i].querySelector('.audioIcon')).style.display = 'none';
                }
            }
            var inputBoxes = elsQue[i].querySelectorAll('input');           
            if(inputBoxes.length > 0){
                for(var a=0;a<inputBoxes.length;a++){
                    if ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null)){
                        inputBoxes[a].value = '';
                        inputBoxes[a].style.color = 'black';
                    }
                }
            }

        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}