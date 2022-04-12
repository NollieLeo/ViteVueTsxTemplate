/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 13:58:18
 * @FilePath: /vue3-vite-test/src/components/HelloWorld.tsx
 * @Description: 
 */
import { ref, onMounted, inject, computed, defineComponent, watch } from 'vue'

const Helloworld = defineComponent({
  name: 'Helloworld',
  props: ['msg'],
  setup(){
      let timer = 0;
      const currentDate = ref(new Date())
    
      const mappings:any = inject('test');
      const testweng = inject('testweng')
    
      onMounted(()=>{
        startInterval();
      })

      const localDate = computed(()=>currentDate.value.toLocaleString());
        
      const startInterval = ()=>{
        timer = setInterval(()=>{
          currentDate.value = new Date()
        },1000)
      }

      watch(mappings,(_1,_2)=>{
        console.log(_1.slice(),_2)
        console.log(testweng?.value);
      },{deep:true})

      const renderTips = () => {
          return <div>
            {mappings?.value.map((data: any,index: string | number | symbol | undefined)=><span key={index}>{data}</span>)}
          </div>
      }
    
      return () => <p>
        {localDate.value}
        {renderTips()}
      </p> 
  }
})
export default Helloworld