import React from 'react';

const Blogs = () => {
    return (
        <section class=" container Accordion mt-5">
            <h3 class="title-package text-center mb-2">Conceptual Question & Answer </h3>
            <div class="row row2 d-flex flex-column-reverse flex-md-row ">
              <div class="col-md-12 col-lg-12">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is Context API?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                      Multiple components can get data by using Context API without passing data manually through props.The Context API is working for this use cases: theming, user language, authentication etc. React.createContext() is the main things. It contains a provider and a consumer.Provider component has a prop and any child can get access while passing this prop.Child function can be called along with its value by consumer component.
                      </div> 
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is Semantic Tag?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body mb-5">
                        The Semantic tag presents meaningful pages of html.It provides various layout and sections of web pages which are better comprehensive. Search engine apps get helps to determine the significance of the page. Semantic tag has great advantages.The page which made by semantic tag are easier to read, has greater accessibility and user experience is much better.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
};

export default Blogs;