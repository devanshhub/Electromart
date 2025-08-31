// utils/starRating.js
export const getStarImage = (rating) => {
  switch (parseInt(rating, 10)) {
    case 1:
      return "/image/Onestar.png";
    case 2:
      return "/image/Twostar.png";
    case 3:
      return "/image/Threestar.png";
    case 4:
      return "/image/Fourstar.png";
    case 5:
    default:
      return "/image/Fivestar.png";
  }
};
