import unittest
from app import app


class TestApp(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.mock_task = {
            "id": 1,
            "title": "Task 1",
            "description": "Description for Task 1",
            "status": "open"
        }
        self.mock_task_delete = {
            "id": 2,
            "title": "Task 2",
            "description": "Description for Task 2",
            "status": "open"
        }

    def test_get_tasks(self):
        response = self.app.get('/tasks')
        data = response.get_json()
        self.assertEqual(response.status_code, 200)
        self.assertIn('tasks', data)

    def test_post_task(self):
        response = self.app.post('/tasks', json=self.mock_task)
        data = response.get_json()

        self.assertEqual(response.status_code, 200)
        self.assertIn('task', data)
        self.assertIn('message', data)
        self.assertEqual(data['message'], 'Task added successfully')

    def test_update_task(self):
        response = self.app.put(
            f'/tasks/{self.mock_task["id"]}', json={"status": "testing"})
        data = response.get_json()

        self.assertEqual(response.status_code, 200)
        self.assertIn('task', data)
        self.assertIn('message', data)
        self.assertEqual(data['message'], 'Task status updated successfully')
        self.assertEqual(data['task']['status'], 'testing')

    def test_delete_task(self):
        post_response = self.app.post('/tasks', json=self.mock_task_delete)
        self.assertEqual(post_response.status_code, 200)

        delete_response = self.app.delete(
            f'/tasks/{self.mock_task_delete["id"]}')
        data = delete_response.get_json()

        self.assertEqual(delete_response.status_code, 200)
        self.assertIn('task', data)
        self.assertIn('message', data)
        self.assertEqual(data['message'], 'Task deleted successfully')


if __name__ == '__main__':
    unittest.main()
