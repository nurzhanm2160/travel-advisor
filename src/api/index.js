import axios from 'axios'

export const getPlacesData = async (type,  sw, ne) => {
    try {
        const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat
            },
            headers: {
                // hided API KEY in Env Variables
                'X-RapidAPI-Key': '11266ebbc9msh0313951ca148de7p1b3ff4jsn5c332cb7092d',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })

        return data
    } catch (error) {
        console.log(error)
    }
}