import { observable, action } from 'mobx';

export default class Layout {
  @observable topTitle = 'Django React Demo';
  @observable drawer = true;
  @observable navigationItems = [
    { text: 'Company', to: '/company', icon: 'account_balance' },
    { text: 'Industry', to: '/industry', icon: 'business' },
    { text: 'Job Category', to: '/job-category', icon: 'work' }
  ];

  constructor(root) {
    this.root = root;
  }

  @action toggleDrawer = () => {
    this.drawer = !this.drawer;
  }
}
