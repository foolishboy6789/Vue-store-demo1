import Vue from 'vue'
import {
  Button,
  Field,
  Form,
  Grid,
  GridItem,
  Image as VanImage,
  Lazyload,
  NavBar,
  Search,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Toast
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(VanImage)
  .use(Toast)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)

Vue.use(Lazyload, {
  lazyComponent: true
})
