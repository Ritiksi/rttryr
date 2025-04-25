import type { CurrentWeather } from '@/services/weather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherIcon } from './weather-icon';
import { Thermometer, Droplets, Wind } from 'lucide-react';

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
  locationName: string;
}

export function CurrentWeatherCard({ weather, locationName }: CurrentWeatherCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-primary">{locationName}</CardTitle>
        <p className="text-sm text-muted-foreground">{weather.description}</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center pt-4">
        <div className="flex items-center space-x-4 mb-4">
            <WeatherIcon iconName={weather.icon} className="w-20 h-20 text-primary" />
            <span className="text-6xl font-bold">{weather.temperatureFahrenheit}°F</span>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full text-sm mt-4">
             <div className="flex items-center space-x-2">
                <Thermometer className="w-4 h-4 text-muted-foreground" />
                <span>Feels like: {weather.temperatureFahrenheit}°F</span> {/* Assuming feels like is same as current for now */}
            </div>
           <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-muted-foreground" />
              <span>Humidity: {weather.humidity}%</span>
            </div>
             <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-muted-foreground" />
              <span>Wind: {weather.windSpeed} mph</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
