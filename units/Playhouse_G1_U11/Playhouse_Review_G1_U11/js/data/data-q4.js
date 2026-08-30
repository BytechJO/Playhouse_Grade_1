// data-q4.js — نفس pattern بتاع mcq_data
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
var lookcirclewrite_data = {
    "layout"            : 1,
    "mainTitle"         : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"     : "",
    "mainTitleIconPos"  : { "right": "-18px" },
    "mainTitleAudio"    : "../audios/under.mp3",
    "subTitleTextLeft"  : "<span class='blue_text'>4</span> Look, circle and write.",
    "subTitleTextRight" : "",
    "subTitleIcons"     : [],
    "subTitleAudio"     : "../audios/under.mp3",

    "questions" : [
        {
            "image"   : "../images/pages/activities/Asset_10.png",
            "options" : ["dr", "gr"],
            "answer"  : 1,          // index 0-based → "dr" هو الصح
            "word"    : "dress",    // الكلمة الكاملة الصحيحة
            "audio"   : "../audios/under.mp3"
        },
        {
            "image"   : "../images/pages/activities/Asset_11.png",
            "options" : ["tr", "cr"],
            "answer"  : 2,          // "cr"
            "word"    : "crab",
            "audio"   : "../audios/under.mp3"
        },
        {
            "image"   : "../images/pages/activities/Asset_12.png",
            "options" : ["tr", "dr"],
            "answer"  : 1,          // "tr"
            "word"    : "truck",
            "audio"   : "../audios/under.mp3"
        }
    ]
};


 
// activities.js (الملف العام) بيتوقع وجود هاد المتغيّر عند كبسة
// "Start Again" (initActivity(_activity_json)) - حتى لو نشاطنا الخاص
// (lookcirclewrite.js) ما بيستخدم قيمته فعليًا، لازم يكون معرّف
// عشان ما يطلع ReferenceError
var _activity_json = lookcirclewrite_data;