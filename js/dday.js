const clockChild = document.querySelector(".js-clock__child");
const clockThanksGiving = document.querySelector(".js-clock__thanksgiving");
const clockXmas = document.querySelector(".js-clock__xmas");
const clockNewYear = document.querySelector(".js-clock__newyear");

function countchild() {
  const child = new Date("2023-05-05T00:00:00");
  const today = new Date();

  const childCount = (child - today) / 1000;
  const childCountDay = Math.floor(childCount / (3600 * 24));
  const childCountHour = String(Math.floor((childCount / 3600) % 24)).padStart(
    2,
    "0"
  );
  const childCountMin = String(Math.floor((childCount / 60) % 60)).padStart(
    2,
    "0"
  );
  const childCountSec = String(Math.floor(childCount % 60)).padStart(2, "0");

  clockChild.innerText = `${childCountDay}일 ${childCountHour}시간 ${childCountMin}분 ${childCountSec}초`;
}
//어린이날

countchild();
setInterval(countchild, 1000);

function countThanksGiving() {
  const thanksGiving = new Date("2023-09-29T00:00:00");
  const today = new Date();

  const thanksGivingCount = (thanksGiving - today) / 1000;
  const thanksGivingCountDay = Math.floor(thanksGivingCount / (3600 * 24));
  const thanksGivingCountHour = String(
    Math.floor((thanksGivingCount / 3600) % 24)
  ).padStart(2, "0");
  const thanksGivingCountMin = String(
    Math.floor((thanksGivingCount / 60) % 60)
  ).padStart(2, "0");
  const thanksGivingCountSec = String(
    Math.floor(thanksGivingCount % 60)
  ).padStart(2, "0");

  clockThanksGiving.innerText = `${thanksGivingCountDay}일 ${thanksGivingCountHour}시간 ${thanksGivingCountMin}분 ${thanksGivingCountSec}초`;
}
// 추석

countThanksGiving();
setInterval(countThanksGiving, 1000);

function countXMas() {
  const christmas = new Date("2023-12-25T00:00:00");
  const today = new Date();

  const xMasCount = (christmas - today) / 1000;
  const xMasCountDay = Math.floor(xMasCount / (3600 * 24));
  const xMasCountHour = String(Math.floor((xMasCount / 3600) % 24)).padStart(
    2,
    "0"
  );
  const xMasCountMin = String(Math.floor((xMasCount / 60) % 60)).padStart(
    2,
    "0"
  );
  const xMasCountSec = String(Math.floor(xMasCount % 60)).padStart(2, "0");

  clockXmas.innerText = `${xMasCountDay}일 ${xMasCountHour}시간 ${xMasCountMin}분 ${xMasCountSec}초`;
}
// 크리스마스

countXMas();
setInterval(countXMas, 1000);

function countNewYear() {
  const newYear = new Date("2024-02-10T00:00:00");
  const today = new Date();

  const newYearCount = (newYear - today) / 1000;
  const newYearCountDay = Math.floor(newYearCount / (3600 * 24));
  const newYearCountHour = String(
    Math.floor((newYearCount / 3600) % 24)
  ).padStart(2, "0");
  const newYearCountMin = String(Math.floor((newYearCount / 60) % 60)).padStart(
    2,
    "0"
  );
  const newYearCountSec = String(Math.floor(newYearCount % 60)).padStart(
    2,
    "0"
  );

  clockNewYear.innerText = `${newYearCountDay}일 ${newYearCountHour}시간 ${newYearCountMin}분 ${newYearCountSec}초`;
}
// 설날

countNewYear();
setInterval(countNewYear, 1000);
