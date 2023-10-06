import { styles } from "@/styles";

const TitleContent = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-6 my-10 ">
      <p className={`${styles.titleText}`}>{title}</p>
      {children}
    </div>
  );
};

export default TitleContent;
