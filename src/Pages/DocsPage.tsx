import { CircularProgress } from '@mui/material';
import React, { FormEvent, useState } from 'react'
import { BiUpload } from 'react-icons/bi'
import Dropzone from 'react-dropzone'
import { toast } from 'react-toastify';
import { MdClose } from 'react-icons/md';
import { uploadImage } from '../utils/upload';
import { useAdmin } from '../Context/AdminContext';
import { uploadedFile } from '../types';
import { useNavigate } from 'react-router-dom';

const DocsPage = () => {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Uploading docs...")
  const [files, setFiles] = useState<File[]>([]);
  const [newFiles, setNewFiles] = useState<uploadedFile[]>([])
  const { uploadFiles }: any = useAdmin()
  const navigate = useNavigate()
  const handleSubmitFiles = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = await uploadFiles(newFiles)
    if (!data.status) return toast.error(data.data.message)
    toast.success("Files stored successfully")
    navigate("/")
  }
  const onDrop = async (acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    setFiles(acceptedFiles)
    toast.success("Files loaded successfully")
    acceptedFiles.forEach(async (file: File) => {
      const url = await uploadImage(file)
      setNewFiles([...newFiles, {
        name: file.name,
        url,
        size: file.size,
        type: file.type
      }])
      console.log(file)
    })
  };

  return (
    <div className='signup-background w-screen h-screen flex items-center justify-center'>
      <div className='smm20: sm:w-6/12 md:w-5/12 xl:w-4/12 h-[600px] h-fit3 relative rounded-xl px-8 bg-white flex flex-col items-center justify-center'>
        <span className='text-2xl font-poppins font-extrabold mb-4'>You're almost there!!!</span>

        <form className='w-full h-2/3' onSubmit={handleSubmitFiles}>
          <div className='font-poppins flex items-center justify-center border-4 border-cblink cursor-pointer bg-cblink/10 text-cblink border-dashed p-3 w-full h-full rounded'>
            {
              loading
                ?
                <div className="flex flex-col items-center">
                  <CircularProgress color='inherit' />
                  <span>{loadingText}</span>
                </div>
                :
                <Dropzone
                  onDrop={onDrop}
                  multiple={true}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })} className='flex flex-col items-center justify-center w-full h-full'>
                      <input  {...getInputProps()} id='fileInputs' type="file" className='hidden' />
                      <BiUpload size={64} className="mb-4" />
                      <span>Click   <label htmlFor="fileInputs" className='underline'>here</label> to upload file. <br></br> Or drag and drop the files here</span>
                      {
                        files.length ?
                          <div className='w-full h-1/2 pb-2 overflow-scroll flex flex-col'>
                            {files.map((file: File, index) => (
                              <div key={index} className='w-full my-1 relative bg-white text-cblink p-2 h-fit flex flex-col'>
                                <span className='font-black text-[12px]'>{file.name}</span>
                                <span>{file.size}</span>
                                <MdClose className='bg-cblink text-white rounded-full cursor-pointer absolute right-2 top-2' onClick={() => { setFiles(files.filter((_file: File) => file != _file)) }} />
                              </div>
                            ))}
                          </div>
                          :
                          null
                      }
                    </div>
                  )}
                </Dropzone>
            }
          </div>
          <button className='text-white bg-cblink px-4 font-bold float-right py-2 rounded cursor-pointer mt-3 ' type='submit'>Upload</button>
        </form>
      </div>
    </div>
  )
}

export default DocsPage