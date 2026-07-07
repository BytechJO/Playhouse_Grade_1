
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
var _data = {
  title: {
    grade: "Playhouse 2nd Edition",
    unit: "Grade 1",
  },
  header: {
    // "bgimage": "./images/ARC_2_1_SB_U1_header.png",
    bgcolor:
      "linear-gradient(180deg, rgba(0,190,255,1) 0%, rgba(255,255,255,0) 100%)",
    icon: "./images/unit-icon.png",

    grammer_icon: "./images/icons/gram-icon.png",
    grammer_link: "./views/slide_7.html",

    vocabulary_icon: "./images/icons/voc-icon.png",
    vocabulary_link: "./views/slide_11.html",

    poster_icon: "./images/icons/poster-icon.png",
    poster_link: "./views/playhouse_intro.html",

    homebutton: {
      visible: "yes", // yes (or) no
      link: "index.html",
    },

    // "rightIcon": "./images/unit-icon.png",
    audio: "./audios/page_10/PLAYHOUSE_1_SB_UNIT_1.mp3",
    title: {
      text: "My Classroom",
      color: "rgb(255, 255, 255);",
      "text-align": "center",
      "font-size": "44px",
      // "font-family": "RifficFree",
      // "letter-spacing": "4px",
      // "margin": "10px auto 1px",
      "text-shadow":
        "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
      "max-width": "894px",
      width: "60vw",
    },
    readingPageOne: {
      audio: "./audios/ARC_2_1_SB_U1_TitleAudio.mp3",
    },
  },
  body: {
    "background-color": "#fff",
  },
  footer: {
    unitno: "1",
    // "bgimage"    : "./images/AGW_1_SB_U15_footer.png",
    bgcolor:
      "linear-gradient(0deg, rgba(0,190,255,1) 0%, rgba(255,255,255,0) 100%)",
    buttons: [],
    filetoload: [],
    reviewbutton: {
      visible: "yes", // yes (or) no
      link: "Playhouse_Review_G1_U1/views/circle_word_in_sentence_img.html",
    },
    booksbutton: {
      workbook: {
        icon: "../images/icons/book-2.png",
        link: "../Playhouse_G1_U1/views/AGW_1_SB_U1_A1.html",
      },
      studentbook: {
        icon: "../images/icons/book-1.png",
        link: "./playhouse_intro.html",
      },
    },
  },
  subfooter: {
    activitybuttons: ["CCSS", "Link", "Homework", "Tips"],
    navigationbuttons: ["back", "next"],
    functionbuttons: ["check", "reset"],
  },
};

var _templateMediaList = {
  image: [],
  audio: [],
  video: [],
};
