var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_70/PLAYHOUSE_1_WB_UNIT_14_TRACK_03_01.mp3",
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
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="blue_text">1</span> Look and complete the sentences.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  image: "../images/pages/activities/2-img-1.png",
  imageposition: "front", // "front" (or) "back"
  defaultAnswer: 1,
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  questions: [
    {
      singleword: false,
      text: "It’s Tuesday. What’s the weather like? [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["It is cold"],
      alternateanswer: [["It's cold"]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "It’s Wednesday. What’s the weather like? [_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["It is windy"],
      alternateanswer: [["It's windy"]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "[_]? It is rainy.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["It's Monday. What's the weather like"],
      alternateanswer: [
        [
          "It is Monday. What is the weather like",
          "It's Monday. What is the weather like",
          "It is Monday. What's the weather like",
        ],
      ],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "[_] ?It is sunny and hot.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["It's Saturday. What's the weather like"],
      alternateanswer: [
        [
          "It is Saturday. What is the weather like",
          "It's Saturday. What is the weather like",
          "It's Saturday. What's the weather like",
        ],
      ],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
  ],
};
