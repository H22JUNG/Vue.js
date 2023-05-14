<template>
    <div>
        <h1>{{ title }} </h1>
        <slot name="header" :hee="hee"></slot>
        <p>{{ name }}</p>
        <slot></slot>
        <button @click="updateName">change</button>
    </div>
</template>


<script>
    export default {
        props : {
            title : {
                //타입 알아서 바꿔주는 듯
                type : Number,
                default : '디폴트 타이틀'
            },
            //1. props에서 쓰는 이름은 다른 곳에서 쓰면 안됨
            name : {  
              type : String,
              default : '디폴트 네임'
            }
        },

        data() {
            return {
                //2. 주석처리
                //name : 'heejung'

                //슬롯에 쓰는 데이터 
                hee: 'jung'
            }
        },

        methods : {
            //name을 props에서 선언했기 때문에(부모에서 보내주는 데이터)
            //자식쪽에서 바꿀 수 없음
            updateName() {
                this.name = 'heejung update';
                console.log('바뀜');
            }
            //바꾸고 싶을 땐 부모쪽으로 바꿔달라고 요청해야 함 => emit
        }
    }
</script>