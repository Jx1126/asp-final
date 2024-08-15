declare module 'react-slick' {
    import * as React from 'react';
  
    interface SliderProps {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      arrows?: boolean;
      autoplay?: boolean;
      pauseOnHover?: boolean;
      // Add any other props that react-slick supports as needed
    }
  
    export default class Slider extends React.Component<SliderProps> {}
  }
  