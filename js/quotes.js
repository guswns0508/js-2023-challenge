const quotes = [
  {
    quote:
      "다시는 공을제가 못 던져도 좋습니다. 허락해 주십시오. 지금 나가게 해주십시오.",
    author: "- 염종석 -",
  },
  {
    quote:
      "시도도 하지 않고 포기하느니 시도하고 실패를 하는 게 낫다. 시도조차 하지 않으면 실패의 이유를 찾을 수 없기 때문이다.",
    author: "- 김시진 -",
  },
  {
    quote: "최동원이 있었기에 그를 넘고자 했던 것이 지금의 나를 만들었다.",
    author: "- 선동열 -",
  },
  {
    quote:
      "70퍼센트의 몸 컨디션으로도 100퍼센트의 모습을 보여줘야 한다. 그게 프로다.",
    author: "- 박경완 -",
  },
  {
    quote: "야구에 만약이란 없습니다. 만약이란 걸 붙이면 다 우승하죠.",
    author: "- 정수근 -",
  },
  {
    quote:
      "프로는 인내의 삶이다. 화려한 네온사인이 꺼진 뒤의 쓸쓸함을 곱씹을 줄 알아야 한다.",
    author: "- 이호준 -",
  },
  {
    quote: "No Fear. 두려워 하지 마라.",
    author: "- 제리 로이스터 -",
  },
  {
    quote:
      "진정한 노력은 결코 배신하지 않는다. 진정하지 않은 노력은 노력이 아니다.",
    author: "- 이승엽 -",
  },
  {
    quote: "팬들은 감동을 원하지 기록을 원하지 않는다.",
    author: "- 이상훈 -",
  },
  {
    quote: "할 수 있을 때 하지 않으면 하고 싶을 때 하지 못한다.",
    author: "- 최만호 -",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todayquotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayquotes.quote;
author.innerText = todayquotes.author;
