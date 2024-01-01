from flask import Flask, jsonify, request
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)

CORS(app)

tasks = [
    {
        "id": 1,
        "title": "Task 1",
        "description": "Description for Task 1",
        "status": "open"
    },
    {
        "id": 2,
        "title": "Task 2",
        "description": "Description for Task 2",
        "status": "testing"
    },
    {
        "id": 3,
        "title": "Task 3",
        "description": "Description for Task 3",
        "status": "done"
    },
]


class TaskListResource(Resource):
    def get(self):
        return jsonify({"tasks": tasks})

    def post(self):
        data = request.get_json()
        new_task = {
            "id": len(tasks) + 1,
            "title": data["title"],
            "description": data["description"],
            "status": "open",
        }
        tasks.append(new_task)
        return jsonify({"message": "Task added successfully", "task": new_task})

    def delete(self, task_id):
        task_idx = next((idx for (idx, task) in enumerate(
            tasks) if task["id"] == int(task_id)), None)

        if task_idx is not None:
            deleted_task = tasks.pop(task_idx)
            return jsonify({"message": "Task deleted successfully", "task": deleted_task})

        return jsonify({"message": "Task not found"}), 404


api.add_resource(TaskListResource, '/tasks', '/tasks/<int:task_id>')

if __name__ == '__main__':
    app.run(debug=True)
