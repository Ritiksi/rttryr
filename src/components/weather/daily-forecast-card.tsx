import type { DailyForecast } from '@/services/weather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherIcon } from './weather-icon';
import { Separator } from '@/components/ui/separator';

interface DailyForecastCardProps {
  forecast: DailyForecast[];
}

export function DailyForecastCard({ forecast }: DailyForecastCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-medium">7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {forecast.map((day, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center">
              <p className="font-medium w-1/3">{day.day}</p>
              <WeatherIcon iconName={day.icon} className="w-8 h-8 text-primary mx-auto" />
              <div className="flex justify-end space-x-2 w-1/3">
                <span className="font-semibold">{day.highTemperatureFahrenheit}°</span>
                <span className="text-muted-foreground">{day.lowTemperatureFahrenheit}°</span>
              </div>
            </div>
            {index < forecast.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}

// Need React for Fragment
import React from 'react';