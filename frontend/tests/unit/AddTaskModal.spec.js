import { mount, shallowMount } from "@vue/test-utils";
import AddTaskModal from "@/components/AddTaskModal.vue";

describe("AddTaskModal.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(AddTaskModal);
    wrapper.vm.$refs.modal.hide = jest.fn();
  });

  it("Emits 'add-task' event with correct data when form is submitted", async () => {
    wrapper.setData({
      editedTask: {
        title: "Test Task",
        description: "Test Description",
      },
    });

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("add-task")).toHaveLength(1);
    expect(wrapper.emitted("add-task")[0][0].title).toEqual("Test Task");
    expect(wrapper.emitted("add-task")[0][0].description).toEqual(
      "Test Description"
    );
    expect(wrapper.emitted("add-task")[0][0].status).toEqual("open");
  });

  it("Hides the modal after successful task addition", async () => {
    wrapper.setData({
      editedTask: {
        title: "Test Task",
        description: "Test Description",
      },
    });

    await wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$refs["modal"].hide).toHaveBeenCalled();
  });

  it("Does not emit 'add-task' event when form is submitted with invalid data", async () => {
    wrapper = shallowMount(AddTaskModal);

    wrapper.setData({
      editedTask: {
        title: "", // Invalid title
        description: "", // Invalid description
      },
    });

    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("add-task")).toBeUndefined();

    wrapper.setData({
      editedTask: {
        title: "", // Invalid title
        description: "Test Description",
      },
    });

    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("add-task")).toBeUndefined();

    wrapper.setData({
      editedTask: {
        title: "Test Title",
        description: "", // Invalid description
      },
    });

    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("add-task")).toBeUndefined();
  });
});
