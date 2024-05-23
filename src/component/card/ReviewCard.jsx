import Google from "../../assets/Google";
import Person from "../../assets/Person";

const ReviewCard = () => {
  return (
    <div className="border border-white w-1/4 py-5 px-2">
      <div className="flex justify-between">
        <div className="flex">
          <Person />
          <div className="flex flex-col">
            <h1 className="font-semibold text-base">Cora Meijer</h1>
            <span className="text-sm">2024-01-12</span>
          </div>
        </div>
        <div>
          <Google />
        </div>
      </div>
      <div className="pt-4">
        <p className="text-sm text-black font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <button className="text-orange-600 text-xl font-bold pt-4">
          Read More
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ReviewCard;
