import { useState } from "react"

function ResumeUpload() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!file) {
      alert("Please upload a resume")
      return
    }

    console.log("Uploaded file:", file.name)
    alert("Resume uploaded successfully (backend coming next!)")
  }

  return (
    <div style={styles.container}>
      <h1>AI Resume Reviewer</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <br /><br />
        <button type="submit">Upload Resume</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "100px auto",
    textAlign: "center",
    fontFamily: "Arial"
  }
}

export default ResumeUpload
