import axios from 'axios';

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID pItcZO_HrjolSRQkeAWBBmlDq1M8rDY760rlS57WkPY"

    }
})