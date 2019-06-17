import Vue from 'vue';

import elementLang from 'element-ui/lib/locale/lang/pt-br';
import elementLocale from 'element-ui/lib/locale';

import {
  Alert,
  Aside,
  Badge,
  Button,
  Checkbox,
  Col,
  Collapse,
  CollapseItem,
  Card,
  Container,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Dialog,
  Header,
  Input,
  Loading,
  Main,
  Menu,
  MenuItem,
  Option,
  Pagination,
  Radio,
  RadioGroup,
  Row,
  Select,
  Submenu,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Tag,
  Tooltip,
  InputNumber,
} from 'element-ui';


import './assets/styles/variables.scss';
import './assets/styles/main.scss';
import App from './App';

Vue.use(Alert);
Vue.use(Aside);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Col);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Loading);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Select);
Vue.use(Submenu);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);

elementLocale.use(elementLang);

export default new Vue({
  // router,
  // store,
  components: { App },
  template: '<App/>',
}).$mount('#app');
