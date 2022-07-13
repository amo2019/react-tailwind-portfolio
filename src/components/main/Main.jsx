import { Routes, Navigate, Route } from 'react-router-dom';
import Home from './Home';
import Resume from '../Resume';
import Project from '../projects/Project';
export default function Main() {
  return (
    <div className="mainContent dark:bg-slate-900 pt-1 pb-1">
      <Routes>

          <Route path="/">
           <Route index element={<Home />} />
              <Route path="projects">
                <Route path=":id" element={<Project />} />
              </Route>
              <Route path="/resume" element={<Resume />}/>
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>
    </div>
  );
}