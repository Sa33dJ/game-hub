import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key : '57bd5380cd604b64a53dd9ebf72bcd8e'
    }
})