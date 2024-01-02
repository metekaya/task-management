import api from "./api";

export const fetchTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data.tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (newTask) => {
  try {
    const response = await api.post("/tasks", newTask);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const moveToNextStatus = async (task, nextStatus) => {
  try {
    const response = await api.put(`/tasks/${task.id}`, { status: nextStatus });
    return response.data;
  } catch (error) {
    console.error("Error moving task to the next status", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task", error);
    throw error;
  }
};
