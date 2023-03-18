import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Tweet from "./components/Tweet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Tweet />;
}
