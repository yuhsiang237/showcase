import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DModal from "@/components/DModal.vue";

describe("DModal", () => {
  it("should show modal when openModal is called", async () => {
    const wrapper = mount(DModal);

    // Modal 初始是隱藏的
    expect(wrapper.classes()).not.toContain("show");

    // 呼叫 openModal 方法
    await wrapper.vm.openModal();

    // 檢查是否顯示 modal
    expect(wrapper.classes()).toContain("show");
  });

  it("should hide modal and emit close event when closeModal is called", async () => {
    const wrapper = mount(DModal);

    // 先打開 modal
    await wrapper.vm.openModal();

    // 檢查 modal 是否顯示
    expect(wrapper.classes()).toContain("show");

    // 呼叫 closeModal 方法
    await wrapper.vm.closeModal();

    // 檢查 modal 是否隱藏
    expect(wrapper.classes()).not.toContain("show");

    // 檢查是否觸發了 "close" 事件
    const emitted = wrapper.emitted();
    expect(emitted.close).toBeTruthy();
    expect(emitted.close.length).toBe(1); // 確保事件被觸發一次
  });
});
