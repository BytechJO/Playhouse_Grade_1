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
var fillin_data = {    
    "layout"                : 1,
    "numinrow"              : [[1,1,1,1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "80psx"},
    "mainTitleAudio"        : "../audios/page_107/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>1</span> Say. Point, ask and answer. Then write.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p107say.mp3",
    "defaultAnswer"         : 1,
    "leftList"              : '',
    "image"                 : "",
    "questions": [
      {
            "textfront": "",
            "textend": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/4-img-1.png",
            "answer": ["It is snowy"],
            "alternateanswer": [[]],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "textend": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/4-img-2.png",
            "answer": ["It's sunny"],
            "alternateanswer": [["It is sunny"]],
            // "answer2":["It is sunny"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "textend": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/4-img-3.png",
            "answer":["It's windy"],
            "alternateanswer": [["It is windy"]],
            // "answer2": ["It is windy"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
          "textfront": "",
          "textend": "",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/4-img-4.png",
          "answer": ["It's cold and snowy"],
          "alternateanswer": [["It's cold","It's snowy"]],
          // "answer2":["It's cold","It's snowy"],
          "strictcase": "no", // yes (or) no              
          "type": "text", // text (or) number
      },
      {
          "textfront": "",
          "textend": "",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/4-img-5.png",
          "answer": ["It's hot"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no 
          "type": "text", // text (or) number
      },
      {
          "textfront": "",
          "textend": "",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/4-img-6.png",
          "answer": ["It's rainy."],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no
          "type": "text", // text (or) number
      },
    ]
}