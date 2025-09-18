"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import Button from "./Button";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center">
      <Button onClick={() => setOpen(true)}>Resume</Button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
          <div className="relative w-[90%] h-[90%] bg-white rounded-2xl shadow-lg overflow-hidden">
            
            <div className="absolute top-3 right-3 flex gap-2">
              <a
                href="/Nyasha-Zimbudzana-Resume.pdf"
                download
                className="p-2 rounded-full hover:bg-gray-200 transition"
                title="Download Resume"
              >
                <Download className="w-5 h-5" />
              </a>
              
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 transition"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <iframe
              src="/Nyasha-Zimbudzana-Resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </div>
      )}
    </div>
  );
}
