import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Bootstrap",
    level: "advanced",
    color: "#03FC94"
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "TailwindCSS",
    level: "intermediate",
    color: "#FF3B00"
  },
  {
    skill: "Styled Components",
    level: "beginner",
    color: "#AB73C7"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar photoPath="/fausto-avatar.jpeg" name="Fausto Nunes" />
      <div className="data">
        <Intro
          name="Fausto Nunes"
          bio="Full-stack developer that clearly leans torwards Front-end development a bit more. When I'm not programming, I enjoy video and boardgames, loud music (listening and playing), horror movies, vegan food and funny stuff."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photoPath} alt={props.name} />;
}

function Intro(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
