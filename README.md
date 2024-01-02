<h1 align="center">
    Task Management App
</h1>
The Task Management App is built with a Vue.js frontend and a Flask backend, this tool allows users to efficiently manage their tasks with ease.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed **Node.js** If not, you can download it from [here](https://nodejs.org/).
- **Python:** For the backend, you'll need Python installed. You can download it from [here](https://www.python.org/).
- Ensure `pip`, the Python package installer, is installed. This usually comes with Python, but you may need to check during the Python installation process.

- **Docker:** If you plan to run the project using Docker, ensure Docker is installed. You can download it from [docker.com](https://www.docker.com/).

## Docker Installation

1. Clone the repository using the following command:

```bash
git clone https://github.com/metekaya/task-management.git
```

2. Navigate to the `root` folder and install the necessary dependencies:

```bash
cd task-management
docker-compose up --build
```

4. The application should now be accessible. Open your browser and go to:

- Frontend: [http://localhost:8080/](http://localhost:8080/)
- Backend: [http://localhost:5000/](http://localhost:5000/)

## Manual Installation

1. Clone the repository using the following command:

```bash
git clone https://github.com/metekaya/task-management.git
```

2. Navigate to the `frontend` folder and install the necessary dependencies:

```bash
cd frontend
npm install
```

- **Optional:** You may create a `.env` file with `.env.example` format and change the backend base url. But you also need to update the backend port for that to work. Currently app is designed to run at default `URL` and `port` if `VUE_APP_API_BASE_URL` is not defined. So **_you don't have to change anything_**.

3. Run the frontend:

```bash
npm run serve
```

4. Open a new terminal or split the current one (Ctrl+Shift+5 on VS Code) and navigate to the `backend` folder:

```bash
cd backend
```

5. Create a virtual environment and activate it. Then install the necessary dependencies.

```bash
python -m venv env
env/Scripts/activate
pip install -r requirements.txt
```

6. Run the backend:

```bash
python app.py
```

7. The application should now be accessible. Open your browser and go to:

- Frontend: [http://localhost:8080/](http://localhost:8080/)
- Backend: [http://localhost:5000/](http://localhost:5000/)

## Testing

App includes a comprehensive suite of unit tests for both the frontend and backend components.

### Frontend Tests

To run the frontend unit tests, use the following command in the `frontend` directory:

```bash
npm run test:unit
```

or to run them silently

```bash
npm run test:unit -- --silent
```

### Backend Tests

Backend tests are written using Python's `unittest` framework. To run the backend unit tests, use the following command in the `backend` directory:

```bash
python -m unittest discover tests
```
