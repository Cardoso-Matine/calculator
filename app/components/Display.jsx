"use client";

export default function Display({ value }) {
  return (
    <div className="display">
      <span className="display-content">
        {value || "0"}
      </span>
    </div>
  );
}