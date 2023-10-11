import { styles } from "@/styles";

const PositionAvailable = ({ cardImg, usd, title, description }) => {
  return (
    <div>
      <div className="flex">
        <p className={`${styles.titleText} my-4`}>Position available</p>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl shadow-black">
        <figure>
          <img src={cardImg} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-left">{description}</p>
          <div className="card-actions items-center justify-end">
            <div>${usd}USD</div>
            <div className="kbd ">Hourly wage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionAvailable;
