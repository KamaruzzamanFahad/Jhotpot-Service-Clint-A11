import axios from 'axios';

const usePostData = (path,info) => {
    console.log(path,info)
    axios.post(`http://localhost:5000${path}`,info)
    .then(res => {
        return res;
    })
    .catch(error => {
        console.log(error)
        return error;
    })
};

export default usePostData;