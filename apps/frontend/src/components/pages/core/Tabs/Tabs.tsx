import styles from "./styles.css"

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Tabs}>{children}</div>
  )
}
