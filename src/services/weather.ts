/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Represents current weather information.
 */
export interface CurrentWeather {
  /**
   * The temperature in Fahrenheit.
   */
  temperatureFahrenheit: number;
  /**
   * The humidity percentage.
   */
  humidity: number;
  /**
   * The wind speed in miles per hour.
   */
  windSpeed: number;
  /**
   * A brief description of the weather conditions (e.g., "Sunny", "Cloudy").
   */
  description: string;
  /**
   * An icon representing the weather conditions.
   */
  icon: string;
}

/**
 * Represents hourly weather forecast information.
 */
export interface HourlyForecast {
  /**
   * The hour of the forecast (e.g., "12:00 PM").
   */
  hour: string;
  /**
   * The temperature in Fahrenheit.
   */
  temperatureFahrenheit: number;
  /**
   * An icon representing the weather conditions.
   */
  icon: string;
}

/**
 * Represents daily weather forecast information.
 */
export interface DailyForecast {
  /**
   * The day of the forecast (e.g., "Monday").
   */
  day: string;
  /**
   * The high temperature in Fahrenheit.
   */
  highTemperatureFahrenheit: number;
  /**
   * The low temperature in Fahrenheit.
   */
  lowTemperatureFahrenheit: number;
  /**
   * An icon representing the weather conditions.
   */
  icon: string;
}

/**
 * Asynchronously retrieves current weather conditions for a given location.
 *
 * @param location The location for which to retrieve weather data.
 * @returns A promise that resolves to a CurrentWeather object.
 */
export async function getCurrentWeather(location: Location): Promise<CurrentWeather> {
  // TODO: Implement this by calling an external weather API.
  return {
    temperatureFahrenheit: 75,
    humidity: 60,
    windSpeed: 5,
    description: 'Partly Cloudy',
    icon: 'cloudy',
  };
}

/**
 * Asynchronously retrieves hourly weather forecast for a given location.
 *
 * @param location The location for which to retrieve weather data.
 * @returns A promise that resolves to an array of HourlyForecast objects.
 */
export async function getHourlyForecast(location: Location): Promise<HourlyForecast[]> {
  // TODO: Implement this by calling an external weather API.
  return [
    {
      hour: '12:00 PM',
      temperatureFahrenheit: 77,
      icon: 'sunny',
    },
    {
      hour: '1:00 PM',
      temperatureFahrenheit: 78,
      icon: 'sunny',
    },
    {
      hour: '2:00 PM',
      temperatureFahrenheit: 78,
      icon: 'sunny',
    },
    {
      hour: '3:00 PM',
      temperatureFahrenheit: 77,
      icon: 'cloudy',
    },
    {
      hour: '4:00 PM',
      temperatureFahrenheit: 76,
      icon: 'cloudy',
    },
    {
      hour: '5:00 PM',
      temperatureFahrenheit: 75,
      icon: 'cloudy',
    },
    {
      hour: '6:00 PM',
      temperatureFahrenheit: 74,
      icon: 'cloudy',
    },
    {
      hour: '7:00 PM',
      temperatureFahrenheit: 73,
      icon: 'cloudy',
    },
    {
      hour: '8:00 PM',
      temperatureFahrenheit: 72,
      icon: 'cloudy',
    },
    {
      hour: '9:00 PM',
      temperatureFahrenheit: 71,
      icon: 'cloudy',
    },
    {
      hour: '10:00 PM',
      temperatureFahrenheit: 70,
      icon: 'cloudy',
    },
    {
      hour: '11:00 PM',
      temperatureFahrenheit: 69,
      icon: 'cloudy',
    },
    {
      hour: '12:00 AM',
      temperatureFahrenheit: 68,
      icon: 'cloudy',
    },
    {
      hour: '1:00 AM',
      temperatureFahrenheit: 67,
      icon: 'cloudy',
    },
    {
      hour: '2:00 AM',
      temperatureFahrenheit: 66,
      icon: 'cloudy',
    },
    {
      hour: '3:00 AM',
      temperatureFahrenheit: 65,
      icon: 'cloudy',
    },
    {
      hour: '4:00 AM',
      temperatureFahrenheit: 64,
      icon: 'cloudy',
    },
    {
      hour: '5:00 AM',
      temperatureFahrenheit: 63,
      icon: 'cloudy',
    },
    {
      hour: '6:00 AM',
      temperatureFahrenheit: 62,
      icon: 'cloudy',
    },
    {
      hour: '7:00 AM',
      temperatureFahrenheit: 63,
      icon: 'cloudy',
    },
    {
      hour: '8:00 AM',
      temperatureFahrenheit: 64,
      icon: 'cloudy',
    },
    {
      hour: '9:00 AM',
      temperatureFahrenheit: 65,
      icon: 'cloudy',
    },
    {
      hour: '10:00 AM',
      temperatureFahrenheit: 66,
      icon: 'cloudy',
    },
    {
      hour: '11:00 AM',
      temperatureFahrenheit: 67,
      icon: 'cloudy',
    },
  ];
}

/**
 * Asynchronously retrieves 7-day weather forecast for a given location.
 *
 * @param location The location for which to retrieve weather data.
 * @returns A promise that resolves to an array of DailyForecast objects.
 */
export async function get7DayForecast(location: Location): Promise<DailyForecast[]> {
  // TODO: Implement this by calling an external weather API.
  return [
    {
      day: 'Monday',
      highTemperatureFahrenheit: 80,
      lowTemperatureFahrenheit: 65,
      icon: 'sunny',
    },
    {
      day: 'Tuesday',
      highTemperatureFahrenheit: 78,
      lowTemperatureFahrenheit: 63,
      icon: 'sunny',
    },
    {
      day: 'Wednesday',
      highTemperatureFahrenheit: 75,
      lowTemperatureFahrenheit: 60,
      icon: 'cloudy',
    },
    {
      day: 'Thursday',
      highTemperatureFahrenheit: 72,
      lowTemperatureFahrenheit: 58,
      icon: 'rainy',
    },
    {
      day: 'Friday',
      highTemperatureFahrenheit: 70,
      lowTemperatureFahrenheit: 55,
      icon: 'rainy',
    },
    {
      day: 'Saturday',
      highTemperatureFahrenheit: 73,
      lowTemperatureFahrenheit: 57,
      icon: 'cloudy',
    },
    {
      day: 'Sunday',
      highTemperatureFahrenheit: 76,
      lowTemperatureFahrenheit: 62,
      icon: 'sunny',
    },
  ];
}
