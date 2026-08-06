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
var mcq_tick_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/adv_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_49/Playhouse_Adventures.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>2</span> Read and tick <span class='red_text'>✓</span>.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p49read.mp3",
    "select"                : "single", // single (or) multiple
    "shape"                 : "tickbox", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) tickbox
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> contest","<span class='red_text'>✓</span> I’m scared!","<span class='red_text'>✓</span> Don’t worry."],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "bgcolor"               : "none",
    "showicon"              : "true",
    "ontextaudioplay"       : '',
    "onimgaudioplay"        : '',
    "numbering"             : "alphabet", // "alphabet" (or) "number"
    "numberstartfrom"       : "a",
    "questions"             : [
        {
            "question"              : "What can Max do?",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
			"numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"           : "",
                    "image"         : "../images/pages/activities/p19_1_1.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/p19_1_2.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },                              
            ]
        },
        {
            "question"              : "Why is Max scared?",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
			"numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"           : "",
                    "image"         : "../images/pages/activities/p19_1_3.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/p19_1_4.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },                              
            ]
        },
    ]
}