//  ****************************************** //
//  CircleUnderline - Version no: 1
//  Click a sentence to cycle: none -> circle -> underline -> none
//  ****************************************** //
window.CircleUnderline = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('CircleUnderline > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CircleUnderline.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle:function(svg, textEl){
        var w = textEl.offsetWidth;
        var h = textEl.offsetHeight;
        var pad = 14;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad*2) + ' ' + (h + pad*2));
        var rx = (w/2) + (pad*0.9);
        var ry = (h/2) + (pad*0.7);
        var cx = (w/2) + pad;
        var cy = (h/2) + pad;
        var path = 'M ' + cx + ' ' + (cy-ry) +
                   ' C ' + (cx+rx*1.1) + ' ' + (cy-ry*0.9) + ', ' + (cx+rx*1.05) + ' ' + (cy+ry*1.05) + ', ' + cx + ' ' + (cy+ry) +
                   ' C ' + (cx-rx*1.15) + ' ' + (cy+ry*0.95) + ', ' + (cx-rx*0.9) + ' ' + (cy-ry*1.1) + ', ' + cx + ' ' + (cy-ry) + ' Z';
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="4" stroke-linecap="round"/>';
    },
    drawUnderline:function(svg, textEl){
        var w = textEl.offsetWidth;
        var h = textEl.offsetHeight;
        svg.setAttribute('viewBox', '0 0 ' + w + ' ' + (h + 15));
        var y = h + 5;
        var path = 'M 2 ' + y + ' Q ' + (w/2) + ' ' + (y+6) + ' ' + (w-2) + ' ' + y;
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#2f6fb3" stroke-width="4" stroke-linecap="round"/>';
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var items = e.querySelectorAll('.cu_item');

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function(){
                var item = this;
                var textEl = item.querySelector('.cu_text');
                var circleSvg = item.querySelector('.circle_svg');
                var underlineSvg = item.querySelector('.underline_svg');
                var current = item.dataset.userMark || 'none';
                var next = (current == 'none') ? 'circle' : (current == 'circle') ? 'underline' : 'none';
                item.dataset.userMark = next;

                circleSvg.innerHTML = '';
                underlineSvg.innerHTML = '';
                if(next == 'circle'){
                    self.drawCircle(circleSvg, textEl);
                }else if(next == 'underline'){
                    self.drawUnderline(underlineSvg, textEl);
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
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var correctType = (elsQue[i].dataset.type == 'statement') ? 'circle' : 'underline';
            var userMark = elsQue[i].dataset.userMark;
            var isRight = (userMark == correctType);

            if(isRight){
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
            delete elsQue[i].dataset.userMark;
            elsQue[i].querySelector('.circle_svg').innerHTML = '';
            elsQue[i].querySelector('.underline_svg').innerHTML = '';
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}