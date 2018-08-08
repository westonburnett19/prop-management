import React, {Component} from '../../../.cache/typescript/2.9/node_modules/@types/react';
import HeaderBar from './headerBar'
import { Header,HeaderBar } from './header';

class Layout extends Component {
    render() {
        return (
            <div className='layout-grid'>
                <Header/>
                <HeaderBar/>
                {this.props.children}
               
            </div>
        )
    }
}
        
        
export default Layout;