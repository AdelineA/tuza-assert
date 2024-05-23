import Lock from "../../assets/Lock";
const LockCard = () => {
  return (
    <div className="border-4 border-red-400 w-40 h-40 flex flex-col items-center justify-center text-red-400 text-center">
      <Lock />
      <h1 className="mt-4">For Rwandan Diaspora</h1>
    </div>
  );
};

export default LockCard;
