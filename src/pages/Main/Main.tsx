import { FC } from "react";
import {
  About,
  Advantages,
  Book,
  Contacts,
  Gallery,
  Investments,
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
      <Investments />
      <Advantages />
      <Book />
      <Contacts />
    </Layout>
  );
};
