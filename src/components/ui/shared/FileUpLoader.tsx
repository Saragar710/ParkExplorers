import  { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';

type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
}

const FileUpLoader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
    const [file, setfile] = useState<File[]>([]);
    const [fileUrl, setfileUrl] = useState<string>(mediaUrl);
         
         const onDrop = useCallback(
            (acceptedFiles: FileWithPath[]) => {
          setfile(acceptedFiles);
          fieldChange(acceptedFiles);
          setfileUrl(url.createObjectURL(acceptedFiles[0]))
        }, [file])

        const {getRootProps, getInputProps } = useDropzone({
            onDrop,
            accept: {
                'image/*' : [ '.png', '.jpg', '.jpeg', '.svg']
            }
        })

  return (
      <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
      <input {...getInputProps()} className="cursor-pointer"/>
      {
        fileUrl ? (
            <div>
                test 1
            </div>

        ) : (
            <div className="file_uploader-box">
                <img 
                src="public\snapgram_public\public\assets\icons\file-upload.svg"
                width={96}
                height={77}
                alt='file-upload'
                />
                <h3 className='base-medium text-light-2 mb-2 mt-6'>Drag photo here</h3>
                <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>

                <Button className="shad-button_dark_4">
                    Select from computer
                </Button>
            </div>    
        )
        
      }
    </div>
  )
}


export default FileUpLoader