import Login from "./Login"

const Main = () => {
    return (
        <div>

            <main className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="mb-3">Latest Blog Posts</h2>
                        <div className="card border-primary mb-3">
                            <img src="./img/tools.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">10 Essential Baking Tools Every Home Baker Needs</h5>
                                <p className="card-text">In this post, you can highlight the must-have tools for baking, including measuring cups, mixer, spatula, baking sheets, etc. You can explain why each tool is important, how to use them, and provide recommendations for high-quality products.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card border-primary mb-3">
                            <img src="./img/ingredients.jpg" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">The Science Behind Baking: Understanding the Ingredients</h5>
                                <p className="card-text">In this post, you can delve into the science behind baking by exploring the different ingredients used in baking, such as flour, sugar, eggs, and baking powder. You can explain how each ingredient works, what it does, and how it affects the final result. You can also talk about different types of flour, sugar, and other ingredients, and how to choose the right one for your recipe.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card border-primary mb-3">
                            <img src="./img/bake.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">From Beginner to Pro: Baking Tips and Tricks</h5>
                                <p className="card-text">In this post, you can share your experience and tips for baking, from the basics like measuring and mixing, to advanced techniques such as decorating and presentation. You can provide step-by-step instructions for common baking tasks, and offer advice for troubleshooting common problems like over or under baking. You can also include photos and videos to demonstrate the techniques, and provide recipe suggestions for readers to try.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <Login />

                        <h4 className="mb-3">About the Author</h4>
                        <img src="./img/profile.jpg" className="img-fluid mb-3 profile" alt="..." />
                        <p>Hi there! I'm Jane, a passionate baker and foodie. I've always had a love for creating delicious treats in the kitchen and sharing them with family and friends. On this blog, I want to share my baking adventures and inspire others to get creative in the kitchen. From classic recipes to modern twists, I'll be sharing my tips, tricks, and expertise to help you become a confident and skilled baker. Join me on this sweet journey and let's create some amazing baked goods together!</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Main