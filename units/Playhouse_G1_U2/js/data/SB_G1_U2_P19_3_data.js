var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_36/demo.mp3',
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
  "numinrow"              :  [[1], [1], [1], [1], [1]],
  "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "90px"},
  "mainTitleAudio"        : "../audios/page_19/PLAYHOUSE_1_SB_UNIT_2_TRACK_04_01.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>3</span> Complete the conversation. Then practise <span class='blue_text'>Yes, she is / No, she isn't</span>",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/new/p19complete.mp3",
  "activitysubheading"    : "",
  "activityicon"          : "../images/icons/mouse_icon.png",
  "activityheading"       : "",
  "activityheading_audio" : "../audios/under.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "alphabet", 
  "numberstartfrom"       : "a",
  "options"      : [],
  "optionsAudios":[""],
  "defaultAnswer": [-1],
  "questions": [
    {
      "convImg":"../images/pages/page-4/conv-1.png",
      "textfront": "Is she your grandma?",
      "textback": "",
      "audio": "../audios/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p19_3_1.png",
      "order":"1",
      "answer": ["no she isnt"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "convImg":"../images/pages/page-4/conv-2.png",
      "textfront": "Is she your sister?",
      "textback": "",
      "audio": "../audios/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p19_3_2.png",
      "order":"2",
      "answer": ["yes she is"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
   
  ]
}