import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

const options = {
    params: {
        bl_latitude: '11.847676',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
        tr_latitude: '12.838442',
    },
    headers: {
        'X-RapidAPI-Key': '11266ebbc9msh0313951ca148de7p1b3ff4jsn5c332cb7092d',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacesData = async () => {
    try {
        const {data: { data }} = await axios.get(URL, options)

        return data
    } catch (error) {
        console.log(error)
    }
}