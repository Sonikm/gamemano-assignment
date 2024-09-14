
const Notifications = () => {
  return (
    <div className="absolute bg-black rounded-2xl p-4 w-[350px] right-4 top-14 px-6">
      <h3 className="mb-2 text-center text-lg text-white">Notifications</h3>
      <div className="flex flex-col justify-start gap-3">
        <div className="">
          <div className="text-primary">Successful Purchase</div>
          <p className="text-xs text-gray-300">
            🎉 Awesome! Your order is confirmed, and the loot will be on its way
            soon. Stay tuned for updates!
          </p>
        </div>
        <div className="">
          <div className="text-primary">Epic Sale!</div>
          <p className="text-xs text-gray-300">
            🔥 Gear up, gamer! Get up to 50% off on exclusive in-game items.
            Limited time offer – don’t miss out!
          </p>
        </div>
        <div className="">
          <div className="text-primary">Leave a Review</div>
          <p className="text-xs text-gray-300">
            ⭐ How did we do? Rate your latest purchase and help fellow players
            choose the best gear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
