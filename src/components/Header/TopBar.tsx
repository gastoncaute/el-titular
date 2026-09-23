import Clima from "../Main/Widgets/Clima";
import Dolar from "../Main/Widgets/Dolar";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-clima">
          <Clima />
        </div>
        <div className="top-bar-dolar">
          <Dolar />
        </div>
      </div>
    </div>
  );
}
