const NavBar = () => {
  return (
    <div className="w-11/12 h-[70px] mt-2 mx-auto rounded-2xl bg-graycartopacity flex justify-between items-center px-10 hover:bg-gpgreen">
        <img src='./assets/images/Logo.png' alt='./assets/images/Logo.png' className="object-contain h-[100px] bg-transparent"/>
      <div className="flex gap-x-20 bg-transparent">
        <button>Productes</button>
        <button>Ofertes</button>
        <button>Contacte</button>
        <button>Sobre Nosaltres</button>
      </div>
      <div className="bg-transparent">
        <img src="" alt="" />
        <button className="py-3 px-4 rounded-xl text-white text-xl bg-muggreen">Veure Catàlegs</button>
      </div>
    </div>
  );
};

export default NavBar;
