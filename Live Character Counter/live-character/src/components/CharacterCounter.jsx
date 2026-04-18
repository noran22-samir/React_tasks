import { useState, useEffect } from "react";
export default function CharacterCounter() {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            const length = text.length;
            if (length === 0) {
                setStatus("");
            } else if (length < 10) {
                setStatus("Too short");
            } else if (length <= 20) {
                setStatus("Good");
            } else {
                setStatus("Too long");
            }
        }, 0);
        return () => clearTimeout(timer);
    }, [text]);
    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= 30) {
            setText(value);
        }
    };
    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-2xl text-center border">
            <h1 className="text-2xl font-bold mb-4">Live Character Counter</h1>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
                className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-lg">
                Characters: <span className="font-bold">{text.length}</span> / 30
            </p>
            <p
                className={`mt-2 font-semibold ${status === "Too short"
                        ? "text-red-500"
                        : status === "Good"
                            ? "text-green-500"
                            : status === "Too long"
                                ? "text-yellow-500"
                                : ""
                    }`}
            >
                {status}
            </p>
        </div>
    );
}