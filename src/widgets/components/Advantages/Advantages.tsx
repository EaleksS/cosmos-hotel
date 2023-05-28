import { FC } from "react";
import styles from "./Advantages.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Advantages: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.advantages} id="advantages">
      <Text type="h2" mt="60px" fw="500">
        Преимущества COSMOS ADLER HOTEL 4*
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/o1.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Расположение АК "COSMOS"
            <br />
            <br />
            Первая береговая линия рядом с Сириусом В ближайшем будущем здесь
            будет реализован федеральный проект "Южный риф" по развитию яхтинга
            на Черноморском побережье.
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/2.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Все удобства для отдыха
            <br />
            <br />
            Оборудованные пляжи, набережная с велосипедными дорожками, рестораны
            с гастрономическими изысками и уютные курортные кафе - все это в
            нескольких шагах от гостиничного комплекса.
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/o2.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Лучшее предложение
            <br />
            <br />
            Апартаменты с ремонтом Фирменный дизайн в соответствии с 4*
            Собственная парковая территория с лаунж зонами
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/4.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Всё под контролем
            <br />
            <br />
            Доверительное управление со стабильной выручкой
          </Text>
        </div>
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше информации на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
