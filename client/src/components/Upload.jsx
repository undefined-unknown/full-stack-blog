import { useRef } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import axios from "axios";
import { toast } from "react-toastify";

const publicKey = import.meta.env.VITE_IK_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;
const apiUrl = import.meta.env.VITE_API_URL;

const authenticator = async () => {
  try {
    return axios.get(`${apiUrl}/posts/upload-auth`).then((res) => res.data);
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ type, setProgress, setData, children }) => {
  const ref = useRef(null);

  const onUploadProgress = (progress) => {
    console.log("progress", progress);
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  const onError = (err) => {
    console.log("Error", err);
    toast.error("Image upload failed!");
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setData(res);
    toast.success("Image upload successed!");
  };

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        className="hidden"
        onUploadProgress={onUploadProgress}
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
