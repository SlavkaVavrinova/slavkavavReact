const Coaching = () => {
  return (
    <div className="main">
      <h2>Koučování</h2>
      <p>
        Chceš si sama/sám udělat web? Vyraž do{' '}
        <a href="https://www.czechitas.cz/" target="_blank" rel="noreferrer">
          Czechitas{' '}
        </a>
        a tam se to můžeš naučit. Na výběr je nespočet kurzů.
      </p>
      <p>Aktuálně koučuji na následujících kurzech:</p>
      <ul>
        <li>
          <a
            href="https://www.czechitas.cz/kurzy/figma"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>{' '}
          (30. 1. 2022 9:00—17:00)
        </li>
        <li>
          <a
            href="https://www.czechitas.cz/kurzy/react-1"
            target="_blank"
            rel="noreferrer"
          >
            React 1
          </a>{' '}
          (semestrální kurz 17. 2. 2022 — 5. 5. 2022)
        </li>
        <li>
          <a
            href="https://www.czechitas.cz/kurzy/uvod-do-html-a-css"
            target="_blank"
            rel="noreferrer"
          >
            Úvod do HTML a CSS
          </a>{' '}
          (19. 2. 2022 9:00—17:00)
        </li>
        <li>
          <a
            href="https://www.czechitas.cz/kurzy/stan-se-koderkou"
            target="_blank"
            rel="noreferrer"
          >
            Staň se kodérkou
          </a>{' '}
          (semestrální kurz 22. 2. 2022 — 7. 6. 2022)
        </li>
      </ul>
    </div>
  );
};

export default Coaching;
