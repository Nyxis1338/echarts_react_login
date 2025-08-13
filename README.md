# Temperature Visualization Project

This project is a web application that visualizes the highest monthly temperatures of 30 provinces in China over the last 10 years. It consists of a front-end built with React and Ant Design, and a back-end powered by Flask.

## Project Structure

```
echarts_react
├── front
│   ├── src
│   │   ├── components
│   │   │   └── ChartView.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   ├── package.json
│   └── README.md
├── back
│   ├── app.py
│   ├── data
│   │   └── sales.json
└── README.md
```

## Data Source

The temperature data for the 30 provinces over the last 10 years can be obtained through:

1. Web scraping from weather data websites such as the China Meteorological Administration or other weather data providers.
2. If real data is not available, a mock dataset can be generated for testing purposes. Below is an example of the structure of the mock data:

```json
{
  "data": [
    {
        "product": "手机",
        "month":[
            "一月", "二月", "三月", "四月", "五月", "六月",
            "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        "monthly_sales": [120, 135, 150, 160, 170, 180, 175, 165, 155, 145, 140, 130]
    }
  ]
}
```

## Frontend

The front-end application is built using React and Ant Design. It includes a menu for selecting different provinces and visualizes the temperature data using ECharts.

### Key Files

- **front/src/components/ChartView.jsx**: Displays temperature data using ECharts.
- **front/src/App.jsx**: Main application component that sets up the Ant Design menu and manages state.


## Backend

The back-end is built with Flask and serves the temperature data through an API.

### Key Files

- **back/app.py**: Main entry point for the Flask application, defining API endpoints.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd echarts_react
   ```

2. **Set up the backend**:
   - Navigate to the `back` directory.
   - Install the required packages:
     ```
     pip install flask flask-cors
     ```
   - Run the Flask application:
     ```
     python app.py
     ```

3. **Set up the frontend**:
   - Navigate to the `front` directory.
   - Install the required packages:
     ```
     npm install --legacy-peer-deps
     ```
     有依赖冲突
     
   - Start the React application:
     ```
     npm start
     ```

4. **Access the application**:
   Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.