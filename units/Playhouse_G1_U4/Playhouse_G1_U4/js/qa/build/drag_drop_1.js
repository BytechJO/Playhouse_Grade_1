function initActivity(activity){
	
	//Options
	drag_drop_options = '<div class="drag_drop_options sticky-top">';
	jQuery.each(activity.options, function(key, value){
		drag_drop_options += '<div class="draggable_div" draggable="true" data-value="'+value+'" style="background-color: transparent;">'+value+'</div>';
	});
	drag_drop_options += '</div>';

	//Questions
	drag_drop_questions = '<div class="drag_drop_questions"><ul class="d-flex flex-column flex-wrap" style="height: 386px;">';
	img_array = activity.images;
	jQuery.each(activity.questions, function(key, values){
		drag_drop_questions += '<li class="item d-flex flex-wrap" style="width:225px;"><ul>';
		if(typeof(values)=="string"){
			var has_single_text = '';
			if((values[0]=='_')==true){
				has_single_text = 'has_single_text';
			}
			drag_drop_questions += '<li style="width: 100%;" class="'+has_single_text+'"><div class="droppable_label">';
			drag_drop_questions += '<div class="i_container"><div class="i_row d-flex flex-wrap justify-content-center align-items-center"><div class="l_col">'+(key+1)+'</div><div class="r_col"><div class="droppable_text_div">';
			drag_drop_questions += values.replace(/___/g, '<input readonly type="text" class="droppable_div" /></div><div class="droppable_label">');
			drag_drop_questions += '</div></div></div></div>';
			drag_drop_questions += '</div></li>';
		} else {
			jQuery.each(values, function(k, v){
				var v = v+"";
				drag_drop_questions += '<li class="drag_drop_multiple">'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';
			});
		}
		drag_drop_questions += '</ul></li>';
	});
	drag_drop_questions += '</ul></div>';

	var html = '';
	html += '<div>';
	html += drag_drop_options + drag_drop_questions;

	if(
		(typeof(activity.background_image)!='undefined') && 
		(activity.background_image!='')
	) {
		html += '<div class="image_container">';
		html += '<img src="../images/pages/activities/'+activity.background_image+'" />';
		html += '</div>';
	}

	html += '</div>';
	writeHtml(activity, html);
	setDefaultAnswerDragDrop(activity);

	// ===== HTML5 Native Drag & Drop =====

	// --- الكلمات القابلة للسحب ---
	jQuery('.drag_drop_options div.draggable_div')
		.on('dragstart', function(e) {
			e.originalEvent.dataTransfer.setData('text', $(this).data('value'));
			e.originalEvent.dataTransfer.effectAllowed = 'move';
			$(this).addClass('dragging');
		})
		.on('dragend', function(e) {
			$(this).removeClass('dragging');
		});

	// --- الـ inputs بتستقبل الـ drop ---
	var $dropZone = jQuery('.drag_drop_questions');

	$dropZone
		.on('dragover', 'input', function(e) {
			e.preventDefault();
			e.originalEvent.dataTransfer.dropEffect = 'move';
			$(this).addClass('drag-over');
		})
		.on('dragleave', 'input', function(e) {
			// تأكد إنك فعلاً طلعت من الـ input مش بس تحركت جواه
			var rect = this.getBoundingClientRect();
			if (
				e.originalEvent.clientX < rect.left ||
				e.originalEvent.clientX > rect.right ||
				e.originalEvent.clientY < rect.top  ||
				e.originalEvent.clientY > rect.bottom
			) {
				$(this).removeClass('drag-over');
			}
		})
		.on('drop', 'input', function(e) {
			e.preventDefault();
			$(this).removeClass('drag-over');

			var word = e.originalEvent.dataTransfer.getData('text');
			if (!word) return;

			var $input = $(this);
			var oldVal = $input.val();

			// لو في كلمة قديمة ارجعها للـ options
			if (oldVal !== '') {
				restoreWord(oldVal);
			}

			// حط الكلمة الجديدة
			$input.val(word);
			$input.attr('data-filled', 'true');

			// خبّي الكلمة من الـ options
			jQuery('.drag_drop_options div.draggable_div').filter(function() {
				return $(this).data('value') === word && !$(this).hasClass('used');
			}).first().addClass('used').hide();

			detectDragend();
		});

// --- عند الضغط على الـ input ترجع الكلمة للـ Word Bank ---
$dropZone.on('click', 'input', function () {

    var $input = $(this);
    var word = $input.val();

    if (!word) return;

    // رجّع الكلمة للـ Word Bank
    restoreWord(word);

    // فضّي الـ input
    $input.val('');
    $input.removeAttr('data-filled');

    // إذا عندك دالة بتفحص الإجابات استدعها
    detectDragend();
});

	// --- فنكشن ارجاع الكلمة للـ options ---
	function restoreWord(word) {
		jQuery('.drag_drop_options div.draggable_div').filter(function() {
			return $(this).data('value') === word && $(this).hasClass('used');
		}).first().removeClass('used').show();
	}
}