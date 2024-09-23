import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Pollutants from '../components/Pollutants';
import AirQuality from '../components/AirQuality';

const Home = () => {

    

    const key = '3eb1f7c3f13382f03320462cd7143edc';
    const fetchRequest = () => {
       return axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=52.1388617&lon=-0.4499013&appid=${key}`)
    }

    const { data, error, isLoading } = useQuery({queryKey: ['pollutants'], queryFn: fetchRequest})

    const handleError = (err) => {
        console.log(err)
        if (err.response) {
            
            if(err.response.status >= 500){
                return <h1>Error: An error occurred. Please try again later</h1>
            } else if(err.response.status >= 400){
                return <h1>Error: An error occurred. Please check your request.</h1>
            } else {
                return <h1>Error: An unknown error occurred</h1>
            }
        } else {
        // The request was made but no response was received
        return <h1>ERROR: Network error. Please check your connection.</h1>
        } 
    }

  return (
    <div className='home'>
        { !isLoading ?

        <>
            { !error ? 
                <>
                    <AirQuality data={data} />
                    <Pollutants data={data} />
                    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                </> :
                <div>
                    { handleError(error) }
                </div>
            }
        </> :
        <div>
            <h1>Loading...</h1>
        </div>
        
        }
    </div>
  )
}

export default Home