var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_53/PLAYHOUSE_1_WB_UNIT_10_TRACK_09_01.mp3",
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
//  ****************************************** //
//  CircleAnswer - Data
//  ****************************************** //
var circleanswer_data = {
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleAudio: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "0px" },

  subTitleAudio: "",
  title_position: "inline", // 'inline' (or) 'under'
  subTitleTextLeft:
    "<span class='blue_text'>1</span> Colour the correct answer.",
  subTitleIcons: [],
  subTitleTextRight: "",

  select: "single", // single (or) multiple
  showicon: "true", // show tick/cross feedback icon per question
  mainImg: "../images/pages/activities/1-img-1.png",
  questions: [
    {
      que: "Where is the hospital?",
      audio: "",
      answer: "1", // 1-based index of correct option
      options: [
        { text: "It is in front of the school.", audio: "" },
        { text: "It is in front of the post office.", audio: "" },
      ],
    },
    {
      que: "Where is the post office?",
      audio: "",
      answer: "2",
      options: [
        { text: "It is in front of the mall.", audio: "" },
        { text: "It is next to the bakery.", audio: "" },
      ],
    },
    {
      que: "Where is the park?",
      audio: "",
      answer: "2",
      options: [
        { text: "It is in front of the petrol station.", audio: "" },
        { text: "It is next to the petrol station.", audio: "" },
      ],
    },
  ],
};
