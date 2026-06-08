"use client"

import { useState } from "react"
import { bibleTopics } from "@/lib/data"

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<any>(null)

const handleSearch = () => {
  const keyword = input.trim().toLowerCase()

  const found = bibleTopics.find(topic =>
    topic.keywords.some(k =>
    k.toLowerCase().includes(keyword) ||
      keyword.includes(k.toLowerCase())
    )
  )

  setResult(found || null)
}
  return (
    <div>
      <h1>Bible Comfort Finder</h1>
      <p>Find Bible verses for your emotions</p>

      <textarea
        rows={4}
        style={{ width: "100%", marginTop: 10 }}
        placeholder="Type: anxiety / fear"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSearch} style={{ marginTop: 10 }}>
        Search
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>Verses</h2>

          {result.verses.map((v: any, i: number) => (
            <p key={i}>
              <b>{v.ref}</b><br />
              {v.text}
            </p>
          ))}

          <h3>Message</h3>
          <p>{result.message}</p>

          <h3>Prayer</h3>
          <p>{result.prayer}</p>
        </div>
      )}
    </div>
  )
}