import { FC } from "react";
import styles from "./Gallery.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Gallery: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.gallery} id="gallery">
      <Text type="h2" mt="60px" fw="500">
        COSMOS ADLER HOTEL 4*
      </Text>

      <div className={styles.items}>
        <img className={styles.item} src="/img/2.jpg" alt="jpg" />
        <img className={styles.item} src="/img/3.jpg" alt="gif" />
        <img className={styles.item} src="/img/4.jpg" alt="gif" />
        <img className={styles.item} src="/img/5.jpg" alt="gif" />
        <img className={styles.item} src="/img/6.jpg" alt="gif" />
        <img className={styles.item} src="/img/7.jpg" alt="gif" />
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше фото на WhatsApp</Text>
        </Button>
      </div>

      <div className={styles.img}>
        <img className={styles.img_preview} src="/img/8.jpg" alt="preview" />
        <div className={styles.bg}></div>

        <Text type="h2" color="#fff" fw="700">
          Ваши апартаменты не будут <br /> простаивать. <br />
          Доходность 30% годовых на росте <br /> цен + сдачи в аренду
        </Text>
      </div>
    </div>
  );
};
