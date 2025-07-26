import React from "react";


const Home = () => {
  return (
    <div>
      <div className="my-10">
        <div
          style={{ fontFamily: "Merienda, cursive" }}
          className="text-7xl flex justify-center my-5 font-extrabold flex-col items-center gap-5"
        >
          <p className="bg-gradient-to-t from-slate-50 to-yellow-600 bg-clip-text text-transparent leading-relaxed overflow-visible">
            Igniting imagination from the void...
          </p>
        </div>
        <div className="flex justify-center ">
          <p
            style={{ fontFamily: "Satisfy, cursive" }}
            className="text-white text-center text-2xl leading-relaxed p-4 overflow-auto mx-20"
          >
            A developer crafting meaningful digital experiences with passion,
            precision, and a touch of imagination — transforming nothingness into creativity, user-driven solutions through creative
            problem-solving and clean, scalable code.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
