<!-- 建议使用element-plus的Virtualized Table 虚拟化表格来代替这个组件 -->
<template>
  <el-table
    ref="table"
    :data="data"
    :row-style="showRow"
    :row-key="getRowKeys"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    :expand-row-keys="['root']"
    class="dynamic-table"
    v-bind="$attrs"
    @expand-change="handleExpand"
    @selection-change="handleSelectionChange"
    @filter-change="filterChange"
  >
    <slot name="selection" />
    <slot name="pre-column" />

    <template
      v-for="(item, index) in columns"
      :key="item.key + '-' + index"
    >
      <!-- 多选 -->
      <el-table-column
        v-if="item.type === 'selection'"
        type="selection"
        width="42"
      />
      <!-- 拖放 -->
      <el-table-column
        v-else-if="item.type === 'draggable'"
        :label="item.label"
        :align="item.align || 'center'"
        width="42"
      >
        <svg-icon icon-class="drag" />
      </el-table-column>
      <el-table-column
        v-else-if="item.type === 'dropDown'"
        :prop="item.key"
        :label="item.label"
        :filters="filters"
        :align="item.align || 'center'"
        :filter-multiple="false"
        :column-key="item.key"
      />
      <el-table-column
        v-else
        :label="item.label"
        :type="item.type"
        :width="item.width"
        :min-width="item.minWidth"
        :fixed="item.fixed"
        :align="item.align || 'left'"
        :header-align="item.headerAlign || 'left'"
      >
        <template #default="scope">
          <slot
            :scope="scope"
            :name="item.key"
          >
            <!-- 展开行 -->
            <template v-if="item.type === 'expand'">
              <expand
                :row="scope.row"
                :index="scope.$index + 1"
                :column="columns"
                :expand-columns="expandColumns"
              />
            </template>

            <!-- 自定义渲染 -->
            <template v-else-if="item.render">
              <cell
                :render="item.render"
                :row="scope.row"
                :index="scope.$index + 1"
                :column="item"
              />
            </template>
            <template v-else>
              {{ scope.row[item.key] }}
            </template>
          </slot>
        </template>
      </el-table-column>
    </template>

  </el-table>
</template>

<script lang="jsx">
import cell from './cell.js'
import expand from './expand.js'

export default {
  name: 'DynamicTable',
  components: {
    cell,
    expand
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    filters: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    expandColumns: {
      type: Array,
      default: () => []
    },

    // 默认子节点名称
    defaultChildren: {
      type: String,
      default: 'children'
    }
  },
  data () {
    return {
      guard: 1,
      multipleSelection: [],
      that: this
    }
  },
  computed: {
    children () {
      return this.defaultChildren
    },

    // 默认展开行
    expandRow () {
      if (this.data.length > 0) {
        return [this.data[0].id]
      }
      return []
    }
  },
  mounted () {
    this.initDrag()
  },
  watch: {
    columns () {
      this.$refs.table.doLayout()
    },
    // ↑ ↓ 重新布局 防止表格布局错乱
    data () {
      this.$refs.table.doLayout()
      this.initDrag()
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },

    filterChange (filters) {
      this.$emit('onClickQuery', filters)
    },
    getRowKeys (row) {
      return row.id
    },
    // 展开收起操作
    handleExpand () {
      this.$refs.table.doLayout()
    },
    addBrother (row, data) {
      if (row._parent) {
        row._parent.children.push(data)
      } else {
        this.data.push(data)
      }
    },
    addChild (row, data) {
      if (!row.children) {
        this.$set(row, 'children', [])
      }
      row.children.push(data)
    },
    delete (row) {
      const { _index, _parent } = row
      if (_parent) {
        _parent.children.splice(_index, 1)
      } else {
        this.data.splice(_index, 1)
      }
    },
    getData () {
      return this.tableData
    },
    showRow: function ({ row }) {
      const parent = row._parent
      const show = parent ? parent._expand && parent._show : true
      row._show = show
      return show
        ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;'
        : 'display:none;'
    },
    showSperadIcon (record) {
      return record[this.children] && record[this.children].length > 0
    },
    toggleExpanded (trIndex) {
      const record = this.tableData[trIndex]
      const expand = !record._expand
      record._expand = expand
    },
    handleCheckAllChange (row) {
      this.selcetRecursion(row, row._select, this.defaultChildren)
      this.isIndeterminate = row._select
    },
    selcetRecursion (row, select, children = 'children') {
      if (select) {
        this.$set(row, '_expand', true)
        this.$set(row, '_show', true)
      }
      const sub_item = row[children]
      if (sub_item && sub_item.length > 0) {
        sub_item.map((child) => {
          child._select = select
          this.selcetRecursion(child, select, children)
        })
      }
    },

    // 使表格可以拖拽
    initDrag () {
      if (this.columns.some(item => item.type === 'draggable')) {
        const _this = this
        // 被拖动的元素的索引
        let dragged = null;
        // 被拖动的元素的索引
        let draggedIndex = -1;

        // 目标元素
        let target = document.querySelector('.el-table__body-wrapper tbody');
        let rows = 0;//行数
        setTimeout(function () {
          rows = target.childElementCount
          for (let i = 0; i < target.childElementCount; i++) {
            const child = target.children[i]
            child.draggable = true
            // child.style.cursor = 'copy'
            child.ondragstart = function (e) {
              dragged = e.path[0]
              draggedIndex = e.path[0].rowIndex
              _this.cellMouseIndex = -1
              dragged.style.cursor = 'grabbing'
              e.dataTransfer.setData("json", JSON.stringify(_this.data[draggedIndex]))
            }
            child.ondragend = function (e) {
            }
          }
        }, 0)
      }
    },

    $getMultipleSelection () {
      return this.multipleSelection
    }
  }
}
</script>

<style scoped>
.base-table>>>th {
  color: #333;
  background-color: #f2f3f5;
  border-bottom: none;
}

@keyframes treeTableShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: #2196f3;
}
</style>
