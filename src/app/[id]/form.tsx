"use client";

import { useState } from "react";
import { addition, getIP } from "./actions";

export default function Form() {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [result, setResult] = useState<string>("");
    const [result2, setResult2] = useState<string>("");

    return (
        <>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    addition(a, b)
                        .then(
                            (res) => setResult(res.toString())
                        );
                }}
            >
                <input
                    type="number"
                    value={a}
                    onChange={(e) => setA(Number(e.target.value))}
                />
                +
                <input
                    type="number"
                    value={b}
                    onChange={(e) => setB(Number(e.target.value))}
                />
                <button type="submit">=</button>
                <p>{result}</p>
            </form>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    getIP()
                        .then(
                            (res) => setResult2(res.toString())
                        );
                }}
            >
                <button type="submit">IP取得</button>
                <p>{result2}</p>
            </form>
        </>
    )
}