var current = 0;
var files = [
  "10602-30701-32409.jpg",  "5903-28131-2210.jpg",            "AF-O15540-F1-model_v1.jpg",  "bg2.jpg",
  "14928-31061-28650.jpg",  "615-19241-8524.jpg",             "AF-O75529-F1-model_v1.jpg",  "bg.jpg",
  "2368-25561-21437.jpg",   "6493-17402-29627.jpg",           "AF-P0DMR2-F1-model_v1.jpg",
  "3072-24342-15280.jpg",   "6907-30940-18049.jpg",           "AF-P12270-F1-model_v1.jpg",
  "4764-19042-5789.jpg",    "AF-A0A0G2JKD1-F1-model_v1.jpg",  "AF-Q5T764-F1-model_v1.jpg",
  "AF-O95970-F1-model_v1.jpg", "AF-P15941-F1-model_v1.png.jpg"
]
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
shuffle(files);