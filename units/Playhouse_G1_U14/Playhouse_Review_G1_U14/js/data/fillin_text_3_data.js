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
  "numinrow"              : [[1]],
  "mainTitle"             : "",
  "mainTitleIcon"         : "",
  "mainTitleIconPos"      : {"right": "-30px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>4</span> Rewrite the sentences using the contraction.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/under.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "number", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "image"                 : "",
  "options"               : [],
  "optionsAudios"         : [],
  "questions": 
  [
    {
      "singleword": false,
      "text": "<b>1</b> &nbsp; The weather is hot. [_]",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["Is the weather hot?"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<b>2</b> &nbsp; Kim is seven years old. [_]",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["Is Kim seven years old?"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<b>2</b> &nbsp; They are your friends. [_]",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["Are they your friends?"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 300,
      "type": "text", // text (or) number
    },
  ]
}