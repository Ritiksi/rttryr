import type { HourlyForecast } from '@/services/weather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { WeatherIcon } from './weather-icon';

interface HourlyForecastCardProps {
  forecast: HourlyForecast[];
}

export function HourlyForecastCard({ forecast }: HourlyForecastCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Hourly Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-6 pb-4">
            {forecast.map((hour, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 flex-shrink-0 w-20">
                <p className="text-sm font-medium">{hour.hour}</p>
                <WeatherIcon iconName={hour.icon} className="w-8 h-8 text-primary" />
                <p className="text-lg font-semibold">{hour.temperatureFahrenheit}°F</p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
