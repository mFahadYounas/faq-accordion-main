type qnaType = {
  question: string;
  answer: string;
};

const allQna: qnaType[] = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: `Frontend Mentor offers realistic coding challenges to help
             developers improve their frontend coding skills with projects in
             HTML, CSS, and JavaScript. It's suitable for all levels and ideal
             for portfolio building.`,
  },
  {
    question: "Is Frontend Mentor free?",
    answer: `Yes, Frontend Mentor offers both free and premium coding
             challenges, with the free option providing access to a range of
             projects suitable for all skill levels.`,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. 
             It's an excellent way to showcase your skills to potential employers!`,
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: `The best place to get help is inside Frontend Mentor's Discord community. 
             There's a help channel where you can ask questions
             and seek support from other community members.`,
  },
];

const makeQna = (qText: string, aText: string) => {
  const accordionBody = document.querySelector(".accordion-body");
  const qna = document.createElement("li");
  qna.classList.add("qna");
  // question section
  const question = document.createElement("section");
  question.classList.add("question");
  const qButton = document.createElement("button");
  qButton.textContent = qText;
  const expandSpan = document.createElement("span");
  const expandImg = document.createElement("img");
  expandImg.src = "./src/assets/images/icon-plus.svg";
  expandImg.alt = "plus icon";
  expandSpan.appendChild(expandImg);
  qButton.appendChild(expandSpan);
  question.appendChild(qButton);
  qna.appendChild(question);
  accordionBody?.appendChild(qna);
  // answer section
  const answer = document.createElement("section");
  answer.classList.add("answer");
  answer.classList.add("hidden");
  const answerParagraph = document.createElement("p");
  answerParagraph.innerHTML = aText;
  answer.appendChild(answerParagraph);
  qna.appendChild(answer);
};

allQna.forEach((qna) => {
  makeQna(qna.question, qna.answer);
});

const questionButton = document.querySelectorAll(".question > button");

const answer = document.querySelectorAll(".answer");

const plusMinusImg = document.querySelectorAll(
  ".question > button > span > img"
);

let answerState: boolean[] = new Array(questionButton.length).fill(false);

questionButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (!answerState[i]) {
      answer[i].classList.remove("hidden");
      plusMinusImg[i].setAttribute("src", "./src/assets/images/icon-minus.svg");
      answerState[i] = true;
    } else {
      answer[i].classList.add("hidden");
      answerState[i] = false;
      plusMinusImg[i].setAttribute("src", "./src/assets/images/icon-plus.svg");
    }
  });
});
