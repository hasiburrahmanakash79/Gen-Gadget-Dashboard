import { useState } from "react";
import { FaFlag } from "react-icons/fa";

const questions = [
  {
    id: 1,
    level: "Easy",
    passage:
      "The scientist carefully recorded each change in the experiment, understanding that even the smallest detail could shift the outcome.",
    question: "What is the tone of the sentence above?",
    options: ["Casual", "Indifferent", "Precise", "Aggressive"],
    correctAnswer: 2,
  },
  {
    id: 2,
    level: "Medium",
    passage:
      "Despite the forecast, the team decided to proceed with the outdoor event.",
    question: "What does the passage imply?",
    options: [
      "The team expected bad weather",
      "The team canceled the event",
      "The team ignored the forecast",
      "The event was indoors",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    level: "Hard",
    passage: "Economic disparity often leads to increased social tension.",
    question: "Which concept does the sentence best illustrate?",
    options: [
      "Social mobility",
      "Wealth distribution",
      "Economic inequality",
      "Political instability",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    level: "Easy",
    passage:
      "The sun dipped below the horizon, casting long shadows over the field.",
    question: "Which literary device is used in this sentence?",
    options: ["Metaphor", "Personification", "Hyperbole", "Alliteration"],
    correctAnswer: 1,
  },
  {
    id: 5,
    level: "Medium",
    passage: "Although the engine was old, it still worked perfectly.",
    question: "What is the author's tone?",
    options: ["Nostalgic", "Sarcastic", "Appreciative", "Critical"],
    correctAnswer: 2,
  },
  {
    id: 6,
    level: "Hard",
    passage: "As the crisis deepened, leaders struggled to find a solution.",
    question: "What does this suggest about the situation?",
    options: [
      "The crisis was resolved",
      "Leaders had a plan",
      "The crisis was worsening",
      "The solution was obvious",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    level: "Easy",
    passage: "He ran as fast as lightning to catch the train.",
    question: "What literary device is used?",
    options: ["Simile", "Metaphor", "Hyperbole", "Alliteration"],
    correctAnswer: 2,
  },
  {
    id: 8,
    level: "Medium",
    passage:
      "Her dedication to the project was unwavering despite the setbacks.",
    question: "What character trait does this highlight?",
    options: ["Laziness", "Stubbornness", "Commitment", "Doubt"],
    correctAnswer: 2,
  },
  {
    id: 9,
    level: "Hard",
    passage:
      "The theory posits that gravity is a result of spacetime curvature.",
    question: "Which field of study is this related to?",
    options: ["Chemistry", "Biology", "Physics", "Geology"],
    correctAnswer: 2,
  },
  {
    id: 10,
    level: "Easy",
    passage: "He was over the moon when he got the job offer.",
    question: "What does 'over the moon' mean in this context?",
    options: ["Disappointed", "Extremely happy", "Surprised", "Anxious"],
    correctAnswer: 1,
  },
]

const WrittenExamTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState(new Set());

  const total = questions.length;
  const current = questions[currentIndex];

  const handleAnswer = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }));
  };

  const handleMark = () => {
    setMarked((prev) => new Set(prev).add(current.id));
  };

  const answered = Object.keys(answers).length;
  const markedCount = marked.size;
  const unanswered = total - answered;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Reading Exam</h2>
          <p className="text-gray-500 text-sm">
            Sharpen problem-solving and math skills.
          </p>
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded text-sm">
          ⏱ Timing: <span className="font-semibold">22:10 / 60:00 minutes</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-5 shadow-sm">
        <div className="mb-2 font-semibold">
          SAT Reading Question (Level - 1)
        </div>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          ></div>
        </div>

        <div className="text-sm text-gray-600 flex gap-4 mt-2">
          <span>
            ✅ Answered: <strong>{answered}</strong>
          </span>
          <span>
            ❌ Unanswered: <strong>{unanswered}</strong>
          </span>
          <span>
            ⚑ Marked for Review: <strong>{markedCount}</strong>
          </span>
        </div>

        <div className="mt-5 border rounded-lg p-5">
          <div className="flex justify-between items-center">
            <span className="bg-black text-white px-3 py-1 rounded text-xs font-medium">
              {current.level}
            </span>
            <button
              onClick={handleMark}
              className="text-gray-700 text-sm flex gap-2 items-center border px-3 py-1 rounded hover:bg-gray-100"
            >
              <FaFlag /> Mark for Review
            </button>
          </div>

          <h3 className="mt-4 text-lg font-semibold">Question {current.id}</h3>

          <p className="text-gray-700 text-sm my-3">
            <strong>Passage Excerpt:</strong> {current.passage}
          </p>

          <p className="mb-4">{current.question}</p>

          {current.options.map((option, i) => (
            <label
              key={i}
              className="block border rounded px-4 py-2 mb-2 cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name={`question-${current.id}`}
                className="mr-2"
                checked={answers[current.id] === i}
                onChange={() => handleAnswer(i)}
              />
              {String.fromCharCode(65 + i)}. {option}
            </label>
          ))}

          <div className="flex justify-between mt-6">
            <button
              className="bg-gray-100 px-4 py-2 rounded"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            >
              ← Previous
            </button>
            <div className="flex gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded text-gray-600"
                disabled={true}
              >
                Skip
              </button>
              <button
                className="bg-black text-white px-6 py-2 rounded"
                onClick={() =>
                  currentIndex < total - 1
                    ? setCurrentIndex((prev) => prev + 1)
                    : alert("Test Completed")
                }
              >
                {currentIndex < total - 1 ? "Next" : "Submit Test"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrittenExamTwo;