import React, { useState } from "react";
import "./style.css";
import ProgressBar from "./ProgressBar";
import StarRatings from "react-star-ratings";

const QuizLayout = (props) => {
  const quizQuestions = [
    {
      category: "Entertainment Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "What was the name of the hero in the 80s animated video game Dragons Lair",
      correct_answer: "Dirk the Daring",
      incorrect_answers: [
        "Arthur",
        "Sir Toby Belch",
        "Guy of Gisbourne",
        "Dirk The Daring",
      ],
    },
    {
      category: "Animals",
      type: "multiple",
      difficulty: "easy",
      question: "What is the scientific name for modern day humans",
      correct_answer: "Homo Sapiens",
      incorrect_answers: [
        "Homo Ergaster",
        "Homo Sapiens",
        "Homo Erectus",
        "Homo Neanderthalensis",
      ],
    },
    {
      category: "Entertainment Books",
      type: "multiple",
      difficulty: "hard",
      question: "What is Ron Weasleys middle name",
      correct_answer: "Bilius",
      incorrect_answers: ["Arthur", "John", "Bilius", "Dominic"],
    },
    {
      category: "Entertainment Comics",
      type: "multiple",
      difficulty: "easy",
      question: "Who is the creator of the comic series The Walking Dead",
      correct_answer: "Robert Kirkman",
      incorrect_answers: [
        "Robert Kirkman",
        "Stan Lee",
        "Malcolm Wheeler-Nicholson",
        "Robert Crumb",
      ],
    },
    {
      category: "Entertainment Board Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "At the start of a standard game of the Monopoly if you throw a double six which square would you land on",
      correct_answer: "Electric Company",
      incorrect_answers: [
        "Water Works",
        "Chance",
        "Electric Company",
        "Community Chest",
      ],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "What is the capital of Jamaica",
      correct_answer: "Kingston",
      incorrect_answers: [
        "Rio de Janeiro",
        "Kingston",
        "Dar es Salaam",
        "Kano",
      ],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "When did Jamaica recieve its independence from England ",
      correct_answer: "1962",
      incorrect_answers: ["1492", "1963", "1987", "1962"],
    },
    {
      category: "Animals",
      type: "boolean",
      difficulty: "easy",
      question: "Kangaroos keep food in their pouches next to their children.",
      correct_answer: "False",
      incorrect_answers: ["False", "True"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "In 2013 how much money was lost by Nigerian scams",
      correct_answer: "12.7 Billion",
      incorrect_answers: [
        "12.7 Billion",
        "95 Million",
        "956 Million",
        "2.7 Billion",
      ],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question:
        "How old was Lyndon B. Johnson when he assumed the role of President of the United States",
      correct_answer: "55",
      incorrect_answers: ["50", "55", "60", "54"],
    },
    {
      category: "Entertainment Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "In World of Warcraft lore who organized the creation of the Paladins",
      correct_answer: "Alonsus Faol",
      incorrect_answers: [
        "Uther the Lightbringer",
        "Alexandros Mograine",
        "Alonsus Faol",
        "Sargeras The Daemon Lord",
      ],
    },
    {
      category: "Entertainment Video Games",
      type: "boolean",
      difficulty: "medium",
      question: "In the game Subnautica a Cave Crawler will attack you.",
      correct_answer: "True",
      incorrect_answers: ["False", "True"],
    },
    {
      category: "Entertainment Japanese Anime %26 Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the device that allows for infinite energy in the anime Dimension W",
      correct_answer: "Coils",
      incorrect_answers: ["Wires", "Collectors", "Tesla", "Coils"],
    },
    {
      category: "Entertainment Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of Cream the Rabbits mom in the Sonic the Hedgehog series",
      correct_answer: "Vanilla",
      incorrect_answers: ["Vanilla", "Peach", "Strawberry", "Mint"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "easy",
      question:
        "These two countries held a commonwealth from the 16th to 18th century.",
      correct_answer: "Poland and Lithuania",
      incorrect_answers: [
        "Hutu and Rwanda",
        "Poland and Lithuania",
        "North Korea and South Korea",
        "Bangladesh and Bhutan",
      ],
    },
    {
      category: "Entertainment Television",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which of these voices wasnt a choice for the House AI in The Simpsons Treehouse of Horror short House of Whacks",
      correct_answer: "George Clooney",
      incorrect_answers: [
        "Matthew Perry",
        "Dennis Miller",
        "George Clooney",
        "Pierce Brosnan",
      ],
    },
    {
      category: "Entertainment Music",
      type: "multiple",
      difficulty: "medium",
      question:
        "From which album is the Gorillaz song On Melancholy Hill featured in",
      correct_answer: "Plastic Beach",
      incorrect_answers: ["Demon Days", "Humanz", "The Fall", "Plastic Beach"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "Scotland voted to become an independent country during the referendum from September 2014.",
      correct_answer: "False",
      incorrect_answers: ["False", "True"],
    },
    {
      category: "Entertainment Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "In Left 4 Dead which campaign has the protagonists going through a subway in order to reach a hospital for evacuation",
      correct_answer: "No Mercy",
      incorrect_answers: [
        "Subway Sprint",
        "No Mercy",
        "Hospital Havoc",
        "Blood Harvest",
      ],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "hard",
      question:
        "What was the last colony the UK ceded marking the end of the British Empire",
      correct_answer: "Hong Kong",
      incorrect_answers: ["India", "Australia", "Ireland", "Hong Kong"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [userAns, setUserAns] = useState("");
  const [isClicked, setIsClicked] = useState("none");
  const [isDisable, setIsDisable] = useState(false);
  const [nextClick, setNextClick] = useState(false);
  const [progressPer, setProgressPer] = useState(0);
  const [rating, setRating] = useState(3);
  const [maxScore, setMaxScore] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQues = (e) => {
    const nextQuestion = currentQuestion + 1;
    const difficulty = quizQuestions[currentQuestion].difficulty;

    if (nextQuestion < quizQuestions.length) setCurrentQuestion(nextQuestion);
    if (difficulty === "easy") setRating(1);
    if (difficulty === "medium") setRating(2);
    if (difficulty === "hard") setRating(3);
    if (progressPer === 100) setNextClick(true);

    if (userAns === correctAnswer) setMaxScore(maxScore + 5);

    if (userAns !== correctAnswer) setScore(score + 5);

    setCorrectAnswer(null);
    setUserAns(null);
    setIsDisable(false);
  };

  const handleAnswerCheck = (e, i) => {
    const currentValue = e.target.value;
    setCorrectAnswer(
      quizQuestions[currentQuestion].correct_answer.toLowerCase()
    );

    const myScore = (i / 20) * 100;
    console.log(i);
    setUserAns(currentValue.toLowerCase());
    setProgressPer(progressPer + 5);
    setIsClicked("block");
    setIsDisable(true);
  };

  // const allAns = quizQuestions[currentQuestion].incorrect_answers;
  // shuffleAns = allAns.sort(() => 0.5 - Math.random());
  return (
    <div className="container">
      <ProgressBar per={progressPer} />
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/ 20
        </div>
        <div className="question-category">
          <span>{quizQuestions[currentQuestion].category}</span>
        </div>
        <div>
          <StarRatings
            rating={rating}
            starDimension="15px"
            className="rating"
            numberOfStars={3}
            starSpacing="5px"
          />
        </div>
        <div className="question-text">
          {quizQuestions[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {quizQuestions[currentQuestion].incorrect_answers.map((options, i) => {
          return (
            <div key={i} className="wrap-buttons">
              <button
                className="button"
                onClick={(e) => handleAnswerCheck(e, i)}
                value={options}
                disabled={isDisable}
              >
                {options}
              </button>
            </div>
          );
        })}
      </div>
      {userAns && (
        <div style={{ display: isClicked }}>
          {userAns === correctAnswer ? (
            <div className="correct-ans">Correct!</div>
          ) : (
            <div className="correct-ans">Incorrect!</div>
          )}
        </div>
      )}
      <div className="next-ques">
        <button
          onClick={handleNextQues}
          disabled={nextClick}
          className="button"
        >
          Next Question
        </button>
      </div>
      <div className="score-container">
        <div className="scores">
          <div>Score: {`${score}%`}</div>
          <div>Max Score: {`${maxScore}%`}</div>
        </div>
        <div className="score-bar-container">
          <div className="c" style={{ width: `${maxScore}%` }}>
            &nbsp;
          </div>
          <div className="b" style={{ width: `${score}%` }}>
            &nbsp;
          </div>
          <div className="a" style={{ width: "5%" }}>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;
