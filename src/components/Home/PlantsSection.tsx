import { plantsData } from "../../data/home";

const PlantsSection = () => {
  return (
    <div className="bg-white ">
      <h1 className="text-center py-8">Selecció de plantes que oferim</h1>
      <div className="bg-darkgreen h-[70vh] flex justify-between">
        <div className="bg-gpgreen w-8/12">
          <img
            src="./assets/images/home/PlantsSection.png"
            alt="./assets/images/home/PlantsSection.png"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-darkgreen w-4/12 text-white flex flex-col justify-center items-left gap-y-5 px-20">
          {plantsData.map((plant, index) => (
            <h3 key={index}>{plant.plant}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsSection;
