import unittest
from app import app


class TestApp(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_get_tasks(self):
        response = self.app.get('/tasks')
        data = response.get_json()
        self.assertEqual(response.status_code, 200)
        self.assertIn('tasks', data)

    def test_post_task(self):
        task = {
            "id": 1,
            "title": "Task 1",
            "description": "Description for Task 1",
            "status": "open"
        }
        response = self.app.post('/tasks', json=task)
        data = response.get_json()
        self.assertEqual(response.status_code, 200)
        self.assertIn('task', data)


if __name__ == '__main__':
    unittest.main()
