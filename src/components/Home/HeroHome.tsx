import Button from "../Button/Button";

const HeroHome = () => {
  return (
    <div className="bg-darkgreen h-[100vh] flex justify-between">
      <div className="bg-darkgreen pt-[20%] text-center w-5/12 text-white flex flex-col gap-y-5 px-5">
        <h1>Plantant un futur més verd</h1>
        <p>
          Contacte amb el nostre servei personalitzat i fes realitat el teu
          projecte
        </p>
        <Button
          style={{ marginLeft: "auto", marginRight: "auto" }}
          variant="secondary"
        >
          Demanar pressupost
        </Button>
      </div>
      <div className="bg-gpgreen w-7/12 h-full">
        <img
          src="./assets/images/home/HeroPhoto.png"
          alt="./assets/images/home/HeroPhoto.png"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroHome;
