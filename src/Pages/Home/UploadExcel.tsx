import React, { ReactElement, useState } from 'react'

function ExcelUpload() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = () => {
    // setSelectedFile(event.target.files[0])
  }

  const handleUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here
      console.log('Uploading file:', selectedFile)
    }
  }

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default ExcelUpload
