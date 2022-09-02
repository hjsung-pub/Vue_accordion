<template>
  <ul class="acdn-list">
    <li v-for="(item, index) in accordionList" :key="index">
      <button type="button" class="acdn-title" :class="{ selected: visible(index) }" @click="open(index)">
        <span>{{ item.title }}</span>
      </button>
      <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
        <div v-show="visible(index)" class="acdn-content">
          <p>{{ item.content }}</p>
        </div>
      </transition>
    </li>
  </ul>
</template>

<script>
export default {
  props: { },
  data() {
    return {
      accordionList: [
        {
          title: '질문 내용이 들어갑니다.',
          content: '답변 내용이 들어갑니다.',
        },
        {
          title: '안녕하세요. 뷰 프로젝트 첫번째 아코디언 메뉴 구현하기 입니다. 잘 동작이 되는지 궁금합니다.',
          content: '네^^ 동작이 잘 되고 있네요.',
        },
        {
          title: '하나의 항목이 열리고 다른 항목을 클릭 했을 때 다른 항목은 닫기나요??',
          content:
            '네. 클릭 시 하나만 오픈이 됩니다.',
        },
      ],
      targetIndex: null,
    };
  },
  methods: {
    visible(index) {
      return this.targetIndex == index;
    },
    open(index) {
      if (this.visible(index)) {
        this.targetIndex = null;
      } else {
        this.targetIndex = index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    end(el) {
      el.style.height = '';
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
