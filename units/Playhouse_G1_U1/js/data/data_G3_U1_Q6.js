var stereo_data = {
    "audio":"",
    "exist":false,
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
var mcq_data = {   
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle": "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon": "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos": {"right": "100px"},
    "mainTitleAudio": "../audios/page_13/PLAYHOUSE_1_SB_UNIT_1_TRACK_05_01.mp3",
    "subTitleTextLeft": "<span class='blue_text'>2</span> Choose <span class='red-text'>a</span> or <span class='red-text'>an</span>.",
    "subTitleTextRight": "",
    "subTitleIcons": ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio": "../audios/new/p13choose.mp3",
    "activitysubheading"    : "",
    "activityicon"          : "../images/icons/hand_icon.png",    
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       : "1", 
    "numberofcolumns"       :  1,
    "image"                 : "../images/pages/sb-icons/gram_2_icon.png",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : " [_] open book",
            "options"               : [["a","an"]],          
            "answer"                : [2],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : " [_] teacher",
            "options"               : [["a","an"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : " [_] student",
            "options"               : [["a","an"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : " [_]  umbrella",
            "options"               : [["a","an"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }
        	
    ]
}