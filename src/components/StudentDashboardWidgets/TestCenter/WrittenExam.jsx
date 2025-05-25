import { useState, useEffect } from "react";
import { FaFlag } from "react-icons/fa6";
import { RiArrowLeftLine } from "react-icons/ri";

const WrittenExam = () => {
  const questionSet = {
    level: "Level - 1",
    title: "Reading Comprehension",
    totalTime: 60, // in seconds (10 minutes)
    passage: `In the heart of a dense forest, a group of researchers discovered a new species of bird that mimics the sound of rainfall. The bird, named "Raincall Finch," uses its unique vocal ability to communicate and ward off predators. The discovery highlights the complexity of animal behavior and the importance of preserving natural habitats for scientific exploration.`,
    questions: [
      {
        id: 1,
        passage: "Although the engine was old, it still worked perfectly.",
        question: "What is the name of the newly discovered bird?",
        options: [
          "Raincall Finch",
          "Forest Warbler",
          "Rain Echo",
          "Mimic Thrush",
        ],
        correctAnswer: "Raincall Finch",
      },
      {
        id: 2,
        passage:
          "Her dedication to the project was unwavering despite the setbacks.",
        question: "What sound does the bird mimic?",
        options: ["Other birds", "Rainfall", "Wind", "Insects"],
        correctAnswer: "Rainfall",
      },
      {
        id: 3,
        passage: "Although the engine was old, it still worked perfectly.",
        question: "Why does the bird mimic this sound?",
        options: [
          "To attract mates",
          "To locate food",
          "To communicate and ward off predators",
          "To sing in harmony with others",
        ],
        correctAnswer: "To communicate and ward off predators",
      },
      {
        id: 4,
        passage:
          "The theory posits that gravity is a result of spacetime curvature.",
        question: "Where was the bird discovered?",
        options: [
          "In a desert",
          "In a rainforest",
          "In a dense forest",
          "In a mountain region",
        ],
        correctAnswer: "In a dense forest",
      },
      {
        id: 5,
        passage: "Although the engine was old, it still worked perfectly.",
        question: "What does the discovery emphasize?",
        options: [
          "The need for more zoos",
          "The complexity of animal behavior and habitat conservation",
          "How birds evolve slowly",
          "That all animals mimic sounds",
        ],
        correctAnswer:
          "The complexity of animal behavior and habitat conservation",
      },
      {
        id: 6,
        passage: "Although the engine was old, it still worked perfectly.",
        question: "What is one feature of the Raincall Finch?",
        options: [
          "Bright feathers",
          "Mimicking rainfall",
          "Large wingspan",
          "Fast flying",
        ],
        correctAnswer: "Mimicking rainfall",
      },
      {
        id: 7,
        passage: "Although the engine was old, it still worked perfectly.",
        question: "How might this bird affect predator behavior?",
        options: [
          "It may attract them",
          "It confuses predators",
          "It has no effect",
          "It flies away quickly",
        ],
        correctAnswer: "It confuses predators",
      },
      {
        id: 8,
        passage: "Although the engine was old, it still worked perfectly.",
        question: "Why is preserving natural habitats important?",
        options: [
          "For hunting",
          "For tourism only",
          "For scientific exploration and biodiversity",
          "For building more cities",
        ],
        correctAnswer: "For scientific exploration and biodiversity",
      },
      {
        id: 9,
        passage: "Although the engine was old, it still worked perfectly.",
        question: "What is likely the researchers' field of study?",
        options: ["Physics", "Astronomy", "Biology or Zoology", "Geology"],
        correctAnswer: "Biology or Zoology",
      },
      {
        id: 10,
        passage:
          "Her dedication to the project was unwavering despite the setbacks.",
        question: "What does this passage mostly focus on?",
        options: [
          "Bird migration",
          "A newly found bird and its behavior",
          "The weather in forests",
          "Endangered species",
        ],
        correctAnswer: "A newly found bird and its behavior",
      },
    ],
  };

  const { totalTime, questions, level } = questionSet;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [marked, setMarked] = useState([]);
  const [timeLeft, setTimeLeft] = useState(totalTime);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const total = questions.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (option) => {
    const updated = [...answers];
    updated[currentQuestionIndex] = option;
    setAnswers(updated);
  };

  const handleMark = () => {
    if (marked.includes(currentQuestionIndex)) {
      setMarked(marked.filter((i) => i !== currentQuestionIndex));
    } else {
      setMarked([...marked, currentQuestionIndex]);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (timeLeft <= 0) {
      alert("⏰ Time is over! You can't submit now.");
      return;
    }
    if (isSubmitted) return;

    const answeredCount = answers.filter((a) => a !== null).length;
    const unansweredCount = questions.length - answeredCount;
    alert(
      `Submitted! Answered: ${answeredCount}, Unanswered: ${unansweredCount}`
    );
    setIsSubmitted(true);
  };

  // const handleSubmit = () => {
  //   const answeredCount = answers.filter((a) => a !== null).length;
  //   const unansweredCount = questions.length - answeredCount;
  //   alert(
  //     `Submitted! Answered: ${answeredCount}, Unanswered: ${unansweredCount}`
  //   );
  // };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center gap-2 mb-4">
        <div>
          <h2 className="md:text-2xl font-bold">Reading Exam</h2>
          <p className="text-gray-500 text-sm hidden md:block">
            Sharpen problem-solving and math skills.
          </p>
        </div>
        <div className="w-full md:w-72">
          <div className="bg-gray-100 px-4 py-2 rounded-t text-sm font-medium">
            ⏱ Time Left:
            <span className="font-semibold">
              {formatTime(timeLeft)} / {formatTime(totalTime)}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-b overflow-hidden">
            <div
              className="h-2 bg-gradient-to-b from-red-300 to-red-500 "
              style={{
                width: `${((totalTime - timeLeft) / totalTime) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* <div className="bg-gray-100 px-4 py-2 rounded text-sm">
          ⏱ Time Left:{" "}
          <span className="font-semibold">
            {formatTime(timeLeft)} / {formatTime(totalTime)}
          </span>
        </div> */}
      </div>

      <div className="border border-base-300 rounded-2xl p-5">
        <div className="flex justify-between items-center mb-2">
          <div className="my-2 font-semibold">
            SAT Reading Question ({level})
          </div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className="p-2 bg-gradient-to-b from-blue-400 to-blue-500 text-sm text-white rounded-lg"
          >
            Submit Test
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
          <div
            className="bg-gradient-to-b from-blue-400 to-blue-500 h-3 rounded-full"
            style={{
              width: `${((currentQuestionIndex + 1) / total) * 100}%`,
            }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>
            Question {currentQuestionIndex + 1} of {total}
          </span>
          <span>
            Answered: {answers.filter((a) => a !== null).length} • Marked:{" "}
            {marked.length}
          </span>
        </div>

        <div className="md:grid grid-cols-4 gap-6 mt-5">
          {/* Main Panel */}
          <div className="md:col-span-3 space-y-4 md:border rounded-2xl md:p-5 border-base-300">
            <div className="flex justify-between items-center">
              <span className="bg-black text-white px-3 py-2 rounded-lg text-xs font-medium">
                {level}
              </span>
              <button
                onClick={handleMark}
                className="text-gray-700 text-xs flex gap-2 items-center border border-gray-200 px-3 py-2 rounded-lg hover:bg-base-200 cursor-pointer"
              >
                <FaFlag />{" "}
                {marked.includes(currentQuestionIndex)
                  ? "Unmark"
                  : "Mark for Review"}
              </button>
            </div>

            <div>
              <h3 className="mt-4 text-xl text-gray-600 font-semibold">
                Question {currentQuestionIndex + 1}
              </h3>
            </div>

            <div className="bg-gray-50 shadow-sm p-4 rounded text-gray-800">
              <h2 className="text-lg font-bold mb-2">Passage</h2>
              <p>{currentQuestion.passage}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">
                Q{currentQuestionIndex + 1}: {currentQuestion.question}
              </h3>
              <div className="space-y-2">
                {currentQuestion.options.map((opt, i) => (
                  <label
                    key={i}
                    className={`flex items-center gap-2 p-2 border border-gray-300 shadow rounded hover:bg-blue-50 hover:cursor-pointer ${
                      answers[currentQuestionIndex] === opt
                        ? "bg-blue-100 border-blue-500"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      disabled={isSubmitted}
                      name={`question-${currentQuestionIndex}`}
                      value={opt}
                      checked={answers[currentQuestionIndex] === opt}
                      onChange={() => handleAnswer(opt)}
                      className="form-radio text-blue-500"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="md:flex justify-between items-center gap-3 mt-4">
              <button
                onClick={handlePrev}
                className="md:px-10 md:py-2 p-2 bg-base-200 border border-gray-300 hover:bg-gray-200 shadow rounded-xl flex items-center gap-1"
              >
                <RiArrowLeftLine /> Previous
              </button>
              <div className="flex gap-2 md:gap-4 mt-2 md:mt-0">
                <button
                  onClick={handleSkip}
                  className="md:px-10 md:py-2 p-2 bg-base-300  hover:bg-gray-200 shadow rounded-xl"
                >
                  Skip
                </button>
                {currentQuestionIndex === questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitted}
                    className="md:px-10 md:py-2 p-2 bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-xl"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="md:px-10 md:py-2 p-2 bg-black text-white rounded-xl"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Navigator Panel */}
          <div className="w-full border border-base-300 p-4 rounded-2xl space-y-4 md:mt-0 mt-5 md:col-span-1">
            <div className="flex items-center justify-between gap-3 mb-4 border-b border-base-300 pb-2">
              <h2 className="font-semibold">Question Navigator</h2>
              <button className="bg-black/70 py-1 px-2 text-sm text-white rounded">
                {answers.filter((a) => a !== null).length} of {total} Answered
              </button>
            </div>
            <div className="grid md:grid-cols-7 grid-cols-5 gap-2 border-b border-base-300 pb-4">
              {questions.map((_, index) => {
                const isAnswered = answers[index] !== null;
                const isMarked = marked.includes(index);
                const isCurrent = index === currentQuestionIndex;

                let style = "border border-gray-400";
                if (isMarked) style = "bg-blue-100 text-black";
                if (isAnswered) style = "bg-gray-200";
                if (isCurrent) style = "bg-black text-white";

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`md:w-10 h-10 rounded hover:cursor-pointer ${style}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="text-sm text-gray-700 space-y-4 mt-4 grid grid-cols-2">
              <div>
                <span className="border rounded px-1 w-2 h-2">
                  {answers.filter((a) => a === null).length}
                </span>{" "}
                Unanswered
              </div>
              <div>
                <span className="border rounded px-1 w-2 h-2">
                  {answers.filter((a) => a !== null).length}
                </span>{" "}
                Answered{" "}
              </div>
              <div>
                <span className="border rounded px-1 w-2 h-2">
                  {marked.length}
                </span>{" "}
                Marked for review
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrittenExam;
