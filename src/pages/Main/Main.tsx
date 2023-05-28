import { FC } from "react";
import {
  About,
  Advantages,
  Book,
  Contacts,
  Gallery,
  Layout,
  Preview,
} from "../../widgets";
// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout btn={true}>
      <Preview />
      <About />
      <Gallery />
      <Advantages />
      <Book />
      <Contacts />
    </Layout>
  );
};
