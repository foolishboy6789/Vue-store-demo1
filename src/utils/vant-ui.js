import Vue from 'vue'
import {
  Button,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
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
  .use(Icon)

Vue.use(Lazyload, {
  lazyComponent: true
})
