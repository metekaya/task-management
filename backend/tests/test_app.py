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


if __name__ == '__main__':
    unittest.main()
