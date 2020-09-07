//SET CURRENT SEASON AND YEAR
let currentDate = new Date();
function getNextSeason() {
  switch (currentDate.getMonth()) {
    case 11:
    case 0:
    case 1:
      return 'SPRING';
    case 2:
    case 3:
    case 4:
      return 'SUMMER';
    case 5:
    case 6:
    case 7:
      return 'FALL';
    case 8:
    case 9:
    case 10:
      return 'WINTER';
    default:
      return 'ERROR';
  }
}
function getCurrentSeason() {
  switch (currentDate.getMonth()) {
    case 11:
    case 0:
    case 1:
      return 'WINTER';
    case 2:
    case 3:
    case 4:
      return 'SPRING';
    case 5:
    case 6:
    case 7:
      return 'SUMMER';
    case 8:
    case 9:
    case 10:
      return 'FALL';
    default:
      return 'ERROR';
  }
}
export const nextSeason = getNextSeason();
export const currentSeason = getCurrentSeason();
export const currentYear = currentDate.getFullYear();