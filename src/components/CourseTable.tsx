import { useMemo, useState } from 'react';
import type { Course } from '../data/courses';
import './CourseTable.css';

type SortKey = keyof Pick<Course, 'department' | 'course' | 'title' | 'term' | 'order'>;

type SortDirection = 'asc' | 'desc';

interface CourseTableProps {
  courses: Course[];
  termLabel: string;
}

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

const CourseTable = ({ courses, termLabel }: CourseTableProps) => {
  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [termFilter, setTermFilter] = useState('all');
  const [sortKey, setSortKey] = useState<SortKey>('order');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const departments = useMemo(() => {
    const values = Array.from(new Set(courses.map((course) => course.department)));
    return values.sort((a, b) => collator.compare(a, b));
  }, [courses]);

  const terms = useMemo(() => {
    const values = Array.from(new Set(courses.map((course) => course.term)));
    return values.sort((a, b) => collator.compare(a, b));
  }, [courses]);

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return courses.filter((course) => {
      if (departmentFilter !== 'all' && course.department !== departmentFilter) {
        return false;
      }

      if (termFilter !== 'all' && course.term !== termFilter) {
        return false;
      }

      if (!query) {
        return true;
      }

      const haystack = `${course.department} ${course.course} ${course.title} ${course.term}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [courses, departmentFilter, termFilter, search]);

  const sortedCourses = useMemo(() => {
    const items = [...filteredCourses];

    items.sort((a, b) => {
      let result: number;

      if (sortKey === 'order') {
        result = a.order - b.order;
      } else {
        result = collator.compare(String(a[sortKey]), String(b[sortKey]));
      }

      return sortDirection === 'asc' ? result : -result;
    });

    return items;
  }, [filteredCourses, sortDirection, sortKey]);

  const toggleSort = (key: SortKey) => {
    setSortKey((current) => {
      if (current === key) {
        setSortDirection((direction) => (direction === 'asc' ? 'desc' : 'asc'));
        return current;
      }

      setSortDirection('asc');
      return key;
    });
  };

  const resetFilters = () => {
    setSearch('');
    setDepartmentFilter('all');
    setTermFilter('all');
    setSortKey('order');
    setSortDirection('asc');
  };

  return (
    <div className="course-table">
      <div className="course-table__controls" role="search">
        <label className="course-table__field">
          <span>Search</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Filter by course, department, or term"
          />
        </label>
        <label className="course-table__field">
          <span>Department</span>
          <select value={departmentFilter} onChange={(event) => setDepartmentFilter(event.target.value)}>
            <option value="all">All departments</option>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </label>
        <label className="course-table__field">
          <span>{termLabel}</span>
          <select value={termFilter} onChange={(event) => setTermFilter(event.target.value)}>
            <option value="all">All {termLabel.toLowerCase()}s</option>
            {terms.map((term) => (
              <option key={term} value={term}>
                {term}
              </option>
            ))}
          </select>
        </label>
        <button className="course-table__reset" type="button" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div className="course-table__scroller">
        <table>
          <caption className="visually-hidden">Course list sorted by {sortKey}</caption>
          <thead>
            <tr>
              <th scope="col">
                <button type="button" onClick={() => toggleSort('department')} className={sortKey === 'department' ? sortDirection : ''}>
                  Department
                </button>
              </th>
              <th scope="col">
                <button type="button" onClick={() => toggleSort('course')} className={sortKey === 'course' ? sortDirection : ''}>
                  Course
                </button>
              </th>
              <th scope="col">
                <button type="button" onClick={() => toggleSort('title')} className={sortKey === 'title' ? sortDirection : ''}>
                  Title
                </button>
              </th>
              <th scope="col">
                <button type="button" onClick={() => toggleSort('term')} className={sortKey === 'term' ? sortDirection : ''}>
                  {termLabel}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCourses.map((course) => (
              <tr key={`${course.department}-${course.course}-${course.term}`}>
                <td data-label="Department">{course.department}</td>
                <td data-label="Course">{course.course}</td>
                <td data-label="Title">{course.title}</td>
                <td data-label={termLabel}>{course.term}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {sortedCourses.length === 0 && <p className="course-table__empty">No courses match the current filters.</p>}
      </div>
    </div>
  );
};

export default CourseTable;
