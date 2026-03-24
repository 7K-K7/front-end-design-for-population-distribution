<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
  <div class="contents">
    <div class="contetn_left">
      <div class="pagetab">
        <!-- <div class="item">实时监测</div> -->
        
      </div>
      <ItemWrap class="contetn_left-top contetn_lr-item" title="人口总览">
        <LeftTop ref="leftTop"/>
    
      </ItemWrap>
      <ItemWrap class="contetn_left-center contetn_lr-item" title="男女比例">
        <LeftCenter ref="leftCenter" />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="信息更新提醒"
        style="padding: 0 10px 16px 10px"
      >
        <LeftBottom ref="leftBottom" />
      </ItemWrap>
    </div>
    <div class="contetn_center">
      <CenterMap class="contetn_center_top" @regionChange="handleRegionChange" />
      <ItemWrap class="contetn_center-bottom" title="人口老龄化">
        <CenterBottom ref="centerBottom" />
      </ItemWrap>
    </div>
    <div class="contetn_right">
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="人口密度变化"
      >
        <RightTop ref="rightTop" />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="人口排名(TOP8)"
        style="padding: 0 10px 16px 10px"
      >
        <RightCenter ref="rightCenter" />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="数据统计图 "
      >
        <RightBottom ref="rightBottom" />
      </ItemWrap>
    </div>
  </div>
</template>

<script>
import LeftTop from './left-top.vue'
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";

export default {
  components: {
    LeftTop,
    LeftCenter,
    LeftBottom,
    CenterMap,
    RightTop,
    RightCenter,
    RightBottom,
    CenterBottom,
  },
  data() {
    return {
    
    };
  },
  filters: {
    numsFilter(msg) {
      return msg || 0;
    },
  },
  created() {
  },

  mounted() {},
  methods: {
    handleRegionChange() {
      // 通知所有子组件更新数据
      if (this.$refs.leftTop) this.$refs.leftTop.getData();
      if (this.$refs.leftCenter) this.$refs.leftCenter.getData();
      if (this.$refs.leftBottom) this.$refs.leftBottom.getData();
      if (this.$refs.centerBottom) this.$refs.centerBottom.getData();
      if (this.$refs.rightTop) this.$refs.rightTop.getData();
      if (this.$refs.rightCenter) this.$refs.rightCenter.getData();
      if (this.$refs.rightBottom) this.$refs.rightBottom.getData();
    }
  },
};
</script>
<style lang="scss" scoped>
// 内容
.contents {
  .contetn_left,
  .contetn_right {
    width: 540px;
    box-sizing: border-box;
    // padding: 16px 0;
  }

  .contetn_center {
    width: 720px;
  }

  //左右两侧 三个块
  .contetn_lr-item {
    height: 310px;
  }

  .contetn_center_top {
    width: 100%;
  }

  // 中间
  .contetn_center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .contetn_center-bottom {
    height: 315px;
  }

  //左边 右边 结构一样
  .contetn_left,
  .contetn_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

  
  }
}


@keyframes rotating {
    0% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1);
    }
    50% {
        -webkit-transform: rotate(180deg) scale(1.1);
        transform: rotate(180deg) scale(1.1);
    }
    100% {
        -webkit-transform: rotate(360deg) scale(1);
        transform: rotate(360deg) scale(1);
    }
}
</style>
