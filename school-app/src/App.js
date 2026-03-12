import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
}
