/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 16:51:50
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 14:18:44
 * @FilePath: /vue3-vite-test/src/components/TodoList.tsx
 * @Description: todolists
 */
import { ref, defineComponent, watch, defineProps } from "vue";
import useProvide from "../hooks/useProvide";
import HelloWorld from "./HelloWorld";

const TodoList = defineComponent({
  setup(props) {
    const inputValue = ref<string>("");
    const mappings = ref<Array<string>>([]);

    const provider = useProvide(true);

    const inputRef = ref(null);

    const handleNumberAdd = () => {
      mappings.value.push(inputValue.value);
    };

    const handleDelete = (index: number) => {
      mappings.value.splice(index, 1);
    };

    const renderData = () =>
      mappings.value.map((data, index) => {
        return (
          <p key={data}>
            {data}
            <a-button onClick={() => handleDelete(index)}>delete</a-button>
          </p>
        );
      });

    provider({
      test: mappings,
      testweng: 1,
    });

    return () => (
      <div class="todolist">
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
        <div class="header">
          <div>{inputValue.value}</div>
          <a-input ref={inputRef} v-model:value={inputValue.value}></a-input>
          <a-button onClick={handleNumberAdd}>click</a-button>
          {renderData()}
        </div>
      </div>
    );
  },
});

export default TodoList;
