import { FC } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Preview: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.preview}>
      <img className={styles.img_preview} src="/img/12.jpg" alt="preview" />
      <div className={styles.bg}></div>

      <Text type="h1" color="#fff">
        Продажа апартаментов в <br /> Сочи / Адлер <br /> АК "COSMOS"
      </Text>
      <Text color="#fff" type="h3" mt="3rem">
        Для отдыха и инвестиций (сдачи в аренду и перепродажи) <br /> Первая
        береговая линия рядом с Сириусом. <br /> Покупка в рассрочку от
        застройщика.
      </Text>
      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить информацию на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
