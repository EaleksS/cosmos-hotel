import { FC } from "react";
import styles from "./Investments.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Investments: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.investments} id="investments">
      <div className={styles.items}>
        <img src="/img/9.jpg" alt="img" />
        <div className={styles.title}>
          <img src="/o3.svg" alt="img" />
          <Text type="h2">
            Зарабатывайте на <br /> перепродаже номера
          </Text>
          <Text>
            Оставьте заявку и получите на WhatsApp точный расчет <br />
            инвестиционной привлекательности COSMOS ADLER HOTEL 4*
          </Text>
          <Button type="primary" onClick={setIsActive}>
            <TbMessageCircle2Filled />
            <Text fw="500">Получить инвестиционный расчет на WhatsApp</Text>
          </Button>
        </div>
      </div>
      <div className={styles.items} style={{ marginTop: "8rem" }}>
        <img src="/img/10.jpg" alt="img" />
        <div className={styles.title}>
          <img src="/o4.svg" alt="img" />
          <Text type="h2">
            Зарабатывайте на <br /> сдаче в аренду
          </Text>
          <Text>
            Гостиничный оператор COSMOS HOTEL GROUP возьмет на себя <br /> все
            заботы об организации аренды апартаментов и круглосуточному <br />
            обслуживанию клиентов.
          </Text>
          <Button type="primary" onClick={setIsActive}>
            <TbMessageCircle2Filled />
            <Text fw="500">Получить инвестиционный расчет на WhatsApp</Text>
          </Button>
        </div>
      </div>

      <div className={styles.img}>
        <img src="/img/11.jpg" alt="img" />
      </div>
    </div>
  );
};
