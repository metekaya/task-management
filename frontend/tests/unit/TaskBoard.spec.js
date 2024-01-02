import { mount } from "@vue/test-utils";
import TaskBoard from "@/components/TaskBoard.vue";
import TaskGroup from "@/components/TaskGroup.vue";
import AddTaskModal from "@/components/AddTaskModal.vue";
import {
  fetchTasks,
  addTask,
  moveToNextStatus,
  deleteTask,
} from "@/services/taskService";

jest.mock("@/services/taskService", () => ({
  fetchTasks: jest.fn().mockResolvedValue([
    {
      id: 1,
      title: "Mocked Task 1",
      description: "Description for Mocked Task 1",
      status: "open",
    },
    {
      id: 2,
      title: "Mocked Task 2",
      description: "Description for Mocked Task 2",
      status: "testing",
    },
    {
      id: 3,
      title: "Mocked Task 3",
      description: "Description for Mocked Task 3",
      status: "done",
    },
    {
      id: 4,
      title: "Mocked Task 4",
      description: "Description for Mocked Task 4",
      status: "unknown",
    },
  ]),
  addTask: jest.fn().mockResolvedValue({
    id: 5,
    title: "New Task",
    description: "Description for New Task",
    status: "open",
  }),
  moveToNextStatus: jest.fn().mockResolvedValue({
    id: 1,
    title: "Mocked Task 1",
    description: "Description for Mocked Task 1",
    status: "testing",
  }),
  deleteTask: jest.fn().mockResolvedValue({
    id: 1,
    title: "Mocked Task 1",
    description: "Description for Mocked Task 1",
    status: "open",
  }),
}));

describe("TaskBoard.vue", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(TaskBoard);
    await wrapper.vm.$nextTick();
  });

  it("should render the TaskBoard component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should fetch tasks on mounted", () => {
    expect(fetchTasks).toHaveBeenCalled();
  });

  it("should render TaskGroup components for each task status", () => {
    const taskGroups = wrapper.findAllComponents(TaskGroup);
    expect(taskGroups.length).toBe(3);
    expect(taskGroups[0].props("status")).toBe("open");
    expect(taskGroups[1].props("status")).toBe("testing");
    expect(taskGroups[2].props("status")).toBe("done");
  });

  it("should render the AddTaskModal component", () => {
    const addTaskModal = wrapper.findComponent(AddTaskModal);
    expect(addTaskModal.exists()).toBeTruthy();
  });

  it('should call addTask() when the AddTaskModal emits the "add-task" event', async () => {
    const newTask = {
      title: "New Task",
      description: "This is a new task",
      status: "open",
    };
    const addTaskModal = wrapper.findComponent(AddTaskModal);
    addTaskModal.vm.$emit("add-task", newTask);
    await wrapper.vm.$nextTick();
    expect(addTask).toHaveBeenCalledTimes(1);
    expect(addTask).toHaveBeenCalledWith(newTask);
  });

  it('should call moveToNextStatus() when the TaskGroup emits the "move-to-next-status" event', async () => {
    const task = {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "open",
    };
    const taskGroup = wrapper.findComponent(TaskGroup);
    taskGroup.vm.$emit("move-to-next-status", task);
    await wrapper.vm.$nextTick();
    expect(moveToNextStatus).toHaveBeenCalledTimes(1);
    expect(moveToNextStatus).toHaveBeenCalledWith(task, "testing");
  });

  it('should call deleteTask() when the TaskGroup emits the "delete-task" event', async () => {
    const task = {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "open",
    };
    const taskGroup = wrapper.findComponent(TaskGroup);
    taskGroup.vm.$emit("delete-task", task);
    await wrapper.vm.$nextTick();
    expect(deleteTask).toHaveBeenCalledTimes(1);
    expect(deleteTask).toHaveBeenCalledWith(task.id);
  });
});
