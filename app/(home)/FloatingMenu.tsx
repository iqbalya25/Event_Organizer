const FloatMenu = () => {
  return (
    <div className="hidden lg:absolute w-11/12 lg:w-10/12 bottom-16 left-1/2 transform -translate-x-1/2 z-20 lg:flex lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 md:absolute bg-gray-800 bg-opacity-50 rounded-lg">
      <div className="flex-1 p-4 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg">
        <h3 className="font-bold">After Show Report #HM24</h3>
        <p>
          Discover the trade show in retrospect with exciting reports and
          impressions.
        </p>
      </div>
      <div className="flex-1 p-4 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg">
        <h3 className="font-bold">Exhibitors at #HM24</h3>
        <p>
          These exhibitors presented their products and innovations at HANNOVER
          MESSE 2024.
        </p>
      </div>
      <div className="flex-1 p-4 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg">
        <h3 className="font-bold">Events at #HM24</h3>
        <p>Missed the lecture? No problem! Watch the program on demand now.</p>
      </div>
    </div>
  );
};
export default FloatMenu;
