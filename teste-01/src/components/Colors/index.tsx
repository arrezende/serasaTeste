import styles from './styles.module.css'

const Colors = () => {
  return (
    <>
    <h1>Cores</h1>
      <p>Esse é o esquema de cores que fazem parte da identidade visual</p>
    <div className={styles.container}>
      <div className={styles.darkLow}><span>dark-low</span> rgba(0,0,0,0.44)</div>
      <div className={styles.darkMedium}><span>dark-medium</span> rgba(0,0,0,0.60)</div>
      <div className={styles.darkHigh}><span>dark-high</span> rgba(0,0,0,0.80)</div>
      <div className={styles.magenta}><span>magenta</span>
#E63888 </div>
      <div className={styles.lightSolid}><span>light-solid</span> #FFFFFF</div>
      <div className={styles.lightHight}><span>light-high</span> rgba(255,255,255,0.8)</div>
    </div>
    </>
  )
}

export default Colors