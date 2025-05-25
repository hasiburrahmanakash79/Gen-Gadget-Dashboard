
import { RiFingerprintLine } from "react-icons/ri";

const suggestions = [
  {
    title: "Focus on Math today",
    message:
      "Your recent test shows you need more practice with quadratic equations.",
  },
  {
    title: "Try a new study technique",
    message: "The Pomodoro method might help improve your focus. The Pomodoro method might help improve your focus.",
  },
  {
    title: "Review your weak areas",
    message:
      "Spend 20 minutes on vocabulary review before your next session.",
  },
];

export default function AiSuggestions() {
  return (
    <div className="">
      <div className="space-y-3">
        {suggestions.map((s, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3 rounded-xl border border-blue-100 bg-blue-50"
          >
            <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-full p-2 text-white">
              <RiFingerprintLine className="text-lg" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
