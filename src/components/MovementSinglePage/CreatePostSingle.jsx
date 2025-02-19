import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { RiFolderVideoFill } from "react-icons/ri";
import { toast } from "react-toastify";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CreatePostSingle = () => {

  const {register, control, handleSubmit, setValue, formState: {errors}} = useForm({
    defaultValues: {
      videoFiles: [],
      pdfFiles: [],
      titleName:'',
      description:'',
      interests:'',
      country:'',
    },
    mode: "onSubmit",
  });

  // Handle video upload
  const onDropVideo = useCallback(
    (acceptedFiles) => {
      const videoFiles = acceptedFiles.filter((file) =>
        file.type.startsWith("video/")
      );

      if (videoFiles.length > 0) {
        setValue("videoFiles", videoFiles, { shouldValidate: true });
      } else {
        toast.error("Only video files are allowed!");
      }
    },
    [setValue]
  );

  // Get dropzone props for videos
  const {
    getRootProps: getVideoRootProps,
    getInputProps: getVideoInputProps,
    isDragActive: isDragActiveVideo,
  } = useDropzone({
    onDrop: onDropVideo,
    accept: { "video/*": [] },
    multiple: false,
  });


  // Handle form submission
  const onSubmit = (data) => {

    console.log(data);
    toast.success("Post created successfully!");
  };


  return (
    <div>
      <Dialog>
      <DialogTrigger className="w-full">
      <div className="flex items-center gap-3 py-[18px] px-[22px] bg-primaryColor rounded-[8px] cursor-pointer duration-200 hover:bg-[#4b51ef]">
          <p className="text-[20px] text-white"><FaRegEdit /></p>
          <p className="text-base font-semibold text-white">Create a Post</p>
      </div>
      </DialogTrigger>
      <DialogContent className="max-w-[682px] max-h-[720px] overflow-y-auto rounded-[12px] bg-[#F8F8F8]">
        <div>
          <h3 className="text-[24px] font-semibold text-themeBlack text-center mb-[48px]">Create a Post</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller 
              name="videoFiles"
              control={control}
              rules={{required:'Please upload your video file'}}
              render={({field: {value}}) => (
                <>
                <div {...getVideoRootProps()}
                className={`border-[2px] min-h-[160px] border-dashed rounded-[10px] flex items-center justify-center bg-white py-10 px-[55px] ${isDragActiveVideo ? 'bg-[rgba(230,230,255,0.43)]' : ''} ${errors.videoFiles ? 'border-red-500' : 'border-[#B5B5B5]'}`}
                >
                   <input {...getVideoInputProps()} />
                   {
                      isDragActiveVideo ?
                        <p>Drop the files here ...</p> :
                        <div className="flex items-center flex-col justify-center">
                          <p className="text-[40px] text-sidebarIconColor">
                          <RiFolderVideoFill />
                          </p>
                          {
                          value && value.length > 0 ? (
                            <ul>
                              {
                                value.map((file) => (
                                  <li key={file?.name}>
                                    {file?.name}
                                  </li>
                                ))
                              }
                            </ul>
                            ) : (<p className="text-base font-medium mt-2">Drag & drop and your video or <span className="text-primaryColor cursor-pointer hover:opacity-50 duration-100 ease-in-out">browse here..</span></p>)
                          }
                        </div>
                    }
                    
                </div>
                </>
              )}
             />
               {/* titleName */}
              <div className="mt-5">
                <label htmlFor="titleName" className="post-label">Title Name</label>
                <input className="post-input" type="text" placeholder="Enter your Title" {...register('titleName', {required:'Please enter your name'})} />
                {
                  errors.titleName && (
                    <p className="text-red-500 text-sm mt-1">{errors.titleName.message}</p>
                  )
                }
              </div>
              {/* Descriptions  */}
              <div className="mt-5">
                <label htmlFor="description" className="post-label">Descriptions</label>
                <textarea className="post-input h-[70px] resize-none" placeholder="Short Descriptions" {...register('description', {required:'Please enter your description'})}></textarea>
                {
                  errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )
                }
              </div>
              {/* Interests  */}
              <div className="mt-3">
                <label htmlFor="">Choose Interests</label>
                <Controller
                name="interests"
                control={control}
                rules={{required: 'Please select interests'}}
                render={({field}) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full border rounded-md h-12 mt-2 focus:ring-0 focus:outline-none focus:ring-offset-0">
                      <SelectValue placeholder="Select Your Interests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                )}
               />
               {
                  errors.interests && (
                    <p className="text-red-500 text-sm mt-1">{errors.interests.message}</p>
                  )
                }
              </div>
              {/* Interests  */}
              <div className="mt-3">
                <label htmlFor="">Choose Country</label>
                <Controller
                name="country"
                control={control}
                rules={{required: 'Please select your country'}}
                render={({field}) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full border rounded-md h-12 mt-2 focus:ring-0 focus:outline-none focus:ring-offset-0">
                      <SelectValue placeholder="Select Your Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sports">USA</SelectItem>
                      <SelectItem value="music">Canada</SelectItem>
                      <SelectItem value="education">Italy</SelectItem>
                    </SelectContent>
                  </Select>
                )}
               />
               {
                  errors.country && (
                    <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                  )
                }
              </div>
              
             <button type="submit" className="block w-full text-sm text-white font-medium bg-primaryColor text-clip p-3 rounded-[6px] mt-[30px] duration-200 ease-in-out hover:bg-[#4b51ef]">Publish Your Post</button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
};

export default CreatePostSingle;