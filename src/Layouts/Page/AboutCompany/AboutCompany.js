import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
  return (
    <div>
      <div className="mt-3 px-3">
        <Heading /> {/* Заголовок и кнопка справа */}{" "}
      </div>
      <div className="d-flex row p-4">
        <div className="col p-5">
          <General />{" "}
          {/* Основная информация вроде названия, типа и телефона */}{" "}
        </div>
        <div className="col p-5 ">
          <Addresses /> {/* Список доступных адресов заведений */}{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
