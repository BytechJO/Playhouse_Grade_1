//Validate answers with JSON data
// FIX: كل عمود إله بنك إجابات صحيحة لحاله - أي إجابة صحيحة تنحط بأي
// صف من نفس العمود (بغض النظر عن الترتيب) تُقبل، طالما ما استُخدمت قبل
function validateActivity() {
    var activity_type = jQuery('.activity_container').data('activity_type');
    if(typeof(activity_type)!='undefined'){
        var err = 0;
        jQuery('.'+activity_type+'_activity .activity_result').remove();

        var numOfCol = _activity_json.numOfCol;

        // ابني بنك إجابات لكل عمود لحاله، اعتمادًا على أنو fieldIndex بالجدول
        // الأصلي مبني row-major: fieldIndex = row*numOfCol + col
        // يعني col = fieldIndex % numOfCol - ونفس الترتيب بينطبق على الـ inputs
        var colPools = {};
        jQuery.each(_activity_json.answers, function(idx, ans){
            var col = idx % numOfCol;
            if (!colPools[col]) colPools[col] = [];
            colPools[col].push({ value: ans, used: false });
        });

        jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){               
            var i = k + 1;
            var col = k % numOfCol;
            var uVal = jQuery(this).val();
            var pool = colPools[col] || [];
            var isCorrect = false;

            for (var p = 0; p < pool.length; p++) {
                if (!pool[p].used && pool[p].value === uVal) {
                    pool[p].used = true;
                    isCorrect = true;
                    break;
                }
            }

            if(!isCorrect){
                jQuery('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>').insertAfter(jQuery(this));
                err++;
            } else {                
                jQuery('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>').insertAfter(jQuery(this));       
                 $( ".drop_audio_"+i ).removeClass( "disabled" );
            }
        });
        
        if(err>0){
            tryagain();
        } else {
            goodjob();
        }
    }
}