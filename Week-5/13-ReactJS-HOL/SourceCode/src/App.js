import './App.css';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {

  const showCourse = true;
  const showBook = true;
  const showBlog = true;

  return (
    <div className="container">

      {showCourse && <CourseDetails />}

      {showBook ? <BookDetails /> : null}

      {showBlog ? <BlogDetails /> : null}

    </div>
  );
}

export default App;