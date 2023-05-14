<template>
  <div>
    <label for="">Name</label>
    <input type="text" :value="name" 
    @input="updateName"/>
  </div>
</template>

<script>
    export default {
        props : {
            name : {
                type : String,
                required : true
            }
        },
        methods : {
            updateName(e) {
                console.log(e.target.value);
                //자식 value에서 부모로 value 받아오기
                //자식 컴포넌트에서 update-name이라는 메서드로 e.target.value 받아오기
                this.$emit('update-name', e.target.value);
            }
        }
    }
</script>