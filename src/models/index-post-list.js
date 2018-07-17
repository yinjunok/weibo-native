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
    setState(state, payload) {
      const {
        list
      } = state;

      // 去掉重复的 psot.
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
    async fetchList(page) {
      this.setLoading(true);

      try {
        const {
          data
        } = await get('/api/v1/auth/post', {
          params: {
            page,
          }
        });

        this.setState(data);
      } catch (err) {
        // pass
      }
    }
  }
}