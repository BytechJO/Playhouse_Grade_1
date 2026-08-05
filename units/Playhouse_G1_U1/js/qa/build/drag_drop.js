function initActivity(activity){
	var html = '';
	html += '<div>';
	html += '<div class="drag_drop_questions"><ul>';
	jQuery.each(activity.questions, function(key, values){

		html += '<li><ul>';
		if(typeof(values)=="string"){

			html += '<li>'+ values.replace(/___/g, ' <input readonly type="text" class="droppable_div" />') +'</li>';

		} else {
			jQuery.each(values, function(k, v){

				var v = v+"";
				html += '<li>'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';

			});
		}
		
		html += '</ul></li>';
	});
	html += '</ul></div>';

	html += '<div class="drag_drop_options">';
jQuery.each(activity.options, function(key, value){
  drag_drop_options += '<div class="draggable_div" data-value="'+value+'" data-qno="'+key+'" style="background-color: transparent;">'+value+'</div>';
});
	html += '</div>'

	html += '</div>';
	writeHtml(activity, html);
  	jQuery(document).on("click", ".drag_drop_questions input", function () {
    returnWordToBank(this);
  });
	setDefaultAnswerDragDrop(activity);

	//for mobile view
	if(window.outerWidth<=600){
		jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
	}

 jQuery(".drag_drop_options div.draggable_div").draggable({
  container: jQuery(".activity-content"),
  revert: true,
  placeholder: true,
  droptarget: ".drag_drop_questions input.droppable_div",
  drop: function (evt, droptarget) {
    const $word = jQuery(this);
    const $input = jQuery(droptarget);

    if ($input.val() !== "") return; // NEW: don't drop onto an already-filled blank

    $input.val($word.text());
    $input.removeClass("droppable_div");
    $input.attr("data-word", $word.text());
    $input.attr("data-word-qno", $word.attr("data-qno")); // NEW: remember which original word this is

    // NEW: hide the ORIGINAL element instead of removing it from the DOM
    $word.css({
      visibility: "hidden",
      pointerEvents: "none",
    });

    detectDragend();
  },
});
  jQuery(".drag_drop_questions").on(
    "click",
    "input.droppable_div.filled",
    function () {
      var $input = jQuery(this);
      var wordQno = $input.attr("data-word-qno");
 
      // إظهار الكلمة مرة ثانية في الخيارات
      if (wordQno !== undefined && wordQno !== "") {
        jQuery(
          '.drag_drop_options .draggable_div[data-qno="' + wordQno + '"]',
        ).css({
          visibility: "visible",
          pointerEvents: "auto",
        });
      }
 
      // تفريغ الفراغ
      $input
        .val("")
        .removeClass("filled")
        .removeAttr("data-word-qno")
        .removeAttr("data-dropped-value");
 
      jQuery(".activity_result").remove();
 
      detectDragend();
    },
  );
}
		
//Example 1
/*
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete the rhyme",
"type":"drag_drop",
"questions":[
				[
					["Pizza, pizza, pizza,<br /> We like it hot or ___."],
					["Pizza, pizza, pizza,<br /> For people young and ___."]
				],
				[
					["Pizza, pizza, pizza,<br /> Have a slice or ___."],
					["Pizza, pizza, pizza,<br /> Enough for me and ___!"]
				]
			],
"options": ["cold", "two", "old", "you"],
"answers": ["cold", "old", "two", "you"],
"default_answer": {1:"cold"}
};
*/

//Example 2
/*
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete the sentences.",
"type":"drag_drop",
"questions":[
				"The girl’s body ___ the sun from shining on the ground",
				"ometimes your shadow is in ___ of, in ___ of, or ___you"
			],
"options": ["back", "stops", "beside", "front","back", "stops", "beside", "front"],
"answers": ["stops", "front", "back", "beside"],
"default_answer":{2:"front"}
};
*/

//Example 3
/*
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete",
"type":"drag_drop",
"questions":[
				"___ choo-choo",
				"___ Rabbit",
				"___ cricket",
				"___ airplane",
				"___ Bear",
				"___ cat",
				"___ pine tree"
			],
"options": ["Oliver", "speedy", "green", "fuzzy gray", "ding-a-ling", "little black", "Bubby"],
"answers": ["ding-a-ling", "Oliver", "little black", "speedy", "Bubby", "fuzzy gray", "green"],
"default_answer": {3:"little black"}
};
*/


function returnWordToBank(input) {
  const $input = jQuery(input);
  const wordValue = $input.attr("data-word");
  const wordQno = $input.attr("data-word-qno"); // NEW: use the original element's stable id, not its text

  if (!wordValue) return;

  // NEW: find the ORIGINAL draggable element (still in the DOM, just hidden)
  // instead of creating a brand new one every time
  var $originalWord = jQuery('.drag_drop_options .draggable_div[data-qno="' + wordQno + '"]');

  if ($originalWord.length > 0) {
    $originalWord.css({
      visibility: "visible",
      pointerEvents: "auto",
    });
  }

  // clean the input
  $input.val("");
  $input.addClass("droppable_div");
  $input.removeAttr("data-word");
  $input.removeAttr("data-word-qno");

  jQuery(".activity_result").remove();
  detectDragend();
}