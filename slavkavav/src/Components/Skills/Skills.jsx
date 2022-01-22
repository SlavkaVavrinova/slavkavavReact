import html from './img/html.svg';
import css from './img/css.svg';
import javascript from './img/javascript.svg';
import react from './img/react.svg';
import vsCode from './img/vsCode.svg';
import github from './img/github.svg';
import uxUi from './img/uxUi.svg';
import figma from './img/figma.svg';
import photoshop from './img/photoshop.svg';
import inkscape from './img/inkscape.svg';
import canva from './img/canva2.svg';
import wordpress from './img/wordpress.svg';

const Skills = () => {
  return (
    <>
      <h2>Co používám</h2>

      <div className="skills__grid">
        {skillsItems.map((item) => (
          <div className="skills__item">
            <img className="skills__icon" src={item.icon} alt={item.alt} />
            <h3 className="skills__title">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

const skillsItems = [
  {
    icon: `${html}`,
    alt: 'Ikona Html',
    name: 'HTML',
  },
  {
    icon: `${css}`,
    alt: 'Ikona Css',
    name: 'CSS',
  },
  {
    icon: `${javascript}`,
    alt: 'Ikona Javascript',
    name: 'JavaScript',
  },
  {
    icon: `${react}`,
    alt: 'Ikona React',
    name: 'React',
  },
  {
    icon: `${vsCode}`,
    alt: 'Ikona Vs Code',
    name: 'Vs Code',
  },
  {
    icon: `${github}`,
    alt: 'Ikona GitHub',
    name: 'GitHub',
  },
  {
    icon: `${uxUi}`,
    alt: 'Ikona Figma',
    name: 'UX UI',
  },
  {
    icon: `${figma}`,
    alt: 'Ikona Figma, ',
    name: 'Figma',
  },
  {
    icon: `${photoshop}`,
    alt: 'Ikona Photoshop',
    name: 'Photoshop',
  },

  {
    icon: `${inkscape}`,
    alt: 'Ikona Inkscape',
    name: 'Inkscape',
  },

  {
    icon: `${canva}`,
    alt: 'Ikona Canva',
    name: 'Canva',
  },
  {
    icon: `${wordpress}`,
    alt: 'Ikona Figma',
    name: 'WordPress',
  },
];

export default Skills;
