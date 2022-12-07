import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const {data: { data }} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat
            },
            headers: {
                'X-RapidAPI-Key': '11266ebbc9msh0313951ca148de7p1b3ff4jsn5c332cb7092d',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })

        return data
    } catch (error) {
        console.log(error)
    }
}