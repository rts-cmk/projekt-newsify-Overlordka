import { useState, useEffect } from "react";
import "./ToggleSwich.sass";

function getSavedStates() {
  try {
    const raw = localStorage.getItem("switchStates");
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export default function ToggleSwich({ title, onChange }) {
  const key = String(title).toLowerCase().trim();

  const [isOn, setIsOn] = useState(() => {
    const saved = getSavedStates();
    return saved[key] !== undefined ? Boolean(saved[key]) : true;
  });
  
  useEffect(() => {
    const saved = getSavedStates();
    saved[key] = isOn;
    localStorage.setItem("switchStates", JSON.stringify(saved));
    if (onChange) onChange(key, isOn);
  }, [isOn, key, onChange]);

  return (
    <label className="label-swich">
      <input
        type="checkbox"
        checked={isOn}
        className="input-swich"
        onChange={() => setIsOn((v) => !v)}
      />
      <span className="swich-slider"></span>
    </label>
  );
}
