//  ****************************************** //
//  Crossword - Version no: 1
//  Single-letter input cells, auto-advance focus, exact-match validation per cell
//  ****************************************** //
window.Crossword = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('Crossword > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
Crossword.prototype = {
    init:function(ob){
        this.ob = ob;
        this.buildCellIndex(ob);
        this.listen(ob);
    },
    buildCellIndex:function(ob){
        var e = (ob.activity_area);
        var inputs = e.querySelectorAll('.cw_input');
        var map = {};
        for (var i = 0; i < inputs.length; i++) {
            var key = inputs[i].dataset.row + '_' + inputs[i].dataset.col;
            map[key] = inputs[i];
        }
        this.cellMap = map;
    },
    findNextCell:function(row, col){
        var rightKey = row + '_' + (parseInt(col) + 1);
        if(this.cellMap[rightKey]) return this.cellMap[rightKey];

        var downKey = (parseInt(row) + 1) + '_' + col;
        if(this.cellMap[downKey]) return this.cellMap[downKey];

        return null;
    },
    findPrevCell:function(row, col){
        var leftKey = row + '_' + (parseInt(col) - 1);
        if(this.cellMap[leftKey]) return this.cellMap[leftKey];

        var upKey = (parseInt(row) - 1) + '_' + col;
        if(this.cellMap[upKey]) return this.cellMap[upKey];

        return null;
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var inputs = e.querySelectorAll('.cw_input');

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function(){
                $(this).css('color', 'black');
                this.value = (this.value).toUpperCase();

                if(this.value.length > 0){
                    var nextCell = self.findNextCell(this.dataset.row, this.dataset.col);
                    if(nextCell){ nextCell.focus(); }
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });

            inputs[i].addEventListener('keydown', function(evt){
                if(evt.key == 'Backspace' && this.value.length == 0){
                    var prevCell = self.findPrevCell(this.dataset.row, this.dataset.col);
                    if(prevCell){ prevCell.focus(); }
                }
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var cellsData = (ob.data_obj).cells;
        var _case = (ob.data_obj.strictcase != undefined && ob.data_obj.strictcase!=null )? (ob.data_obj.strictcase).toLowerCase():'no';
        var numOfCells = cellsData.length;
        var allCorrect = true;
        var correctCount = 0;

        for (var i = 0; i < cellsData.length; i++) {
            var cellObj = cellsData[i];
            var inputEl = this.cellMap[cellObj.row + '_' + cellObj.col];
            if(!inputEl) continue;

            var uVal = inputEl.value;
            var cVal = cellObj.answer;
            if(_case != 'yes'){
                uVal = uVal.toUpperCase();
                cVal = cVal.toUpperCase();
            }

            if(uVal == cVal && uVal.length > 0){
                inputEl.style.color = '#2f9e44';
                correctCount++;
            }else{
                inputEl.style.color = '#d9364a';
                allCorrect = false;
            }
        }

        showFeedback(true, allCorrect);

        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var inputs = e.querySelectorAll('.cw_input');

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            inputs[i].style.color = 'black';
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}