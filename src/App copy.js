import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

import JSXLesson from "./lessons/01_JSX";
import PropsLesson from "./lessons/02_Props";
import UseStateLesson from "./lessons/03_useState";
import UseEffectLesson from "./lessons/04_useEffect";
import EventHandlingLesson from "./lessons/05_EventHandling";
import ConditionalRenderingLesson from "./lessons/06_ConditionalRendering";
import ListsAndKeysLesson from "./lessons/07_ListsAndKeys";
import FormsLesson from "./lessons/08_Forms";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/jsx" replace />} />
            <Route path="/jsx" element={<JSXLesson />} />
            <Route path="/props" element={<PropsLesson />} />
            <Route path="/usestate" element={<UseStateLesson />} />
            <Route path="/useeffect" element={<UseEffectLesson />} />
            <Route path="/events" element={<EventHandlingLesson />} />
            <Route path="/conditional" element={<ConditionalRenderingLesson />} />
            <Route path="/lists" element={<ListsAndKeysLesson />} />
            <Route path="/forms" element={<FormsLesson />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
