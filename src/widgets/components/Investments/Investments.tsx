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
        <img
          src="https://i.1.creatium.io/4f/e8/38/6426af8d91e6147e3f26a1cb13b660f896/prezentaciya_kosmos_3_18_pdf_1.jpg"
          alt="img"
        />
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
        <img
          src="https://i.1.creatium.io/40/b3/7d/5fc15f72263f51e9e0ce68f9c324a3230b/prezentaciya_kosmos_3_19_pdf_1.jpg"
          alt="img"
        />
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
        <img
          src="https://i.1.creatium.io/90/83/41/b967416c98644580995a8744eeba2dbaae/prezentaciya_kosmos_3_4_pdf_1_1.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};
