"use client";

import { useEffect, useRef, useState } from "react";

export default function QuranClass() {
  const teacherVideoRef = useRef<HTMLVideoElement>(null);
  const studentVideoRef = useRef<HTMLVideoElement>(null);

  const [teacherStream, setTeacherStream] = useState<MediaStream | null>(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);

  const [showPC, setShowPC] = useState(true);
  const [showMac, setShowMac] = useState(true);

  const [teacherNote, setTeacherNote] = useState("");

  // Toggle both camera and mic
  const toggleCameraMic = async () => {
    if (cameraOn) {
      teacherStream?.getTracks().forEach((track) => track.stop());
      setCameraOn(false);
      setMicOn(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (teacherVideoRef.current) {
          teacherVideoRef.current.srcObject = stream;
        }
        setTeacherStream(stream);
        setCameraOn(true);
        setMicOn(true);
      } catch (err) {
        console.error("Error accessing camera/mic:", err);
      }
    }
  };

  const toggleMic = () => {
    if (teacherStream) {
      teacherStream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
      setMicOn(!micOn);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* 🕌 LEFT SIDE */}
      <div className="bg-cyan-100 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-center bg-cyan-400 text-white py-3 rounded-xl mb-4">
          قرآن کلاس برائے طلباء
        </h1>

        {/* On/Off Controls */}
        <div className="flex justify-between mb-4">
          <div>
            <label className="mr-2 font-semibold">🖥 PC View</label>
            <input type="checkbox" checked={showPC} onChange={() => setShowPC(!showPC)} />
          </div>
          <div>
            <label className="mr-2 font-semibold">🍏 Mac View</label>
            <input type="checkbox" checked={showMac} onChange={() => setShowMac(!showMac)} />
          </div>
        </div>

        {/* 💻 PC iframe */}
        {showPC && (
          <iframe
            src="https://en.quranacademy.org/quran"
            className="w-full h-[300px] mb-6 border-4 border-white rounded-lg"
            allow="camera; microphone; fullscreen"
            title="Remote PC View"
          ></iframe>
        )}

        {/* 📘 Teacher Notes */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h2 className="text-xl font-bold text-cyan-700 mb-2">📘 استاد کی ہدایات / تفسیر</h2>
          <textarea
            className="w-full h-32 p-3 border border-cyan-300 rounded-lg resize-none focus:outline-none"
            placeholder="یہاں ہدایت یا تفسیر لکھیں"
            value={teacherNote}
            onChange={(e) => setTeacherNote(e.target.value)}
          />
        </div>

        {/* 📢 Show Teacher Note */}
        {teacherNote && (
          <div className="bg-yellow-100 mt-4 p-4 rounded-xl border border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">استاد کا پیغام:</h3>
            <p className="text-gray-800 whitespace-pre-wrap">{teacherNote}</p>
          </div>
        )}
      </div>

      {/* 🎥 RIGHT SIDE - CAMERA + Controls */}
      <div className="bg-black flex flex-col items-center p-6 gap-4">
        <video
          ref={teacherVideoRef}
          autoPlay
          muted={!micOn}
          className="rounded-xl shadow-xl w-full max-w-md border-4 border-cyan-400"
        ></video>

        <div className="flex gap-4">
          <button
            onClick={toggleCameraMic}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-xl"
          >
            {cameraOn ? "🔴 Stop Video" : "🟢 Start Video"}
          </button>
          <button
            onClick={toggleMic}
            disabled={!cameraOn}
            className={`${
              micOn ? "bg-green-600" : "bg-red-600"
            } text-white font-bold py-2 px-4 rounded-xl`}
          >
            {micOn ? "🎤 Mic On" : "🔇 Mic Off"}
          </button>
        </div>

        {/* 👨‍🎓 Simulated Student (for now) */}
        <div className="mt-6 w-full max-w-md">
          <h3 className="text-white text-center mb-2">👨‍🎓 Student Joining</h3>
          <video
            ref={studentVideoRef}
            autoPlay
            muted
            className="rounded-xl shadow-xl border-4 border-green-400 w-full"
            src=""
          ></video>
          <p className="text-white text-sm mt-1 text-center italic">Student live video (future setup)</p>
        </div>
      </div>
    </div>
  );
}
