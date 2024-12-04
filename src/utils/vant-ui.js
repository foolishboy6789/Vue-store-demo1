import Vue from 'vue'
import {
  ActionSheet,
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  Image as VanImage,
  Lazyload,
  NavBar,
  Rate,
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
  .use(Rate)
  .use(ActionSheet)
  .use(Dialog)
  .use(Checkbox)
  .use(CheckboxGroup)

Vue.use(Lazyload, {
  lazyComponent: true
})
