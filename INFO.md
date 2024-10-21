



# Internship Project: Rule Engine and Real-Time Weather Monitoring System

## Overview

This project consists of two main applications developed as part of an internship assignment at **Zeotap**:

1. **Rule Engine with Abstract Syntax Tree (AST)**: A simple 3-tier rule engine application that determines user eligibility based on various attributes using a dynamic rule creation and modification system.

2. **Real-Time Weather Monitoring System**: An application that continuously monitors weather conditions in major metropolitan areas in India, retrieves data from the OpenWeatherMap API, and provides summarized insights and alerting mechanisms.

## About Zeotap

**Zeotap** is a leading data and technology company that specializes in providing data-driven solutions for businesses. The company focuses on helping organizations leverage their data to enhance customer engagement, optimize marketing strategies, and drive business growth. With a strong emphasis on data privacy and compliance, Zeotap empowers brands to make informed decisions based on high-quality, actionable insights.

## Features

### Rule Engine
- **Dynamic Rule Creation**: Create, combine, and modify rules using a user-friendly API.
- **AST Representation**: Utilizes an Abstract Syntax Tree to represent conditional rules.
- **Eligibility Evaluation**: Evaluate user eligibility based on attributes like age, department, salary, etc.

### Weather Monitoring
- **Real-Time Data Retrieval**: Fetches weather data at configurable intervals for specified cities.
- **Data Processing**: Calculates daily aggregates including average, maximum, and minimum temperatures.
- **Alerting Mechanism**: Users can define thresholds for weather conditions, triggering alerts when breached.
- **Data Storage**: Daily summaries are stored in a database for historical analysis.
- **User Dashboard**: A simple frontend interface to visualize weather data and alerts.

## Technologies Used

- **Backend**: Node.js, Express.js for server-side development.
- **Frontend**: React.js for building user interfaces in the Weather Monitoring System.
- **Database**: MongoDB or a similar NoSQL database for data storage.
- **APIs**: OpenWeatherMap API for real-time weather data.
- **Testing**: Jest and Mocha for unit testing the rule engine and weather monitoring features.

