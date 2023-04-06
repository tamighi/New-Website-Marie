import { Card } from "lib";

import styles from "./SlideInLeft.css";

export const About = () => {
  return (
    <div
      className={styles.slideInLeft}
      style={{
        animationDelay: "0.5s",
      }}
    >
      <Card>
        Bonjour a tous !<br /><br />
        {/*TODO: Add title typography*/}
        Pour vos récits, articles, mémoires, supports publicitaires, magazines,
        presse d’entreprise, sites Internet..., particuliers, professionnels,
        associations, collectivités, pensez à la correction professionnelle !
        Moins cher et moins chronophage qu’un stage de formation en orthographe,
        plus concret que des séances de coaching orthographique, plus fiable
        qu’un correcteur informatique…, avec la correction professionnelle,
        améliorez progressivement votre niveau, tout en éradiquant tout de suite
        les erreurs. De Paris, de France, de n’importe où dans le monde,
        écrivez-moi ! <br /> <br />« La critique, art aisé, se doit d’être
        constructive. » Boris Vian, écrivain, poète, parolier et chanteur
        français (1920-1959) « Quoi que vous écriviez, évitez la bassesse ; le
        style le moins noble a pourtant sa noblesse. » Nicolas Boileau, écrivain
        et poète français (1636-1711)
      </Card>
    </div>
  );
};
