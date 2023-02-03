const Categories = () => {
  return (
    <div>
      <div class="container my-5">
        <h2 class="text-center mb-5">Categories</h2>

        <div class="accordion" id="categoriesAccordion">

          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Recipes
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#categoriesAccordion"
            >
              <div class="card-body">
                In this section, you can feature all your baking recipes,
                including cakes, cookies, breads, pastries, and more. You can
                categorize your recipes based on difficulty level, ingredients,
                and special occasions. Use high-quality photos and clear
                instructions to make your recipes easy to follow.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Techniques
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#categoriesAccordion"
            >
              <div class="card-body">
                This section can be all about the how-tos of baking. You can
                share your tips on measuring, mixing, kneading, rolling, and
                more. You can also include videos and step-by-step instructions
                to help your readers understand the techniques.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Ingredients
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#categoriesAccordion"
            >
              <div class="card-body">
              Here, you can talk about the different ingredients used in baking, including flour, sugar, eggs, and more. You can also discuss the types of ingredients and how to choose the right one for your recipe.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Baking Tips
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#categoriesAccordion"
            >
              <div class="card-body">
              This section can be a collection of your best baking tips and advice, from how to prevent overbaking to how to decorate your creations. You can share your tips on troubleshooting common baking problems and provide advice for achieving the best results.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Inspiration
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#categoriesAccordion"
            >
              <div class="card-body">
              This section can be a place to share your baking inspiration, whether it's a recipe you found, a baking challenge you took on, or a baking trend you're excited about. You can also feature other bakers and their creations, and share your thoughts on the latest baking trends.
              </div>
            </div>
          </div>










        </div>
      </div>
    </div>
  );
};

export default Categories;
