var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};
var fillin_data = {
  layout: 1,
  numinrow: [[1, 1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "-20px" },
  mainTitleAudio: "../audios/page_40/GRAMMAR.mp3",
  subTitleTextLeft: '<span class="blue_text">3</span> Write.',
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],
  subTitleAudio: "../audios/new/p40write.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "../images/pages/activities/img-40.png",
  questions: [
    {
      textfront:
        "I have got short hair. &nbsp; <span class='red_text'>+</span> &nbsp;  You have got short hair. &nbsp; <span class='red_text'>=</span>",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["We have got short hair"],

      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront:
        "She is tall. &nbsp; <span class='red_text'>+</span> &nbsp;  He is tall.  &nbsp; <span class='red_text'>=</span>",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["They are tall"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront:
        "You have got curly hair. &nbsp; <span class='red_text'>+</span> &nbsp; You have got curly hair. &nbsp; <span class='red_text'>=</span>",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["You have got curly hair"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront:
        "I haven’t got a beard. &nbsp; <span class='red_text'>+</span> &nbsp; You haven’t got a beard. &nbsp; <span class='red_text'>=</span>",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["We haven't got beards"],
       "alternateanswer": [["We have not got beards"]],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
