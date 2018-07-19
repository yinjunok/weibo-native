// 首页 post 列表
import {
  get
} from 'axios';

export default {
  state: {
    loading: true,
    list: [],
    page: 1,
    total: 0,
    limit: 20,
  },
  reducers: {
    setLoading(state, loading) {
      return {
        ...state,
        loading,
      }
    },

    clear() {
      return {
        loading: true,
        list: [],
        page: 1,
        total: 0,
        limit: 20,
      }
    },

    setList(state, payload) {
      const { list } = state;
      return {
        loading: false,
        list: payload.data,
        page: payload.page,
        total: payload.total,
        limit: payload.limit,
      }
    },

    updateList(state, payload) {
      const { list } = state;

      // 去掉重复的 post.
      const dataList = payload.data.filter((item) => {
        for (let i = 0; i < list.length; ++i) {
          if (item.id === list[i].id) {
            return false;
          }
        }

        return true;
      });
      return {
        loading: false,
        list: list.concat(dataList),
        page: payload.page,
        limit: payload.limit,
        total: payload.total,
      };
    },
  },
  effects: {
    async updateListFromOrigin(page) {
      this.setLoading(true);

      try {
        const { data } = await get('/api/v1/auth/post', {
          params: {
            page,
          }
        });

        this.updateList(data);
      } catch (err) {
        // pass
      }
    },

    async getPostList() {
      this.clear();

      try {
        const { data } = await get('/api/v1/auth/post', {
          params: {
            page: 1,
          }
        });

        this.setList(data);
      } catch (err) {
        // pass
      }
    }
  },
}