import { Suspense } from "react";
import Card from "../components/card";
import Grid from "../components/grid";
import { Profile } from "../lib/types";
import { useProfiles } from "./actions";
import Skeleton from "../components/skeleton";

import styles from "./styles.module.css";

function CardGrid({ profiles }: { profiles?: Profile[] }) {
  return (
    <Grid>
      {profiles?.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </Grid>
  );
}

function App() {
  const profiles = useProfiles();

  return (
    <main>
      <h1 className={styles.title}>프로필 목록</h1>
      <Suspense fallback={<Skeleton />}>
        <CardGrid profiles={profiles} />
      </Suspense>
    </main>
  );
}

export default App;
