/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 20:23:44
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-19 00:54:25
 * @FilePath: /vue3-vite-test/src/pages/demos/components/modal-test/components/modal/index.tsx
 * @Description: modal demo by teleport
 */

import useBoolean from "@/hooks/useBoolean";
import CloseOutlined from "@ant-design/icons-vue/CloseOutlined";
import { getPropsSlot } from "@/utils/props-utils";
import { defineComponent, Teleport, toRefs, watch } from "vue";

import "./index.scss";

const defineWModalProps = () => ({
  wrapperElement: {
    default: "body",
    type: String,
  },
  visible: {
    default: false,
    type: Boolean,
  },
  cancel: {
    type: Function as () => void,
  },
});

const prefixCls = "w-modal";

const WModal = defineComponent({
  name: "VModal",
  props: defineWModalProps(),
  emits: ["update:visible"],
  setup(props, { slots, emit }) {
    const { wrapperElement, visible } = toRefs(props);
    const title = getPropsSlot(slots, props, "title"); // 头部title
    const footer = getPropsSlot(slots, props, "footer"); // 尾部footer
    const defaultSlot = getPropsSlot(slots, props, "default");

    const { bool: modalVisible } = useBoolean();

    watch(visible, (value) => {
      modalVisible.value = value;
    });

    const handleCancel = (e: MouseEvent) => {
      emit("update:visible");
    };

    return () => (
      <Teleport to={wrapperElement.value} disabled={!modalVisible.value}>
        {modalVisible.value && (
          <div class={prefixCls} onClick={handleCancel}>
            <div
              class={`${prefixCls}-wrapper`}
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
            >
              {title && (
                <div class={`${prefixCls}-title`}>
                  {title}
                  <CloseOutlined class="close" onClick={handleCancel}>
                    X
                  </CloseOutlined>
                </div>
              )}
              {defaultSlot && (
                <div class={`${prefixCls}-body`}>{defaultSlot}</div>
              )}
              {footer && <div class={`${prefixCls}-footer`}>{footer}</div>}
            </div>
          </div>
        )}
      </Teleport>
    );
  },
});

export default WModal;
