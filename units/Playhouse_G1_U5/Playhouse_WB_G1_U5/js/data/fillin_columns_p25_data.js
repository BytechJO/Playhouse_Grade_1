var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_25/PLAYHOUSE_1_WB_UNIT_5_TRACK_03_03.mp3',
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
    "numinrow"              : [[1,1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Write.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "rightImage"            : "../images/pages/activities/25-img.png",
    "rightText"             : ["<span class='right_title'>Think About It!</span>","Look at your class.","<span class='blue_text'>Who has got curly hair?</span>","<span class='blue_text'>Who has got brown eyes?</span>","<span class='blue_text'>Who is tall?</span>"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "defaultAnswer"         : 1,
    "leftList"              : '',
    "image"                 :"../images/pages/activities/img-40.png",
    "questions": [{
            "textfront": "I haven’t got short hair. &nbsp; <span class='blue_text'>+</span> &nbsp;  You haven’t got short hair. &nbsp; <span class='blue_text'>=</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["We haven’t got beards"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "She is not tall. &nbsp; <span class='blue_text'>+</span> &nbsp;  He is not tall.  &nbsp; <span class='blue_text'>=</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["They aren't tall"],
             "alternateanswer": [["They are not tall"]],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "You have got curly hair. &nbsp; <span class='blue_text'>+</span> &nbsp; You have got curly hair. &nbsp; <span class='blue_text'>=</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["You have got curly hair"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "I haven’t got long hair. &nbsp; <span class='blue_text'>+</span> &nbsp; You haven’t got long hair.  &nbsp; <span class='blue_text'>=</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["We haven't got long hair"],
             "alternateanswer": [["We have not got long hair"]],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
    ]
}