/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 20:14:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-19 00:58:27
 * @FilePath: /vue3-vite-test/src/pages/demos/components/modal-test/index.tsx
 * @Description: teleport demo
 */

import DemoWrapper from "@/components/demo-wrapper";
import useBoolean from "@/hooks/useBoolean";
import { Button } from "ant-design-vue";
import { defineComponent, Teleport } from "vue";
import WModal from "./components/modal";

const ModalDemo = defineComponent({
  setup(props) {
    const { bool: visible, toggle } = useBoolean();

    return () => (
      <DemoWrapper title="Teleport test">
        <Button onClick={toggle}>打开modal</Button>
        <WModal
          v-model:visible={visible.value}
          v-slots={{
            title: () => "这是一个弹窗title",
            footer: () => "这是一个弹窗footer",
          }}
        >
          <div>这是一个弹框的测试</div>
        </WModal>
      </DemoWrapper>
    );
  },
});

export default ModalDemo;
