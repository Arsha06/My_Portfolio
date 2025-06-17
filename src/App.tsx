import { useEffect, useState } from 'react';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  techStack: string;
  github: string;
  liveLink: string;
  createdAt: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get<Project[]>('http://localhost:5000/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Portfolio Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> - {p.techStack}
            <br />
            <a href={p.github} target="_blank">GitHub</a> | <a href={p.liveLink} target="_blank">Live</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
