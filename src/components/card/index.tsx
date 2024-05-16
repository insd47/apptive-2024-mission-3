import { BriefcaseBusinessIcon } from "lucide-react";
import { Profile } from "../../lib/types";
import styles from "./styles.module.css";

import fallbackAvatar from "./assets/fallback-avatar.png";
import fallbackBackground from "./assets/fallback-background.png";

export default function Card({
  name,
  id,
  image,
  background,
  status,
  job,
  bio,
}: Profile) {
  return (
    <div className={styles.card}>
      <img
        className={styles.background}
        src={background ?? fallbackBackground}
        alt={name + "의 배경 사진"}
      />
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img
            className={styles.image}
            src={image ?? fallbackAvatar}
            alt={name + "의 프로필 사진"}
          />
          <div className={styles.status} data-status={status} />
        </div>
        <div className={styles.header}>
          <div className={styles.left}>
            <p className={styles.name}>{name}</p>
            <p className={styles.id}>{id}</p>
          </div>
          <div className={styles.right}>
            <BriefcaseBusinessIcon size={20} strokeWidth={1} />
            <span>{job}</span>
          </div>
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
