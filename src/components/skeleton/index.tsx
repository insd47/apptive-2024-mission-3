import Grid from "../grid";
import styles from "./styles.module.css";

function SkeletonCard() {
  return (
    <div className={styles.skeleton} />
  )
}

export default function Skeleton() {
  return (
    <Grid>
      {Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
    </Grid>
  )
}