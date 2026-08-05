var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_15/page_15/demo.mp3',
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
    "mainTitle": "../images/pages/sb-icons/adv_main_title.png",
    "mainTitleIcon": "",
    "mainTitleAudio": "../audios/page_15/PLAYHOUSE_1_SB_UNIT_1_TRACK_08_01.mp3",
    "subTitleTextLeft": "<span class='blue_text'>2</span> Read and tick",
    "subTitleTextRight": "",
    "subTitleIcons": ["../images/pages/sb-icons/adv_icon_2.png"],
    "subTitleAudio": "../audios/new/p15read.mp3",
    "activitysubheading"      : "",
    // "activityicon"          : "../images/icons/hand_icon.png",    
    "mainActivityheading"    : "../images/pages/CONVERSATION.jpg",
    "select"                : "single", // single (or) multiple
    "shape"                 : "tickbox", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) tickbox
    "bgcolor"               : "none",
    "showicon"              : "true",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span style='color: white;'>Find in the story:</span>","That’s amazing!","I have got an amazing idea!"],
    "rightTextAudio"        : ["../audios/page_15/page_15/under.mp3","../audios/page_15/page_15/under.mp3","../audios/page_15/page_15/under.mp3"],
    "questions"             : [
        {
            "question"              : "<span style='color: rgb(0, 185, 242);'>What’s this?</span><br>It’s a playhouse.",
            "answer"                : [1],
            // "image"                 : "../images/pages/activities/AGW_1_SB_U11_P108.png",
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
			"numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"           : "",
                    "image"         : "../images/pages/activities/adv_2_1.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/adv_2_3.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                }                                 
            ]
        },
        {
            "question"              : "<span style='color: rgb(0, 185, 242);'>What’s in the backpack?</span><br>A book and a camera.",
            "answer"                : [1],
            // "image"                 : "../images/pages/activities/AGW_1_SB_U11_P108.png",
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
			"numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
				{
                    "text"          : "",
                    "image"         : "../images/pages/activities/adv_2_2.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/adv_2_4.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },                                  
            ]
        }
    ]
}