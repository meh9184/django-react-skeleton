import LayoutStore from './Layout';
import AuthStore from './Auth';

class RootStore {
  constructor() {
    this.layout = new LayoutStore(this);
    this.auth = new AuthStore(this);
  }
}

export default RootStore;
