import Login from "./Login"
import {Link} from 'react-router-dom'

const Main = () => {
    return (
        <div className="pb-5">

            <main className="container my-5 pb-5">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="mb-3 josefin">Latest Blog Posts</h2>
                        <div className="card border-primary mb-3">
                            <img src="./img/bake.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">From Beginner to Pro: Baking Tips and Tricks</h5>
                                <p className="card-text lato-font">Baking can seem like a daunting task, especially for those who are just starting out. But with a little bit of practice and some helpful tips and tricks, you can transform yourself from a beginner to a pro baker in no time. Whether you're looking to bake a simple cake or create a complex dessert, the following tips will help you master the art of baking and take your skills to the next level.</p>
                                <Link to="/" className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                        <div className="card border-primary mb-3">
                            <img src="./img/tools.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">10 Essential Baking Tools Every Home Baker Needs</h5>
                                <p className="card-text lato-font">Baking can be a lucrative and enjoyable activity, but it can also be frustrating and provide substandard results if you don't have the necessary equipment. Having the correct tools on hand may make a world of difference whether you are an experienced baker or just getting started. We'll discuss the 10 important baking tools that every home baker needs in this blog.</p>
                                <Link to="/" className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                        <div className="card border-primary mb-3">
                            <img src="./img/ingredients.jpg" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">The Science Behind Baking: Understanding the Ingredients</h5>
                                <p className="card-text lato-font">Baking can often seem like a simple process, but there’s actually a lot of science that goes into creating the perfect cake, bread, or cookie. Understanding the ingredients and how they work together is key to creating delicious baked goods that are consistent every time.</p>
                                <Link to="/" className="btn btn-primary">Read More</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">

                        <Login />

                        <h4 className="mb-3 pt-3 josefin">About the Author</h4>
                        <img src="./img/img1.jpg" className="img-fluid mb-3 profile" alt="..." />
                        <p className="lato-font">Hi there! I'm Jane, a passionate baker and foodie. I've always had a love for creating delicious treats in the kitchen and sharing them with family and friends. On this blog, I want to share my baking adventures and inspire others to get creative in the kitchen. From classic recipes to modern twists, I'll be sharing my tips, tricks, and expertise to help you become a confident and skilled baker. Join me on this sweet journey and let's create some amazing baked goods together!</p>
                        <Link to="/about" className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Main