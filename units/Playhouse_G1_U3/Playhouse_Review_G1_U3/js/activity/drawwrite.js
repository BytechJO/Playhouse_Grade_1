//  ****************************************** //
//  DrawWrite - Version no: 1
//  Free draw canvas + free write lines, no validation
//  ****************************************** //
window.DrawWrite = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('DrawWrite > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
DrawWrite.prototype = {
    init:function(ob){
        this.ob = ob;
        this.setupCanvas(ob);
        this.listen(ob);
        // no check button needed for this activity type
        if(document.getElementsByClassName('checkBtn')[0]){
            document.getElementsByClassName('checkBtn')[0].classList.add("d-none");
        }
    },
    setupCanvas:function(ob){
        var e = (ob.activity_area);
        var canvas = e.querySelector('.draw_canvas');
        var box = e.querySelector('.draw_box');

        function resizeCanvas(){
            var ratio = window.devicePixelRatio || 1;
            var w = box.clientWidth;
            var h = box.clientHeight;
            var prevData = null;
            if(canvas.width > 0 && canvas.height > 0){
                prevData = canvas.toDataURL();
            }
            canvas.width = w * ratio;
            canvas.height = h * ratio;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            var ctx = canvas.getContext('2d');
            ctx.scale(ratio, ratio);
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#2f6fb3';
            if(prevData){
                var img = new Image();
                img.onload = function(){ ctx.drawImage(img, 0, 0, w, h); };
                img.src = prevData;
            }
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var canvas = this.canvas;
        var ctx = this.ctx;
        var drawing = false;

        function getPos(evt){
            var rect = canvas.getBoundingClientRect();
            var clientX = (evt.touches) ? evt.touches[0].clientX : evt.clientX;
            var clientY = (evt.touches) ? evt.touches[0].clientY : evt.clientY;
            return { x: clientX - rect.left, y: clientY - rect.top };
        }

        function startDraw(evt){
            drawing = true;
            var pos = getPos(evt);
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            evt.preventDefault();

            if(document.getElementsByClassName('resetBtn')[0]){
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            }
        }
        function moveDraw(evt){
            if(!drawing) return;
            var pos = getPos(evt);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            evt.preventDefault();
        }
        function endDraw(evt){
            drawing = false;
        }

        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', moveDraw);
        canvas.addEventListener('mouseup', endDraw);
        canvas.addEventListener('mouseleave', endDraw);

        canvas.addEventListener('touchstart', startDraw, {passive:false});
        canvas.addEventListener('touchmove', moveDraw, {passive:false});
        canvas.addEventListener('touchend', endDraw);

        var clearBtn = e.querySelector('.clearDrawBtn');
        clearBtn.addEventListener('click', function(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });

        // auto-grow the write lines a little as user types (optional, non-blocking)
        var writeInputs = e.querySelectorAll('.write_line_input');
        for(var i=0; i<writeInputs.length; i++){
            writeInputs[i].addEventListener('input', function(){
                this.style.height = 'auto';
                this.style.height = this.scrollHeight + 'px';

                if(document.getElementsByClassName('resetBtn')[0]){
                    document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
                }
            });
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);

        if(this.ctx && this.canvas){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        var writeInputs = e.querySelectorAll('.write_line_input');
        for(var i=0; i<writeInputs.length; i++){
            writeInputs[i].value = '';
            writeInputs[i].style.height = 'auto';
        }
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}