import Header from '../header/index'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import ProductListing from '../product/productListing/index'
import ProductDetail from '../product/productDetail/index'


const Home = () => {
    return (
        <div>
            <Router>
                <Header/>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <Switch>
                                <Route exact path="/" component={ProductListing}/>
                                <Route exact path="/product" component={ProductListing}/>
                                <Route path={`/product/:id`} component={ProductDetail}/>
                                <Route><div className="text-center">OOPS! 404 NOT FOUND</div></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>  
        </div>
    )
}

export default Home;