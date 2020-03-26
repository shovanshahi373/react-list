export const getTime = stampedTime => {
  let time = {};
  let currentTime = Date.now();
  let timeElapsed = (currentTime - stampedTime) / 1000;
  if (timeElapsed < 60) {
    time.msg = Math.floor(timeElapsed) + " seconds ago";
    time.runTime = 1000;
  } else if (timeElapsed >= 60 && timeElapsed < 3600) {
    time.msg = Math.floor(timeElapsed / 60) + " minutes ago";
    time.runTime = 60000;
  } else if (timeElapsed >= 3600 && timeElapsed < 86400) {
    time.msg = Math.floor(timeElapsed / (60 * 60)) + " hours ago";
    time.runTime = 3600000;
  } else if (timeElapsed >= 86400 && timeElapsed < 604800) {
    time.msg = Math.floor(timeElapsed / (60 * 60 * 24)) + " days ago";
    time.runTime = 86400000;
  } else if (timeElapsed >= 604800 && timeElapsed < 2419200) {
    time.msg = Math.floor(timeElapsed / (60 * 60 * 24 * 7)) + " months ago";
    time.runTime = 604800000;
  } else {
    time.msg = "a long time ago";
    time.runTime = "";
  }
  // console.log(time);
  return time;
};

export const arrangeList = arr => {
  const compArr = arr.filter(el => el.completed);
  const pendArr = arr.filter(el => !el.completed);
  return [...pendArr, ...compArr];
};
