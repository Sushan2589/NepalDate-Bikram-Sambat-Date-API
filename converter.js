//Conversion logic of AD TO BS AND BS TO AD

import { adToBs, bsToAd } from "@inicrea/bikram-sambat-core";

//Checking validation of date YYYY-MM-DD
function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  const [year, month, day] = dateString.split("-").map(Number);

  
  if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  //actual date exist???
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === month - 1 &&
        date.getUTCDate() === day
    );

}

export function convertAdToBs(date) {
  if (!isValidDate(date)) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD.");
  }
  return adToBs(date);
}

export function convertBsToAd(date) {
  if (!isValidDate(date)) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD.");
  } 
    const [year, month, day] = date.split("-").map(Number);

    return bsToAd({ year, month, day });
}