'use client';

import { Sun, Cloud, CloudSun, CloudRain, CloudLightning, CloudSnow, Wind, CloudDrizzle, ThermometerSun, ThermometerSnowflake } from 'lucide-react';
import type { Icon } from 'lucide-react';

interface WeatherIconProps extends React.SVGAttributes<SVGElement> {
  iconName: string;
}

const iconMap: { [key: string]: Icon } = {
  sunny: Sun,
  'partly cloudy': CloudSun,
  cloudy: Cloud,
  rainy: CloudRain,
  drizzle: CloudDrizzle,
  thunderstorm: CloudLightning,
  snow: CloudSnow,
  windy: Wind,
  hot: ThermometerSun,
  cold: ThermometerSnowflake,
  default: Cloud, // Default icon if no match
};


export function WeatherIcon({ iconName, className, ...props }: WeatherIconProps) {
  const IconComponent = iconMap[iconName?.toLowerCase()] || iconMap.default;
  return <IconComponent className={className} {...props} />;
}
