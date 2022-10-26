<script setup name="CadreAnalysis">
const data = ref([
  { label: '36岁以下', value: 4461 },
  { label: '36-51岁', value: 16858 },
  { label: '51岁以上', value: 14575 }
])

const total = computed(() => {
  let value = 0
  data.value.forEach(item => {
    value += item.value
  })
  return value
})

const percentage = (value) => {
  return (value / total.value * 100).toFixed(1)
}
</script>

<template>
  <PanelV3
    class="cadre-analysis"
    title="干部队伍分析"
  >
    <div class="cadre-analysis-content">
      <div class="sex-info male">
        <div class="label">男性</div>
        <div class="icon">
          <SvgIcon icon-class="sex-male" />
        </div>
        <div class="percentage">78.2%</div>
        <div class="number">人数：28060人</div>
      </div>
      <div class="sex-info female">
        <div class="label">女性</div>
        <div class="icon">
          <SvgIcon icon-class="sex-female" />
        </div>
        <div class="percentage">21.8%</div>
        <div class="number">人数：7834人</div>
      </div>

      <div class="age-info">
        <div
          v-for="item in data"
          class="line"
        >
          <div class="label">{{ item.label }}</div>
          <div class="percentage-bar">
            <div class="bar">
              <div
                class="percentage"
                :style="{ width: percentage(item.value) + '%' }"
              ></div>
            </div>
          </div>
          <div class="value">
            {{ item.value }}
            <span class="unit">人</span>
          </div>
          <div class="percentage-number">
            占比<span class="value">{{ percentage(item.value) }}%</span>
          </div>
        </div>
      </div>
    </div>
  </PanelV3>
</template>

<style lang="scss" scoped>
.cadre-analysis {
  .cadre-analysis-content {
    display: flex;
    height: 100%;

    .sex-info {
      display: flex;
      flex-direction: column;
      width: 25%;
      height: 100%;
      justify-content: center;

      .label,
      .number {
        color: #59709A;
        font-size: 14px;
        text-align: center;
      }

      .icon {
        margin: -10px;
        font-size: 90px;
        text-align: center;
      }

      .percentage {
        font-size: 28px;
        text-align: center;
      }

      &.male {
        .percentage {
          color: #188DFE;
        }
      }

      &.female {
        .percentage {
          color: #FD52E5;
        }
      }
    }

    .age-info {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;

      .line {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: 50% 50%;
        grid-template-areas:
          'label label label'
          'bar value percentage';
        width: 100%;
        height: 33.3%;

        &>div {
          display: flex;
          align-items: center;
        }

        .label {
          grid-area: label;

          color: #fff;
        }

        .percentage-bar {
          margin-right: 5px;


          .bar {
            width: 100%;
            height: 10px;
            background-color: #0B3081;
            border-radius: 5px;
            overflow: hidden;

            .percentage {
              height: 100%;
              background-color: #06B0FE;
              border-radius: 5px;
            }
          }

        }

        .value {
          justify-content: center;
          font-size: 18px;
          color: #fff;

          .unit {
            font-size: 12px;
          }
        }

        .percentage-number {
          justify-content: center;
          color: #fff;
          font-size: 12px;

          .value {
            margin-left: 5px;
            color: #B1E910;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>