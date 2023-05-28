import { FC } from "react";
import styles from "./About.module.scss";
import { Text } from "../../../shared";

export const About: FC = (): JSX.Element => {
  return (
    <div className={styles.about} id="about">
      <Text type="h2" mt="60px" fw="500">
        COSMOS ADLER HOTEL 4*
      </Text>

      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/o5.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Выгодная локация!
            <br />
            <br />
            До центра Сочи - 30 мин. До аэропорта Сочи - 5 мин До Ж/Д вокзала
            Адлер - 1 минута
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/4.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Комфорт!
            <br />
            <br />
            Большой подогреваемый круглогодичный бассейн с лаунж зоной
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/o6.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Первая береговая линия
            <br />
            <br />
            100 метров до моря Собственный пляж
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/o2.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Площади 16 - 45 м2
            <br />
            <br />С дизайнерским ремонтом.
          </Text>
        </div>
      </div>
    </div>
  );
};
