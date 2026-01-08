import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Summary from "./pages/Summary";

import { initialFormData, STORAGE_KEY } from "./state/formState";

export default function App() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialFormData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={<Form formData={formData} setFormData={setFormData} />}
        />
        <Route path="/summary" element={<Summary formData={formData} />} />
      </Routes>
    </BrowserRouter>
  );
}
