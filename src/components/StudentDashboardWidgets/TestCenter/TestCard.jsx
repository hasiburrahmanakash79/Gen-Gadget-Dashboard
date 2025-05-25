import useModal from "../../UI/EexamModal/useModal";
import SharedModal from "../../UI/EexamModal/SharedModal";

const testCards = [
  {
    title: "Reading Test",
    count: 22,
  },
  {
    title: "Written Test",
    count: 9,
  },
  {
    title: "Math Test",
    count: 16,
  },
  {
    title: "Essay Test",
    count: 16,
  },
];

export default function TestCard() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {testCards.map((card, index) => (
          <div
            key={index}
            className="border border-base-300 rounded-2xl p-4"
          >
            <div className="border-b border-base-300 pb-3 text-gray-500 flex items-center justify-between mb-5">
              <h4 className="text-lg ">{card.title}</h4>
              <select
                className="text-sm px-2 py-1 rounded-md outline-none text-gray-700"
                name="Weekly"
                id=""
              >
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="text-3xl font-bold text-center text-gray-900 mb-4">
              {card.count}
            </div>
            <button
              className="bg-black text-white rounded-md px-4 py-2 w-full text-sm hover:bg-gray-800"
              onClick={openModal}
            >
              Start Today’s Plan
            </button>
            <SharedModal isOpen={isOpen} onClose={closeModal} />
          </div>
        ))}
      </div>
    </div>
  );
}
