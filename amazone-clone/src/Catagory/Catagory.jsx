import CatagoryCard from "./CatagoryCard";
import { CatagoryaInfo } from "./catagoryFullinfos";
import classes from "./catagory.module.css";

const Catagory = () => {
  return (
    <section className={classes.catagory__container}>
      {CatagoryaInfo.map((infos, index) => (
        <CatagoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Catagory;
