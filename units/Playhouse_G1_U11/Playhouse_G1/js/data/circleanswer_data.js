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
    "<span class='blue_text'>1</span> Read and look. Colour the right answer",
  subTitleIcons: [],
  subTitleTextRight: "",

  select: "single", // single (or) multiple
  showicon: "true", // show tick/cross feedback icon per question
  questions: [
    {
      que: "Does he walk home?",
      audio: "",
      mainImg: "../images/pages/activities/2-img-1.png",

      answer: "2", // 1-based index of correct option
      options: [
        { text: "Yes, he does.", audio: "" },
        { text: "No, he doesn't.", audio: "" },
      ],
    },
    {
      que: " Do they ride a bus to school?",
      audio: "",
      mainImg: "../images/pages/activities/2-img-2.png",

      answer: "1",
      options: [
        { text: "Yes, they do.", audio: "" },
        { text: "No, they don't.", audio: "" },
      ],
    },
    {
      que: "Do you walk to the park?",
      audio: "",
      mainImg: "../images/pages/activities/2-img-3.png",

      answer: "2",
      options: [
        { text: "Yes, I do.", audio: "" },
        { text: "No, I don't.", audio: "" },
      ],
    },
    {
      que: "4 Do we take a train to the mall?",
      audio: "",
      mainImg: "../images/pages/activities/1-img-2.png",

      answer: "2",
      options: [
        { text: "Yes, I do.", audio: "" },
        { text: "No, I don't.", audio: "" },
      ],
    },
  ],
};
