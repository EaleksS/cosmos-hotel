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
        <img
          className={styles.item}
          src="https://i.1.creatium.io/21/77/46/5756edca4805bf213a7f00c47e6ddb0c95/420_gostinichny_comlex_exterior_d3_cam02_1_min.jpg"
          alt="jpg"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/da/a6/a3/8b5b76e336e1223a42ebf811ca0ea20640/420_gostinichny_comlex_pool_d1_cam02_min.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/c8/a6/75/9992a1824b8ee0601954f1fb377eb06551/420_gostinichny_comlex_pool_d2_cam01_2.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/79/c8/90/9db26ca72a2f82a761e7c4ed4d9f068bd8/420_gostinichny_comlex_roof_d3_cam02_min.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/1b/61/fc/48a1d5d265c5ebf6361ede818cb4466d58/1.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/0e/d6/27/38489fa83b68218d764485c544cab7f869/2.jpg"
          alt="gif"
        />
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше фото на WhatsApp</Text>
        </Button>
      </div>

      <div className={styles.img}>
        <img
          className={styles.img_preview}
          src="https://i.1.creatium.io/e1/0e/28/89c280efb80c92fc34fa959a057f9e50ee/420_gostinichny_comlex_pool_d1_cam02_1.jpg"
          alt="preview"
        />
        <div className={styles.bg}></div>

        <Text type="h2" color="#fff" fw="700">
          Ваши апартаменты не будут <br /> простаивать. <br />
          Доходность 30% годовых на росте <br /> цен + сдачи в аренду
        </Text>
      </div>
    </div>
  );
};
