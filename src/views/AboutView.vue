<template>
  <div class="about">
    <h1>This is an about page~~</h1>
    <Heejung :title="title" :name="name">
      <template v-slot:header="props">
        <p>첫번째 슬롯 {{props.hee}}</p>
        <!-- 위 두줄과 같은 기능 -->
      </template>
      <template #default>
        <p>디폴트 슬롯</p>
      </template>
    </Heejung>
  </div>
</template>

<script>
import Heejung from "@/components/HeeJung.vue";

export default {
  components: {
    Heejung,
  },
  data() {
    return {
      title: "props받아서 재선언한 타이틀",
      name: "props받아서 재선언한 이름",
    };
  },
};
</script>
