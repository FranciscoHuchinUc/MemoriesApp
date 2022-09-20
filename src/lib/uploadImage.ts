import { useState } from 'react'
import axios from 'redaxios'

const [imageSelected, setImageSelected] = useState<FileList | null>(null)

/*

  <input type="file" name="" id="" 
        onChange={(event) => {
          setImageSelected(event!.target!.files)
        }}
      />
      <button onClick={uploadImage}>Upload</button>

 */

const uploadImage = () => {
  const formData: FormData = new FormData()
  formData.append('file', imageSelected![0])
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET)

  axios.post(import.meta.env.VITE_CLOUDINARY_URL, formData).then((res) => {
    console.log(res)
  })
}

export default {
  setImageSelected,
  uploadImage
}
