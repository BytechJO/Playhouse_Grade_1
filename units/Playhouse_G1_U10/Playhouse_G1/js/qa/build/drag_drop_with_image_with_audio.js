function initActivity(activity){
	var html = '';
	html += '<div>';
	html += '<div class="drag_drop_options">';
	jQuery.each(activity.options, function(key, value){
  html += '<div class="draggable_div" data-value="'+value+'" data-qno="'+key+'" style="background-color: transparent;">'+value+'</div>';
});
	html += '</div>';
	/*
	    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
}
	*/
	var classOption = activity.class === 'grid' ? 'grid-table' : 'd-flex  align-items-center'
	var styleOption = activity.style === 'table' ? 'table' : ''
	var styleListOption = activity.style === 'table' ? 'grid-table-list' : ''
	var styleInputOption = activity.style === 'table' ? 'grid-table-list-input' : ''
	//audios/AnchorAudioPhrases-143.mp3
	html += `<div class="drag_drop_questions" style=" display: flex;flex-direction: column">`;
    html += `<table class="flex-row" style=" display: flex;flex-direction: row;flex-wrap:wrap; justify-content: center">`;
	fieldIndex = 0;
	for(let x=0; x<activity.numOfRow; x++){
		html += `<tr>`;
		for(let y=0; y<activity.numOfCol; y++){
			html += `<td>`;
			// jQuery.each(activity.questions, function(key, values){
				
			// 	if(typeof(values)=="string"){
		
					html += `<div class='flex-cell ' style="flex: 1;border: 1px solid #ccc;padding: 10px;text-align: center;min-width: 25%;">`+ activity.questions[fieldIndex].replace(/___/g, ` <input readonly type="text" class="droppable_div ${styleInputOption}" />`) +'</div>';
		
			// 		} else {
			// 			jQuery.each(values, function(k, v){
			
			// 				var v = v+"";
			// 				html += '<li>'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';
			
			// 			});
			// 		}
			// 	});
			fieldIndex++;
			html += `</td>`;
		}
		html += `</tr>`;
	}


	
	html += '</table></div>';

	

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
}


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