# Portfolio Project

## Overview

This portfolio project is a modern, interactive showcase built with Angular 18 and Tailwind CSS. It features an animated canvas for enhanced visual appeal and uses Tailwind CSS for responsive and visually appealing design. The project demonstrates various skills and technologies, including modern front-end development practices and creative animations.

## Features

- **Angular 18**: Utilizes the latest Angular features and improvements.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive and customizable designs.
- **Canvas Animations**: Provides engaging and dynamic visual effects.
- **Responsive Design**: Ensures the application looks great on all devices.
- **Dynamic Content**: Showcases a variety of content and projects interactively.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/portfolio-project.git
    ```

2. Navigate into the project directory:

    ```bash
    cd portfolio-project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

### Tailwind CSS

Ensure Tailwind CSS is set up correctly in your Angular project by following the official [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/guides/angular).

### Canvas Animation

For the canvas animations, configure and initialize your animations in a component:

```typescript
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas-animation',
  templateUrl: './canvas-animation.component.html',
  styleUrls: ['./canvas-animation.component.css']
})
export class CanvasAnimationComponent implements AfterViewInit {

  ngAfterViewInit() {
    const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    // Initialize your canvas animations here
    if (ctx) {
      // Animation code
    }
  }
}
```
## Usage

1. **Start the development server:**

    ```bash
    ng serve
    ```

2. **Navigate to the application in your browser:**

    ```
    http://localhost:4200
    ```

## Modules

- Core Module: Contains core services and components.
- Shared Module: Includes shared components and utilities.
- Portfolio Module: Manages all portfolio-related features and components.

## Routes

- Home: / - Displays the main landing page with an overview of the portfolio.
- Projects: /projects - Showcases various projects and their details.
- Contact: /contact - Provides a contact form for inquiries

## Development

- Angular CLI: Use Angular CLI for development tasks including running, building, and testing the application.
- Tailwind CSS: Utilize Tailwind CSS for styling and layout.
- Canvas Animations: Implement dynamic animations on Canvas for a more engaging user experience.
- 
## Contributing

Contributions are welcome! You can contribute by:

- Reporting bugs or suggesting new features.
- Submitting pull requests for improvements or fixes.
- Providing feedback or ideas for enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact [kamalashrafmo@gmail.com](mailto:kamalashrafmo@gmail.com).     
