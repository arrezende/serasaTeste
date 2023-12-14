import styles from './styles.module.css';
import Desk from '../../assets/desktop-solid.svg';
import Mobile from '../../assets/mobile-solid.svg';

const Headings = () => {
  return (
    <>
      <h1>Tipografia</h1>

      <h2>
        <strong>Font Family:</strong> Roboto
      </h2>
      <div className={styles.container}>
        <table>
          <thead>
            <th>
              <td>Nome</td>
            </th>
            <th>
              <td>Tamanho</td>
            </th>
            <th>
              <td>Linha</td>
            </th>
            <th>
              <td>Peso</td>
            </th>
            <th>
              <td>Espaçamento</td>
            </th>
          </thead>
          <tbody>
            <tr>
              <td className={styles.display}>Display</td>
              <td>
                <img src={Desk} />
                48px(3rem)
                <img src={Mobile} />
                40px (2.5rem)
              </td>
              <td>
                <img src={Desk} />
                52px
                <img src={Mobile} />
                44px
              </td>
              <td>Bold (700)</td>
              <td>-1.2</td>
            </tr>
            <tr>
              <td className={styles.fontHeadingL}>Heading L</td>
              <td>
                <img src={Desk} />
                40px (2,5rem) <img src={Mobile} />
                32px (2rem)
              </td>
              <td>
                <img src={Desk} />
                44px <img src={Mobile} />
                36px
              </td>
              <td>Bold (700)</td>
              <td>-1</td>
            </tr>

            <tr>
              <td className={styles.fontHeadingM}>Heading M</td>
              <td>
                <img src={Desk} />
                32px (2rem) <img src={Mobile} />
                24px (1,5rem)
              </td>
              <td>
                <img src={Desk} />
                36px <img src={Mobile} />
                28px
              </td>
              <td>Bold (700)</td>
              <td>-0.6</td>
            </tr>
            <tr>
              <td className={styles.fontHeadingS}>Heading S</td>
              <td>
                <img src={Desk} />
                24px (1,5rem) <img src={Mobile} />
                20px (1,25rem)
              </td>
              <td>
                <img src={Desk} />
                28px <img src={Mobile} />
                24px
              </td>
              <td>Bold (700)</td>
              <td>-0.6</td>
            </tr>
            <tr>
              <td className={styles.fontHeadingXS}>Heading XS</td>
              <td>
                <img src={Desk} />
                20px (1,25rem) <img src={Mobile} />
                18px (1,125rem)
              </td>
              <td>
                <img src={Desk} />
                24px <img src={Mobile} />
                22px
              </td>
              <td>Bold (700)</td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.fontSubheading}>Subheadin</td>
              <td>
                <img src={Desk} /> <img src={Mobile} />
                16px (1rem)
              </td>
              <td>
                <img src={Desk} /> <img src={Mobile} />
                20px
              </td>
              <td>Bold (700)</td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.fontBody}>Body M</td>
              <td>
                <img src={Desk} /> <img src={Mobile} />
                16px (1rem)
              </td>
              <td>
                <img src={Desk} /> <img src={Mobile} />
                24px
              </td>
              <td>Regular (400), Bold (700)</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Headings;
