

const Categories = () => {
  return (
    <div className="categories">
      <div className="container my-5">
      <h2 className="text-center mb-5">Categories</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <img src="./svg/macaroon.svg" width={30} className="categories-icon" />
                Recipes
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body  lato-font">
              In this category, you can find a wide variety of baking recipes, from classic cakes and cookies to breads and pastries. Each recipe comes with step-by-step instructions, so you can recreate the baked goods in your own kitchen.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <img src="./svg/cookie.svg" width={30} className="categories-icon" />
                Techniques
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body  lato-font">
              This category focuses on the techniques and methods used in baking. You can find articles on topics such as kneading dough, rolling out pie crusts, and decorating cakes.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <img src="./svg/cheesecake.svg" width={30} className="categories-icon" />
                Ingredients
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body  lato-font">
              This category focuses on the techniques and methods used in baking. You can find articles on topics such as kneading dough, rolling out pie crusts, and decorating cakes.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <img src="./svg/brownie.svg" width={30} className="categories-icon" />
                Baking Tips
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body  lato-font">
              Here, you'll find helpful tips and tricks for making the best baked goods. From how to avoid overmixing your batter to tips for perfectly frosted cupcakes, this category is full of practical advice for bakers of all levels.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <img src="./svg/cake_roll.svg" width={30} className="categories-icon" />
                Inspiration
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body  lato-font">
              This category is all about inspiring you to get creative in the kitchen. From new flavor combinations to unique decorating ideas, you'll find plenty of inspiration to help you take your baking to the next level. Whether you're a beginner or an experienced baker, this category is sure to get your creativity flowing!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
