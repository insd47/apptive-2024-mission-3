import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export default function Grid({ children }: PropsWithChildren) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  )
}