//  ****************************************** //
//  DrawQA - Version no: 1
//  Free draw canvas + free-write question/answer lines, no validation
//  ****************************************** //
window.DrawQA = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");
  console.log("DrawQA > ", $(".activity_area"));
  this.settings = {
    activity_area: ob[0],
    has_audio:
      obj[0].dataset.audio != undefined && obj[0].dataset.audio != null
        ? obj[0].dataset.audio
        : "no",
    data_obj: dataObj,
    parent_holder: obj[0],
  };
  this.init(this.settings);
};
DrawQA.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.setupCanvas(ob);
    this.listen(ob);
    // no check button needed for this activity type
    if (document.getElementsByClassName("checkBtn")[0]) {
      document.getElementsByClassName("checkBtn")[0].classList.add("d-none");
    }
  },
  setupCanvas: function (ob) {
    var e = ob.activity_area;
    var canvas = e.querySelector(".draw_canvas");
    var box = e.querySelector(".draw_box");

    if (!canvas || !box) {
      console.error("DrawQA: Canvas or draw_box not found");
      return;
    }

    var ctx = canvas.getContext("2d");

    function resizeCanvas() {
      var ratio = window.devicePixelRatio || 1;

      var w = canvas.clientWidth;
      var h = canvas.clientHeight;

      if (w === 0 || h === 0) {
        w = box.clientWidth;
        h = box.clientHeight;
      }

      canvas.width = w * ratio;
      canvas.height = h * ratio;

      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(ratio, ratio);

      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#2f6fb3";
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    this.canvas = canvas;
    this.ctx = ctx;
  },
  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;

    var canvas = this.canvas;
    var ctx = this.ctx;

    if (!canvas || !ctx) {
      console.error("DrawQA: Canvas context not initialized");
      return;
    }

    var drawing = false;

    function enableReset() {
      if (document.getElementsByClassName("resetBtn")[0]) {
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      }
    }

    function getPos(evt) {
      var rect = canvas.getBoundingClientRect();

      var clientX;
      var clientY;

      if (evt.touches && evt.touches.length) {
        clientX = evt.touches[0].clientX;
        clientY = evt.touches[0].clientY;
      } else {
        clientX = evt.clientX;
        clientY = evt.clientY;
      }

      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    }

    function startDraw(evt) {
      drawing = true;

      var pos = getPos(evt);

      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);

      evt.preventDefault();

      enableReset();
    }

    function moveDraw(evt) {
      if (!drawing) {
        return;
      }

      var pos = getPos(evt);

      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();

      evt.preventDefault();
    }

    function endDraw() {
      drawing = false;

      ctx.closePath();
    }

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", moveDraw);
    canvas.addEventListener("mouseup", endDraw);
    canvas.addEventListener("mouseleave", endDraw);

    canvas.addEventListener("touchstart", startDraw, {
      passive: false,
    });

    canvas.addEventListener("touchmove", moveDraw, {
      passive: false,
    });

    canvas.addEventListener("touchend", endDraw);

    var clearBtn = e.querySelector(".clearDrawBtn");

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }

    var qaInputs = e.querySelectorAll(".qa_input");

    for (var i = 0; i < qaInputs.length; i++) {
      qaInputs[i].addEventListener("input", function () {
        this.style.color = "black";

        enableReset();
      });
    }
  },
  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    var qaInputs = e.querySelectorAll(".qa_input");
    for (var i = 0; i < qaInputs.length; i++) {
      qaInputs[i].value = "";
      qaInputs[i].style.color = "black";
    }
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
