import { useState } from "react"
import "./ResumeUpload.css"

function ResumeUpload() {
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!file) {
      alert("Please upload a resume (PDF)")
      return
    }

    alert(`Resume uploaded: ${file.name}`)
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">AI Resume Reviewer</h1>
        <p className="subtitle">
          Upload your resume and get AI-powered feedback
        </p>

        <form onSubmit={handleSubmit}>
          <div className="file-input">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button className="button" type="submit">
            Upload Resume
          </button>
        </form>

        <p className="footer-text">
          Supported format: PDF only
        </p>
      </div>
    </div>
  )
}

export default ResumeUpload
