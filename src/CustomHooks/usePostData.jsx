import axios from 'axios';

const usePostData = (path,info) => {
    console.log(path,info)
    axios.post(`https://server-electronic-item-repairing-services.vercel.app${path}`,info)
    .then(res => {
        return res;
    })
    .catch(error => {
        console.log(error)
        return error;
    })
};

export default usePostData;