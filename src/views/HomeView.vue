<template>
  <div>
    <!-- props받는 것 연습 -->
    <!-- {{ name }} -->
    <!-- <HeeJung></HeeJung> -->

    <!-- emit 연습 -->
    <form action="">
      <InputField :name="name" @update-name="updateName"/>
      <br><button>Submit</button>
    </form>
    <!-- 부모컴포넌트의 name -->
    {{name}}
  </div>
</template>

<script>
// @ is an alias to /src
import HeeJung from "@/components/HeeJung.vue";
import InputField from "@/components/inputField.vue";

export default {
  components: {
    HeeJung,
    InputField
  },

  data() {
    return {
      name: "",
    }
  },
  methods : {
    updateName(name) {
      this.name = name;
    }
    }
  
};
</script>
