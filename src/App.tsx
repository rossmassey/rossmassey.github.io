import CourseTable from './components/CourseTable';
import { institutions } from './data/courses';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <p className="hero__eyebrow">Ross Massey</p>
        <h1 className="hero__title">Course History</h1>
        <p className="hero__subtitle">
          Browse every course I completed at UC San Diego and San Diego Community College. Use the filters to explore
          departments, quarters, and semesters, or search directly for a topic.
        </p>
      </header>

      <main className="content">
        {institutions.map((institution) => (
          <section key={institution.id} aria-labelledby={`${institution.id}-heading`} className="institution">
            <div className="institution__header">
              <h2 id={`${institution.id}-heading`}>{institution.name}</h2>
              {institution.gpa && <p className="institution__gpa">GPA {institution.gpa}</p>}
            </div>
            <CourseTable courses={institution.courses} termLabel={institution.termLabel} />
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>Data curated from personal academic records. Last updated in 2018.</p>
      </footer>
    </div>
  );
};

export default App;
