import type { Metadata } from 'next';
import { CurrentWeatherCard } from '@/components/weather/current-weather-card';
import { HourlyForecastCard } from '@/components/weather/hourly-forecast-card';
import { DailyForecastCard } from '@/components/weather/daily-forecast-card';
import { getCurrentWeather, getHourlyForecast, get7DayForecast, type Location } from '@/services/weather';

export const metadata: Metadata = {
  title: 'WeatherWise',
  description: 'Accurate and timely weather information.',
};

const defaultLocation: Location = { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco

export default async function Home() {
  // Fetch weather data on the server
  const currentWeather = await getCurrentWeather(defaultLocation);
  const hourlyForecast = await getHourlyForecast(defaultLocation);
  const dailyForecast = await get7DayForecast(defaultLocation);

  return (
    <main className="container mx-auto p-4 lg:p-8 space-y-6">
      <h1 className="text-3xl font-bold text-primary">WeatherWise</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <CurrentWeatherCard weather={currentWeather} locationName="San Francisco" />
        </div>
        <div className="md:col-span-2 space-y-6">
           <HourlyForecastCard forecast={hourlyForecast} />
           <DailyForecastCard forecast={dailyForecast} />
        </div>
      </div>
    </main>
  );
}
