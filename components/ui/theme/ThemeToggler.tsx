'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    if (!mounted) return null;

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
}
