<template>
  <div class="pagination-wrapper">
    <nav class="pagination">
      <ul class="page-numbers">
        <li><g-link :to="goPreviousPage">&lt;</g-link></li>
        <li v-for="page in totalPages" :key="page">
          <g-link :to="goNumberPage(page)">{{ page }}</g-link>
        </li>
        <li><g-link :to="goNextPage">&gt;</g-link></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "@vue/composition-api";

type Props = {
  totalPages: {
    type: number;
  };
  currentPage: {
    type: number;
  };
  base: {
    type: string;
  };
};
export default defineComponent({
  props: {
    totalPages: {
      type: Number,
      require: true,
    },
    currentPage: {
      type: Number,
      require: true,
    },
    base: {
      type: String,
      require: true,
    },
  },
  setup(props: Props) {
    const state = reactive({});

    const goPreviousPage = computed(() => {
      function returnPreviousLink(): void | string {
        if (props.currentPage >= props.totalPages) {
          const currentPage: number = Number(props.currentPage);
          if (currentPage - 1 === 1) {
            return `${props.base}`;
          } else {
            return `${props.base}/${currentPage - 1}`;
          }
        }
      }

      return returnPreviousLink();
    });

    const goNextPage = computed(() => {
      function returnNextLink(): void | string {
        if (props.currentPage < props.totalPages) {
          const next: number = Number(props.currentPage);
          console.log(next);
          return `${props.base}/${next + 1}`;
        }
      }

      return returnNextLink();
    });

    function goNumberPage(pageNumber: number): void | string {
      if (pageNumber > 1) {
        return `${props.base}/${pageNumber}`;
      } else if (pageNumber === 1) {
        return `${props.base}`;
      }
    }
    return {
      state,
      goPreviousPage,
      goNumberPage,
      goNextPage,
    };
  },
});
</script>

<style>
li {
  list-style: none;
}
.pagination-wrapper {
  margin-top: 30px;
  width: 100%;
}

.pagination {
  text-align: center;
}

.pagination ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
}
.color {
  color: black;
}

.pagination li {
  overflow: hidden;
  margin: 4px;
  padding: 0;
}
.pagination a,
.pagination span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0 3px 0 0;
  border-radius: 50%;
  text-decoration: none;
  color: #666;
  border: 2px solid #fff;
}
.pagination a:hover {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0 3px 0 0;
  border-radius: 50%;
  text-decoration: none;
  color: #fff;
  background: #999;
  border: 2px solid #999;
}
.pagination .pagenation-current {
  color: #f96da5;
  cursor: default;
  margin: 0 3px 0 0;
  border: 2px solid #f96da5;
}
.page-numbers {
  width: auto;
  padding: 0;
  background: transparent;
}
</style>